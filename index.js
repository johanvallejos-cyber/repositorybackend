require('dotenv').config()
const http = require('http')

// Agregamos (req, res) para poder interactuar con el navegador
function requestController(req, res) {
    console.log('Bienvenidos al curso')
    
    // Esto es lo que verá el profesor cuando abra tu link de Render
    res.setHeader('Content-Type', 'text/plain')
    res.end('Servidor funcionando correctamente en la nube!')
}

const server = http.createServer(requestController)

// Usamos el puerto de la variable de entorno, o el 4000 por defecto
const PORT = process.env.PORT || 4000

server.listen(PORT, function() {
    console.log("Aplicacion corriendo en: " + PORT)
})