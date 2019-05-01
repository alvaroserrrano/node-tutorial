//Event modules and eventEmitter

//require modules
const EventEmitter = require('events');
//create object
eventEmitter = new EventEmitter();
//emit event-->2 params(listener, function to execute when event is triggered)
eventEmitter.on('tutorial-2', () => {console.log('tutorial-2 event has occurred')});
//if you run 'node app-2.js' nothing will happen at this point

//we have to emit the event
eventEmitter.emit('tutorial-2');

//Create custom object that takes advantage of using events
class Person extends EventEmitter{
    constructor(name){
        super();
        this.name = name
    }
    getName(){
        return this.name
    }
}

//create object of person class
let Alvaro = new Person ('Alvaro');
//create another object
let Alba = new Person('Alba');
//we can now add a listenter to the Alvaro object
Alvaro.on('callName', () => console.log('My name is ' + Alvaro.getName()));
Alvaro.emit('callName');
Alba.on('callName', () => {console.log('My name is ' + Alba.getName())});
Alba.emit('callName');
//we have created 2 objects to show the asynchronous behaviour of Node
//Alvaro´s event is emitted first