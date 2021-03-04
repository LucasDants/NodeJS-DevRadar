const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async index(request, response) {
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
        console.log(devs)

        //buscar todos os devs num raio de 10km
        //filtrar por tecnologias
        console.log(techsArray, "ok")
        return response.json({ devs })
    }
}