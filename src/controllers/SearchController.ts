import { Request, Response } from "express"
import parseStringAsArray from '../utils/parseStringAsArray'
import Dev from '../models/Dev'

export default {
    async index(request: Request, response: Response) {
        console.log(request.query)
        const { latitude, longitude, techs } = request.query
        
        const techsArray = parseStringAsArray(techs)
        console.log(techs, latitude, longitude)

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        })
        return response.json({ devs })
    }
}