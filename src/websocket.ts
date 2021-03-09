import socketio, { ServerOptions } from 'socket.io'
import parseStringAsArray from './utils/parseStringAsArray'
import calculatedDistance from './utils/calculatedDistance'
import SocketIO from 'socket.io';
interface Coordinates {
    latitude: number
    longitude: number
}
interface ConnectionsProps {
    id: string
    coordinates: Coordinates
    techs: string[]
}

let io;
const connections = [] as ConnectionsProps[]

export const setupWebsocket = (server) => {
    const io = socketio(server)

    io.on('connection', socket => {
        const { latitude, longitude, techs } = socket.handshake.query
        connections.push({
            id: socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude)
            },
            techs: parseStringAsArray(techs),
        })
    })

}

export const findConnections = (coordinates: Coordinates, techs: string[]) => {
    return connections.filter(connection => {
        return calculatedDistance(coordinates, connection.coordinates) < 10
            && connection.techs.some(item => techs.includes(item))
    })
}

export const sendMessage = (to, message: string, data) => {
    to.forEach(connection => {
        io.to(connection.id).emit(message, data)
    })
}







