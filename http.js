// Creando servidor con http
const http = require('http');


const server = http.createServer((request,response)=>{

    console.log(request.url);

    if(request.url === "/"){
        response.write("Welcome to the server")
        return response.end()
    }


    if(request.url === "/about"){
        response.write("acerca de")
        return response.end()
    }
    response.write(`<h1>Oops! Not found </h1>
    <a href="/">back home</a>`);
    response.end();
})
// url http://localhost:3000/
server.listen(3000);



console.log("servidor el linea puerto 3000");



