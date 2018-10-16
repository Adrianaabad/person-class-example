// asi te traes la clase person (es como el plano de la casa pero aplicado a una persona)
// aquí te traes la definición de persona
var Person = require('./Person.js');

//el policia hereda de la persona con el comando extends y  super hace referencia al padre.
// con eso puedo crear instancias de la persona  

class Police extends Person {
    constructor(name, lastName){
        super(name, lastName);
    }

    shoot(){

        console.log('my name is ' + this.name + ', and i will shoot you')

    }

}

module.exports = Police;
