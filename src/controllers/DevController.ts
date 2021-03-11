import axios from 'axios'
import { Request, Response } from 'express'
import parseStringAsArray from '../utils/parseStringAsArray'
import Dev from '../models/Dev'
import { findConnections, sendMessage } from '../websocket'

export default {

    async index(request: Request, response: Response) {
        const devs = await Dev.find()
        return response.json(devs)
    },

    async store(request: Request, response: Response) {
        const { github_username, techs, latitude, longitude } = request.body

        let dev = await Dev.findOne({ github_username })

        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
            const { login, avatar_url, bio } = apiResponse.data

            const techsArray = parseStringAsArray(techs)

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
            dev = await Dev.create({
                github_username,
                name: login,
                avatar_url,
                bio,
                techs: techsArray,
                location

            })

            const sendSocketMessageTo = findConnections({
                latitude, longitude
            }, techsArray)

            sendMessage(sendSocketMessageTo, 'new-dev', dev)
        }
        return response.json(dev)
    },
    async update (request: Request, response: Response) {
        const { github_username } = request.params;
        const { techs, longitude, latitude } = request.body;    
        const dev = await Dev.findOne({ github_username }) as any

        if (techs) var techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }

        const changedDev = await Dev.updateOne({ github_username }, {
            techs: techs ? techsArray : dev.techs,
            github_username,
            location
        });

        return response.json(changedDev);
     },
    async destroy (request: Request, response: Response) {
        const { github_username } = request.params
        const dev = await Dev.remove({ github_username })
        return response.json(dev)
       }
}