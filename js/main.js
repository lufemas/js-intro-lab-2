/* 
JAVASCRIPT VARIABLES
Complete the required JavaScript code underneath each "EXERCISE". In the end, you will have 5 statements logged to the console using: console.log()
*/

//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the screen like so: "You will be a X in Y, making $N for Z."

let job = `Web Developer`;
let geoLocation = `Toronto`;
let salary = 140000;
let company = `JR Tech`;


console.log(`You will be a ${job} in ${geoLocation}, making $${salary}/year for ${company}.`);

let itemOne = document.querySelector(`#item-one`);
itemOne.textContent = `You will be a ${job} in ${geoLocation}, making $${salary}/year for ${company}.`;


console.log(`--------------------------------`);
console.log(`--------------------------------`);

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the screen like so: "They are NN years old.", substituting the values.

let birthYear = 1989;
let currentYear = 2020;
let currentAge = currentYear - birthYear;


console.log(`They are ${currentAge} years old.`)

let itemTwo = document.querySelector(`#item-two`);
itemTwo.textContent = `They are ${currentAge} years old.`;

console.log(`--------------------------------`);
console.log(`--------------------------------`);


//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

let maxAge = 85;
let amountPerDay = 1.2;
let totalDays = (85-currentAge)*365;
let amountForLife = amountPerDay * totalDays;

console.log(`You will need ${amountForLife}L of Coke to last you until the ripe old age of ${maxAge}`)

let itemThree = document.querySelector(`#item-three`);
itemThree.textContent = `You will need ${amountForLife}L of Coke to last you until the ripe old age of ${maxAge}`;

console.log(`--------------------------------`);
console.log(`--------------------------------`);

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".

let metric = `cm`;
let radius = 20;
let circumference = 2 * Math.PI * radius;
let area = Math.PI * radius * radius;

console.log(`The radius is ${radius}${metric}`);
console.log(`The circumference is ${circumference}${metric}`);
console.log(`The area is ${area}${metric}^2`);

let itemFour = document.querySelector(`#item-four`);
itemFour.textContent = `The radius is ${radius}${metric}, the circumference is ${circumference}${metric}. the area is ${area}${metric}^2`;


console.log(`--------------------------------`);
console.log(`--------------------------------`);


//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

let tempC = 25;
let tempF = (tempC * (9/5)) + 32;
console.log(`${tempC}°C id ${tempF}°F`);

tempF = 85;
tempC = (tempF - 32) * (5/9);
console.log(`${tempF}°F id ${tempC}°C`);


let itemFive = document.querySelector(`#item-five`);
itemFive.textContent = `${tempC}°C id ${tempF}°F, ${tempF}°F id ${tempC}°C`;

 
