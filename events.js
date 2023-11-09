const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (data, secondData) => {
    console.log("resived");
    
    console.log(data);
    console.log(secondData);

})

customEmitter.emit('response', "hola mundo",[2,3,4,5,6,7,8])
// customEmitter.emit('response', "fatz")
// customEmitter.emit('response', "alejandro")
// customEmitter.emit('response', 30)
// customEmitter.emit('response', {edad:30 , pais: "mexico"})

