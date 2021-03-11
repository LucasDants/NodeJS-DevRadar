import express from 'express'
import mongoose from 'mongoose'
import routes from './routes'
import cors from 'cors'
import { Server} from 'http'
import { setupWebsocket } from './websocket'

const app = express();
const server = new Server(app)

setupWebsocket(server)

mongoose.connect('mongodb+srv://<user>:<password>@<cluster>', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)
