class Dog{
    constructor(name){
        this.name = name
    }
    bark() {
        console.log('dog can bark');
    }
}

Dog.prototype['swim'] = function () {console.log(this.name, ' dog can swim')};

const dog1 = new Dog('tommy');
const dog2 = new Dog('bruno');
const dog3 = new Dog('jimmy');

Dog.prototype['run'] = function () {console.log(this.name, 'dog can rum')};

dog1.run();
dog2.run();
dog3.run();

dog1.__proto__['eat'] = function () {console.log(this.name, 'dog can eat')};

dog1.eat();
dog2.eat();
dog3.eat();
