
class Person {

    constructor(name, lastName) {
            this.name = name;
            this.lastName = lastName;
    }

    sayHello(){
        console.log('Hello my name is'+ this.name);
    }

}

var person = new Person('Adriana','Abad');

console.log(person.sayHello);

