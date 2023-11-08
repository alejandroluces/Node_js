// console.log("first");
// setTimeout(()=>{
//     console.log("second");
    
// },0)

// console.log("third");

const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write("WELCOME TO SERVER");
        res.end();
    }
    // task
    // blocking Code_Codigo bloqueante
    if(req.url === '/about'){

        // for(let i=0;i<100000;i++){
        //     console.log(Math.random()*i);
        // }
        return res.end("Not page");
    }
    res.end("Not found");
})
server.listen(3000)
console.log(`Listening on port 3000`);
