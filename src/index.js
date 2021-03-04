const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

const http = require('http')
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app)

setupWebsocket(server)

mongoose.connect('mongodb+srv://<user>:<password>@<cluster>', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json()) //todas as rotas para aplicação
app.use(routes)
//metodos HTTP: get, post, put, delete

//tipos de parâmetros:
// Query Params: req.query (Filtros, ordenacao, paginacao, ...)
//Route Params: request.params (identificar um recurso na alteração ou remoção)
//Body: request.body (dados para criaçao de registro)

//MngoDB (Não-relacional)


app.listen(3333)
