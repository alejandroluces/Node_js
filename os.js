//  require("os") brinda información sobre el hardware y el sistema operativo. Toda la información de la arquitectura, CPU, memoria

const os = require("os")

console.log(os.userInfo());
console.log(os.uptime());
console.log(os.platform());
console.log(os.totalmem());
console.log(os.freemem());

console.table({

    os:os.platform(),
    version: os.release(),
    totalMemory: os.totalmem()

});





