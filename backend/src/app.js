//Carregando modulos
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")

const routeProduct = require("./router/routeProduct")
const routePolitic = require("./router/routePolitic")
const database = require("./db/db")


const port = 5050

//configuracoes
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    //configuracao de seguranca
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
    
        res.header("Access-Control-Allow-Methods", "GET,PATCH,POST,DELETE");
        res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
        app.use(cors());
        next();
      });

//Rotas
app.use("/product",routeProduct)
app.use("/politic",routePolitic)

app.listen(port,async()=>{
    await database.sync()
    console.log("Rodando")
}) 