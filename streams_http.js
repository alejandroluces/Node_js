// Con esto vamos a leer el archivo y enviarlo por partes al cliente
// para que no se sature la memoria

const http = require('http');
const {createReadStream} = require('fs');

const server = http.createServer((req, res) => {
        const fileStream = createReadStream('./data/bigfile.txt', {
            encoding: 'utf8'
        })
        

        fileStream.on("data", (chunk) => {
            fileStream.pipe(res);
        })

        fileStream.on('error', (error) => {
            console.log(error);
        })
})

    server.listen(3000);

    console.log(`server listening on port ${3000}`);

