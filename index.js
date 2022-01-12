const express = require('express')
const contenedor = require("./contenedor.js");
const file = new contenedor('./productos.txt')

const PORT = 8080 || process.env.PORT;
const app = express()
 
app.get('/', function (req, res) {
    res.send('* Express Server Clase-6 *')
})

app.get('/productos/', function (req, res) {   
    res.send(file.getAll())
})

app.get('/productoRandom/', function (req, res) {  
    res.send(file.getRandom())
})

const server = app.listen(PORT, () => {
    console.log(`Index.js http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))

 
