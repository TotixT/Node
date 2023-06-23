// 1. Importar el modulo global http
const http = require('http');
const fs = require('fs');

// function requestListener(req, res){
//      Es mejor pasar como funcion anonima
// }
// requestListener

// Crea el servidor web
// Preferiblemente usar arrow function
const server = http.createServer((req, res)=>{
    const url = req.url;
    const method = req.method;
    // console.log(req.url, req.method, req.headers);
    // Cerrar o Salir del ciclo continuo de eventos
    // process.exit();

    //Routing
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>My First Response Page</title></head>');
        res.write(`<body>
        <form action="/message" method="POST">
        <input type="text" name="message">
        <button type="submit">Send</button>
        </form>
        </body>`);
        res.write('</html>');
        return res.end();
    }

    if(url === '/message' && method === 'POST'){
        fs.writeFileSync('message.txt', 'Duuude');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    //Enviando Respuestas
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Response Page</title></head>');
    res.write('<body><h1>Hello from Node JS DUUUUUUDE</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(4000);