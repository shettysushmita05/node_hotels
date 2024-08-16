const person={
    name:"John",
    age:23,
    isStudent:true,
    hobbies:["reading","swimming"]
};
console.log(person.hobbies);

const ages=[23,34,56,12,32];
const result =ages.filter(chechAge);

function chechAge(ages){
    return ages<18;
}
console.log(result)

var prompt =require('prompt-sync')();
const age=prompt("please enter the age");
if (age<18){
    console.log("you are a child");
}else{
    console.log("you are a adult")
}