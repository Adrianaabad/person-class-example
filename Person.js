
class Person {

    constructor(name, lastName) {
            this.name = name;
            this.lastName = lastName;
    }

    sayHello(){
        console.log('Hello my name is '+ this.name);
    }

    sayBye(){
        console.log('Bye darling!')
    }
}


module.exports = Person;


