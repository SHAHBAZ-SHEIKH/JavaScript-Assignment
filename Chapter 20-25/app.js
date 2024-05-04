// _____Q:1______

// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// var fullName = firstName + lastName
// document.write(fullName)


// _____Q:2______

// var mobilePhoneName = prompt("Enter your Favorite mobile phone");
// document.write(`My favorite mobile phone is : ${mobilePhoneName} </br>`)
// document.write(`The length of String is : ${mobilePhoneName.length}`)


// _____Q:3______

// var countryName = "pakistan";
// document.write(`String is :${countryName} </br>`)
// document.write(`lenght of n is: ${countryName.indexOf("n")}`)

// var countryName = "Pakistan"
// for (var i = 0; i < countryName.length; i++) {
//     if (countryName[i] === "P") {
//         console.log(`String is :${countryName}`)
//         console.log(`Length of n is :${i}`)
//     }
    
// }


// _____Q:4______

// var user = "Hello World"
// for (var i = 0; i < user.length; i++) {
//     if (user[i] === "d") {
//         console.log(`String is :${user}`)
//         console.log(`Length of d is :${i}`)
//     }
    
// }


// _____Q:5______

// var user = "Hello World"
// for (var i = 0; i < user.length; i++) {
//     if (user[i] === "e") {
//         console.log(`String is :${user}`)
//         console.log(`Character of index ${i} is :${user[i]}`)
//     }
    
// }

// _____Q:7______

// var cityName = "Hyderabad";
// var city;
// for(var i =0; i<cityName.length; i++){
//     if(cityName.slice(i,i+5) ==="Hyder"){
//         city = cityName.slice(0,i) + "Islam" + cityName.slice(i + 5)
//         console.log(`Before Replacemnet  City name is : ${cityName}`)
//         console.log(`After Replacemnet  City name is : ${city}`)
//     }
// }

// _____Q:8______


// var cityName = "Ali and Sami are best friends. They play cricket and football together";
// var cityNameUpdate = cityName.replaceAll("and","&")
// console.log(cityNameUpdate)

// _____Q:9______

// var str = "472";
// console.log(`Value is ${str}`)
// console.log(`Type :${typeof str}`)

// var number1 = Number(str)
// console.log(`Value is ${number1}`)
// console.log(`Type :${typeof number1}`)

// _____Q:10______

// var user = prompt("Enter a value");
// var userUpdate = user.toUpperCase()
// console.log(`User Input is : ${user}`)
// console.log(`Upper Case is : ${userUpdate}`)


//_____Q:11______

// var user = prompt("Enter a value");
// var userUpdate = user.toLowerCase
// console.log(`User Input is : ${user}`)
// console.log(`Upper Case is : ${userUpdate}`)



//_____Q:12______

// var num = "35.36";
// console.log(`Number ${num}`)
// console.log(`Result is ${num.replaceAll(".","")}`)

//_____Q:13______

//var userName = prompt("Enter User Name ");
// var flag = true
// for(var i =0; i<userName.length; i++){
//     if((userName[i]  ==="!") || (userName[i]  ==="@") || (userName[i]  === ",") || (userName[i]  ==="#")){
//         flag = false
//         console.log("Plesae enter a valid Paswwoerd")
//     }
// }
// if(flag ===true){
//     console.log("Congratulation")
// }

// var userName = prompt("Enter User Name ");
// var char = userName.charCodeAt()

// for(var i =0; i<char.length; i++){
//     if((char[i]  ===33) || (char[i]  ===44) || (char[i]  === 46) || (char[i]  ===64)){
//         console.log("Plesae enter a valid Paswwoerd")
//     }

// }


//_____Q:14______

// var bakeryItem = ["cake","Apple pie","cookie","chips","patties"]
// var userInputItem = prompt("Enter bakery Item");
// var flag = false
// for(var i=0; i<bakeryItem.length; i++){
//     if(bakeryItem[i]===userInputItem){
//         flag = true
//         console.log(`${bakeryItem[i]} is Available at index ${i} in Our Bakery`)

//     }
// }
// if(flag ===false){
//     console.log("not Found")
// }



//_____Q:15______

// var passwordUser = prompt("Please enter a password");
// var char = passwordUser.charCodeAt(0)
// if(char.length>6){
//     if((char >=97 && char<=122) && (char >=65 && char<=90) ){
        
//     }
//     console.log("Fine")
    
// }

//_____Q:16______

// var str = "University of karachi";
// var user = str.split()
// console.log(user)


//_____Q:17______

// var userInput = prompt("Enter user name")
// var user = userInput[userInput.length -1]
// console.log(`User input ${userInput}`)
// console.log(`Last Character of User Input: ${user}`)

// var user = prompt("Enter value")
// var keyword = '';
// var letter;
// for(var i = user.length -1; i>=0; i--){
//     letter = user[i]
//     keyword +=letter
    
// }
// console.log(keyword)



