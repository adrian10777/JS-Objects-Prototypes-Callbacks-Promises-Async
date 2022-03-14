//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

let parseObject = (obj) => {
    for (k in person3){
        if (typeof person3[k] == 'string'){ // tacos and burgers - strings
            console.log(person3[k])
        } else {
            if (typeof person3[k][0] == 'string'){ // handles pizza and ice cream
                for (let i=0; i<person3.length; i++) {
                    console.log(person3[k][i]);
                }
            } else { // handles the shakes - array containing an obj
                for (w in person3[k][0]){
                    console.log(person3[k][0][w]);
                }
            }
        }
    }
}
personObject(person3); 


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


class Person {
    constructor(name, age) {
    this.name = name,
    this.age = age
}

printInfo = () => {
    console.log(`This is ${this.name}, he is ${this.age}`)
}

older = () => {
    console.log(` Happy Birthday, ${this.name}, you are now ${this.age+1} + 1`);
    this.age++;
}

addAge = old => {
    console.log(`Wow time went fast. ${this.name}, you were ${this.age}. You are now ${this.age+old}.`)
    this.age+=old;
}
}

let Kevin = new Person('Kevin', 76);
let Derek = new Person('Derek', 12);

Kevin.printInfo();
Derick.printInfo();

Kevin.older();
Kevin.older();

Derek.addAge(20);
Derek.printInfo();

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

// create a func that returns a promise that either resolves or rejects 

let strLong = str => {
    return new Promise( (resolve, reject) => {
        if (str.length>10) {
            return resolve(str);
        }
        else{
            return reject(str);
        }
    })
}

strLong('Fennec Fox')
.then((val) => {
    console.log(`This string ${val} is longer than 10 characters.`)
})
.catch((val) => {
    console.log(`This string ${val} is less than 10 characterslong.`)
});

