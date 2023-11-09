//creamos un archivo grande en la carpeta data
/*
const {writeFile} = require('fs/promises');

const createBigFile = async () => {
    await writeFile('./data/bigfile.txt', "Hola mundo, como estas?".repeat(13000));
}

createBigFile();

//creamos un archivo grande en la carpeta data_______-fin
*/


// Leemos el archivo grande a traves de un string

const{createReadStream}= require('fs');
const { split } = require('lodash');
const stream = createReadStream('./data/bigfile.txt' , {encoding: 'utf-8', highWaterMark: 1024})

stream.on('data', (chunk) => {
    console.log(chunk);
})

stream.on("end", () => {
    console.log("termine de leer el archivo");
}
)

stream.on("error", (error) => {
    console.log(error);

}
)





