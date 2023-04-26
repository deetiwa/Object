// object constructor

function person (name, age, education, city)
{
    this.firstname = name;
    this.age = age;
    this.education =education;
    this.city = city;
}

let person1 = ("Rohit", 25 , "MBA", "Indore");
let person2 = ("Aman", 28, "MCA", "Dewas");

console.log(person1);
console.log(person2);

console.log(person[person1]);