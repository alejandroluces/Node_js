// importando datos de myModule.js

// const { myWebAdress, numbers } = require("./module/myModule");
// console.log(myWebAdress);
// console.log(numbers);



// con esto reutilizamos las funciones en el archivo  math/index.js
const math = require("./math/index")

console.log(math);
console.log(math.add(10,10));
console.log(math.substrac(10,9));
console.log(math.multiplicate(100,9));
console.log(math.divide(900,3));



