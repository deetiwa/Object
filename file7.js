//Javscript async/await

// async =>We use the async keyword with a function to represent that the function is an asynchronous function. 
//The async function returns a promise.

function f()
 {
    console.log('Async function.');

    return Promise.resolve(1);
}

f().then(function(result)
 {
    console.log(result)
});


// a promise

let promise = new Promise(function (resolve, reject)
 {
    setTimeout(function () 
    {
    resolve('Promise resolved')}, 4000); 
});


async function asyncFunc() {       // async function

     
    let result = await promise; // wait until the promise resolves

    console.log(result);
    console.log('hello');
}


asyncFunc();   // calling the async function