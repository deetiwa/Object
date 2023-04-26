// proxies (proxy object) => used to wrap an object and redefine various operations into the object such as reading, insertion, validation.

//Example

// let student1 = {
//     age: 24,
//     name: "john"
// }

// const handler = {}
//     // get: function(obj, prop) {
//         // return obj[prop] ? obj[prop] : 'property does not exist';
// // }
// // }

// const proxy = new Proxy(student1, handler);
// console.log(proxy.name); 
// console.log(proxy.age); 
// console.log(proxy.class); 

// 

let student = {
    name: 'Jack',
    age: 23
}

const handler = {
    set: function (obj, prop) {
        if (obj[prop]) {
            
            // cannot change the student value
            console.log('Read only')
        }
    }
};

const proxy = new Proxy(student, handler);

proxy.name = 'John'; // Read only
proxy.age = 33; // Read only