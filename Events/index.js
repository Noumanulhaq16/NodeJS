const EventEmitter =require('events');

const event = new EventEmitter();

event.on('SayMyName',(ree,dee)=>{
    console.log(ree,dee)
});

event.emit('SayMyName',200,'hee')

