require('dotenv').config()
const http = require('http')

// Agregamos (req, res) para poder interactuar con el navegador
function requestController(req, res) {
    console.log('Bienvenidos al curso')
    
    // Configuramos para que el navegador entienda que es texto con formato
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    
    // Aquí escribe lo que quieres que aparezca en la página
    res.end(`
        <h1>Despliegue Exitoso</h1>
        <p><strong>Estudiante:</strong> Johan David Vallejos Vilcape</p>
        <p><strong>Proyecto:</strong> Despliegue 01 - Backend</p>
        <p><strong>Estado:</strong> Servidor corriendo en Render</p>
    `)
}

const server = http.createServer(requestController)

// Usamos el puerto de la variable de entorno, o el 4000 por defecto
const PORT = process.env.PORT || 4000

server.listen(PORT, function() {
    console.log("Aplicacion corriendo en: " + PORT)
})