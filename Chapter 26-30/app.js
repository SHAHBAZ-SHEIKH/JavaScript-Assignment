// ____Question #01_____

// var num1 = Number(prompt("Enter a Numbber"));
// console.log(`Numer is ${num1}`)
// var num2 = Math.round(num1)
// console.log(`round of value ${num2}`)
// num3 = Math.floor(num1)
// console.log(`Floor of value ${num3}`)
// num4 = Math.ceil(num1)
// console.log(`Ceil of value ${num4}`)

// ____Question #02_____

// var num1 = Number(prompt("Enter a Numbber"));
// console.log(`Numer is ${num1}`)
// var num2 = Math.round(num1)
// console.log(`round of value ${num2}`)
// num3 = Math.floor(num1)
// console.log(`Floor of value ${num3}`)
// num4 = Math.ceil(num1)
// console.log(`Ceil of value ${num4}`)


// ____Question #04_____

// var randomNumber = Math.floor(Math.random() *10)
// console.log(`Random dice value is ${randomNumber}`)
// var randomNumber1 = Math.floor(Math.random() *10)
// console.log(`Random dice value is ${randomNumber1}`)




// ____Question #05_____

// var randomNumber = Math.floor(Math.random() *10)
// if(randomNumber ===2){
//     console.log(`${randomNumber} random Coin Value is: Head`)
// }
// else if(randomNumber===1){
//     console.log(`${randomNumber} random Coin Value is: Tail`)
// }
// else{
//     console.log("No Head & Tail")
// }

// ____Question #06_____

// var randomNumber = Math.floor(Math.random() *100)
// console.log(`random number between 1 to 100 is :${randomNumber}`)



// ____Question #08_____

// var randomNumber = Math.floor(Math.random() *4)
// var user = +prompt("Enter a number 1 to 10")
// if(randomNumber ===user){
//     console.log(`Congratulation`)
// }

// else{
//     console.log("Try Again")
// }



/// Generate a Random Password

var randomValues = "ABBBDDD$##&*BBBKUHGTGSFREKISaaheh!";
var Password = '';
for(var i = 0; i <  15; i++){
    var randomNumber = Math.floor(Math.random() * randomValues.length);
    Password = Password + randomValues[randomNumber]
    

}
console.log(Password)