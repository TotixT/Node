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
        <form action="/users" method="POST">
        <label for="users">Este boton redirecciona a Users</label>
        <button type="submit">Send</button>
        </form>
        <form action="/categories" method="POST">
        <label for="categories">Este boton redirecciona a Categories</label>
        <button type="submit">Send</button>
        </form>
        <form action="/products" method="POST">
        <label for="products">Este boton redirecciona a Products</label>
        <button type="submit">Send</button>
        </form>
        <form action="/employees" method="POST">
        <label for="employees">Este boton redirecciona a Employees</label>
        <button type="submit">Send</button>
        </form>
        <form action="/customers" method="POST">
        <label for="customers">Este boton redirecciona a Customers</label>
        <button type="submit">Send</button>
        </form>
        <form action="/sales" method="POST">
        <label for="sales">Este boton redirecciona a Sales</label>
        <button type="submit">Send</button>
        </form>
        <form action="/shopping" method="POST">
        <label for="shopping">Este boton redirecciona a Shopping</label>
        <button type="submit">Send</button>
        </form>
        <form action="/home" method="POST">
        <label for="home">Este boton redirecciona a Home</label>
        <button type="submit">Send</button>
        </form>
        </body>`);
        res.write('</html>');
        return res.end();
    }

    if(url === '/home' && method === 'POST'){
        fs.writeFileSync('home.txt', 'Prueba 1');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    if(url === '/users'){
        res.write('<html>');
        res.write('<head><title>My First Response Page</title></head>');
        res.write(`<body>
        <form action="/" method="POST">
        <table>
            <thead>
                <tr>
                    <td>ID USUARIO</td>
                    <td>NOMBRE USUARIO</td>
                    <td>CORREO</td>
                    <td>TELEFONO</td>
                </tr>
            </thead>
            <tbody>
                <tr>    
                    <td>1</td>
                    <td>Santiago Lopez Garcia</td>
                    <td>Santiago@gmail.com</td>
                    <td>3125902312</td>
                </tr>
            </tbody>
        </table>
        <label for="Volver">Este boton redirecciona al Inicio</label>
        <button type="submit">Volver</button>
        </form>
        </body>`);
        res.write('</html>');
        return res.end();
    }

    if(url === '/categories'){
        res.write('<html>');
        res.write('<head><title>My First Response Page</title></head>');
        res.write(`<body>
        <form action="/" method="POST">
        <table>
            <thead>
                <tr>
                    <td>ID CATEGORIA</td>
                    <td>NOMBRE CATEGORIA</td>
                </tr>
            </thead>
            <tbody>
                <tr>    
                    <td>1</td>
                    <td>Ropa</td>
                </tr>
            </tbody>
        </table>
        <label for="Volver">Este boton redirecciona al Inicio</label>
        <button type="submit">Volver</button>
        </form>
        </body>`);
        res.write('</html>');
        return res.end();
    }

    if(url === '/products'){
        res.write('<html>');
        res.write('<head><title>My First Response Page</title></head>');
        res.write(`<body>
        <form action="/" method="POST">
        <table>
            <thead>
                <tr>
                    <td>ID PRODUCTS</td>
                    <td>NOMBRE PRODUCTO</td>
                    <td>STOCK</td>
                </tr>
            </thead>
            <tbody>
                <tr>    
                    <td>1</td>
                    <td>Camisa/Chaqueta</td>
                    <td>300</td>
                </tr>
            </tbody>
        </table>
        <label for="Volver">Este boton redirecciona al Inicio</label>
        <button type="submit">Volver</button>
        </form>
        </body>`);
        res.write('</html>');
        return res.end();
    }

    if(url === '/employees'){
        res.write('<html>');
        res.write('<head><title>My First Response Page</title></head>');
        res.write(`<body>
        <form action="/" method="POST">
        <table>
            <thead>
                <tr>
                    <td>Titulo</td>
                    <td>Titulo 2</td>
                </tr>
            </thead>
            <tbody>
                <tr>    
                    <td>Texto</td>
                    <td>Texto 2</td>
                </tr>
            </tbody>
        </table>
        <label for="Volver">Este boton redirecciona al Inicio</label>
        <button type="submit">Volver</button>
        </form>
        </body>`);
        res.write('</html>');
        return res.end();
    }

    if(url === '/customers'){
        res.write('<html>');
        res.write('<head><title>My First Response Page</title></head>');
        res.write(`<body>
        <form action="/" method="POST">
        <table>
            <thead>
                <tr>
                    <td>ID CLIENTE</td>
                    <td>NOMBRE CLIENTE</td>
                </tr>
            </thead>
            <tbody>
                <tr>    
                    <td>1</td>
                    <td>Rodrigo</td>
                </tr>
            </tbody>
        </table>
        <br>
        <form action="/create" method="POST">
        <label name="create">Crear Cliente</label>
        <button type="submit">Crear</button>
        </form>
        <form action="/" method="POST">
        <label for="Volver">Este boton redirecciona al Inicio</label>
        <button type="submit">Volver</button>
        </form>
        </body>`);
        res.write('</html>');
        return res.end();
    }

    // if(url === '/create'){
    //     res.write('<html>');
    //     res.write('<head><title>My First Response Page</title></head>');
    //     res.write(`<body>
    //     <h1>Prueba</h1>
    //     <form action="/" method="POST">
    //     <label for="Volver">Este boton redirecciona al Inicio</label>
    //     <button type="submit">Volver</button>
    //     </form>
    //     </body>`);
    //     res.write('</html>');
    //     return res.end();
    // }



    if(url === '/sales'){
        res.write('<html>');
        res.write('<head><title>My First Response Page</title></head>');
        res.write(`<body>
        <form action="/" method="POST">
        <table>
            <thead>
                <tr>
                    <td>Titulo</td>
                    <td>Titulo 2</td>
                </tr>
            </thead>
            <tbody>
                <tr>    
                    <td>Texto</td>
                    <td>Texto 2</td>
                </tr>
            </tbody>
        </table>
        <label for="Volver">Este boton redirecciona al Inicio</label>
        <button type="submit">Volver</button>
        </form>
        </body>`);
        res.write('</html>');
        return res.end();
    }

    if(url === '/shopping'){
        res.write('<html>');
        res.write('<head><title>My First Response Page</title></head>');
        res.write(`<body>
        <form action="/" method="POST">
        <table>
            <thead>
                <tr>
                    <td>Titulo</td>
                    <td>Titulo 2</td>
                </tr>
            </thead>
            <tbody>
                <tr>    
                    <td>Texto</td>
                    <td>Texto 2</td>
                </tr>
            </tbody>
        </table>
        <label for="Volver">Este boton redirecciona al Inicio</label>
        <button type="submit">Volver</button>
        </form>
        </body>`);
        res.write('</html>');
        return res.end();
    }

    // Enviando Respuestas
    // res.setHeader('Content-Type','text/html');
    // res.write('<html>');
    // res.write('<head><title>My First Response Page</title></head>');
    // res.write('<body><h1>Hello from Node JS DUUUUUUDE</h1></body>');
    // res.write('</html>');
    // res.end();
});

server.listen(7000);