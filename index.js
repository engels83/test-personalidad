//import
const colerico = require("./modulos/colerico");
const flematico = require("./modulos/flematico");
const melancolico = require("./modulos/melancolico");
const sanguineo = require("./modulos/sanguineo");
const path = require("path");
const bodyParser = require("body-parser");

//importar la libreria express
const express = require("express");

// 2. instanciar un objeto de tipo server / aplicacion a partir de express
const app = express();

// 3. declarar una variable que guard eel puerto
const port = 8080;

// establecer un midleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 4. crear una ruta http (opcional)
app.get("/", (req, resp) => {
    //resp.send("Hola Mundo");
    resp.sendFile(path.join(__dirname, "./vista/index.html"));
});

// 5. inicializar el listener del servidor

app.listen(port,()=>{
    console.log("Servidor inicializado en http://localhost:"+port);

});