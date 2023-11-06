/* 

// FS ()
const fs = require("fs")
// De esta forma podemos de leer archivos
const first = fs.readFileSync("./data/first.txt","utf-8")
const second = fs.readFileSync("./data/second.txt")
const fourt = fs.readFileSync("./data/fourth.txt")


console.log(first);
console.log(second.toString());

// Con esto creamos un archivo usando node.js
// Usando Modulo  fs.writeFileSync

// Con esto agregamos y creamo archivo con algun contenido
const title = "este es el contenido del 4to archivo Nuevo"
fs.writeFileSync("./data/fourth.txt", title)

console.log(fourt.toString());

*/

fs.readFile("./data/first.txt", (error,data)=>{
    if(error){
    console.log(error)}
    console.log(data.toString());

    fs.readFile("./data/second.txt", (error,data)=>{
        if(error){
        console.log(error)}
        console.log(data.toString());

        fs.writeFile("./data/newFile.txt", "Archivo NewFile creado desde fs",(err,data)=>{
            console.log(err);
            console.log(data);
            
            
        })
        
        
    })
   
    
})
