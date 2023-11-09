export function add (a,b) {
    return a + b
}

export function substrac (a,b) {
    return a-b
}

export function multiplicate (a,b) {
    return a * b
}

export function divide (a,b) {
    return a / b
}

// console.log(add(5,5));
// console.log(substrac(205,5));
// console.log(multiplicate(5,10));
// console.log(divide(1000,4));

// Con esto exportamos todas estas funciones creadas para usarlo en otro archivo.

export default {
    add,
    substrac,
    multiplicate,
    divide
}

