const add = (a,b) =>{
    return a + b
}

const substrac = (a,b) =>{
    return a-b
}

const multiplicate = (a,b) =>{
    return a * b
}

const divide = (a,b) =>{
    return a / b
}

// console.log(add(5,5));
// console.log(substrac(205,5));
// console.log(multiplicate(5,10));
// console.log(divide(1000,4));

// Con esto exportamos todas estas funciones creadas para usarlo en otro archivo.

module.exports = {
    add,
    substrac,
    multiplicate,
    divide
}

