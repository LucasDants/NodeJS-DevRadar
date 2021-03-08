import express from 'express'
import mongoose from 'mongoose'
import routes from './routes'
import cors from 'cors'
import http from 'http'
import { setupWebsocket } from './websocket'

const app = express();
const server = new http.Server(app)

setupWebsocket(server)

mongoose.connect('mongodb+srv://devRadar:devRadar@devradar.3a8b7.mongodb.net/devRadar?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)
