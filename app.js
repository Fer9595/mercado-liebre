

const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;


app.use(express.static("public"));

app.get("/home",function (req, res) {
    console.log("entraron a la ruta home")

    const rutaAlArchivo = path.join(__dirname, './views/home.html')

    res.sendFile(rutaAlArchivo);
});
app.listen(3080,() => console.log("esto fue exitoso"));

app.get("/registro",function (req, res) {
    console.log("entraron a la ruta home")

    const rutaAlArchivo = path.join(__dirname, './views/registro.html')

    res.sendFile(rutaAlArchivo);
});

app.listen (PORT, () => {
    console.log('servidor en el puerto'+PORT);
});
