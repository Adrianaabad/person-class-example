var Police = require('./police');
var Person = require('./Person');


var adriana = new Person('Adriana','Abad');
var alonso = new Police('Alonso', 'Olate');

//console.log(person.sayHello);
// el método va en parentesis, si no va con el paréntesis, te invoca el método



adriana.sayHello();
alonso.sayHello();
alonso.sayBye();
alonso.shoot();

