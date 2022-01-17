// Iteration 1: Names and Input
let hacker1 = 'Victoria'
console.log(`The driver's name is ${hacker1}`)
let hacker2 = 'Luciana'
console.log(`The driver's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver  ${hacker1.length} has the longest name, it has characters`);
  } else if ( hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  } else if (hacker1.length === hacker2.length) {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops
//3.1 
let driverName = ''
for (letter of hacker1) {
  driverName += letter.toUpperCase() + " "
}

//3.2
let a = hacker1.localeCompare(hacker2);
console.log(a)

let b = hacker2.localeCompare(hacker1);
console.log(b)

if (a > b) {
  console.log("The driver's name goes first.")
} else if (a < b) {
  console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}
