// const {readFile} = require('fs');
// const {promisify} = require('util')


//Con este nodulo traemos promesas de manera estandar. usando el modulo readFile
// const {readFile} = require("fs/promises"); 
const {readFile} = require("fs/promises");

// promysify    
// const readFilePromise = promisify(readFile);// promysify    

// const getText = (pathFile)=>{

//     return new Promise((resolve, reject) => {
//         readFile(pathFile, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             }
//             resolve(data);
//         });
//     })
// }
// codigo asincrono
// getText('./data/fourth.txt')
//     .then ((result) => console.log(result))
//     .then (() => getText("./data/first.txt"))
//     .then ((result) => console.log(result))
//     .catch ((error) => console.log(error));

    
// otraforma de hacerlo. Con con async await

async function read (){
 try{
     //throw new Error('Algo salio mal'); // para probar el catch y validar el error
     const result = await readFile('./data/first.txt',"utf-8");// await es para esperar a que se ejecute la funcion
     console.log(result);
     const result2 = await readFile('./data/second.txt',"utf-8");// await es para esperar a que se ejecute la funcion
    console.log(result2);
    const result3 = await readFile('./data/third.txt',"utf-8");// await es para esperar a que se ejecute la funcion
    console.log(result3);
    const result4 = await readFile('./data/fourth.txt',"utf-8");// await es para esperar a que se ejecute la funcion
    console.log(result4);
    
 } catch (error){
     console.log(error); // para validar el error
 }
}
read();



