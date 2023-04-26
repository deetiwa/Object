let person = {
    name : "rohit",
    age : 25,
    education : "MBA",
}
person.complex = "fair";

console.log(person.name);

console.log(person);

delete person.education;

console.log(person);

for (let key in person)
{
    console.log(key);
    console.log(person[key]);
    
}


