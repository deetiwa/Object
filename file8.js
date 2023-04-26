// const number = 40;
// try {
//     if(number > 50) {
//         console.log('Success');
//     }
//     else {

//         throw new Error('The number is low');
//     }

    
//     console.log('hello'); // if throw executes, the below code does not execute
// }
// catch(error) {
//     console.log('An error caught'); 
//     console.log('Error message: ' + error);  
// }

// using two times throw

const number = 5;
try {
     
     throw new Error('This is the throw');

}
catch(error)
 {
    console.log('An error caught');
    
    if( number + 8 > 10) {

        
         console.log('Error message: ' + error); // statements to handle exceptions
        console.log('Error resolved');
    }
    else {
        
        throw new Error('The value is low'); // cannot handle the exception rethrow the exception
    }
}