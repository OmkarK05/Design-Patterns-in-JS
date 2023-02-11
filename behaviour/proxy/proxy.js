let person = {
    name: 'Omkar',
    age : '20',
    birth_year : '1998'
}

let personCopy = new Proxy(person, {
    get: function(state, key){
        return 'abc'
    },

    set: function(obj, key, value){
        console.log(obj, key, value);
    }
})

personCopy.age = '10';
console.log(personCopy.age);