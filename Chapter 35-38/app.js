// _____Ques:01_______

// var date = Date()
// document.write(date)


// _____Ques:02_______

// function userName(firstName,lastName){
//     fullName = firstName +" "+ lastName;
//     return fullName

// }
// userName("Shahbaz","Ahmed")
// console.log(fullName)

// _____Ques:03_______

// var num1 = +prompt("Enter the number")
// var num2 = +prompt("Enter the number")
// function sumNumber(num1,num2){
//     sum = num1 + num2;
//     return sum;

// }
// sumNumber(num1,num2)
// console.log(`The sum of ${num1} & ${num2} is:${sum}`)


// _____Ques:04_______

// var num1 = +prompt("Enter the number 1")
// var num2 = +prompt("Enter the number 2")
// var operator = prompt("Enter the operator:+,-,*,/")
// var cal;
// function calculator(num1,num2,operator){
//     if(operator === "+"){
//         cal = num1 + num2;
//     }
//     else if(operator === "-"){
//         cal = num1- num2
//     }
//     else if(operator === "*"){
//         cal = num1 * num2
//     }
//     else if(operator === "/"){
//         cal = num1 / num2
//     }
//     else{
//         document.write("please enter a correct operator")
//     }
//     return cal
// }
// calculator(num1,num2,operator)
// document.write(cal)


// _____Ques:05_______

// var a = Number(prompt("Enter any number"))
// function squares(a){
//     squ = a*a;
//     return  squ
// }
// squares(a)
// console.log(squ)

// _____Ques:06_______

// var a = Number(prompt("Enter any number"))
// var fac;
// function factorial(a){
//     if(a ===0 || a===1){
//         return 1
//     }else{
//         fac = a * factorial(a-1);
//         return  fac

//     }

// }
// factorial(a)
// console.log(fac)

// _____Ques:08_______

// var base = Number(prompt("Enter any Number"))
// var perpendicular = Number(prompt("Enter any Number"))
// var sq;

// function hypotenuse(base,perpendicular){
//     function square(a){
//         return a * a
//     }
//     hypo1 = (base *base) + (perpendicular * perpendicular)
//     hypo2= Math.round(Math.sqrt(hypo1));
//     return hypo2


// }
// hypotenuse(base,perpendicular)

// console.log(`Hypothenuse is:${hypo2}`)



// _____Ques:09_______

// var height = Number(prompt("Enter any value"))
// var width;
// var a;
// function areaOfRectangle(height,width){
//     width = 5;
//     a = height * width;
//     return a;

// }
// areaOfRectangle(height,width)
// console.log(a)

// _____Ques:10_______

// var str = prompt("Enter a value")
// var len = str.length
// var flag = true
// for(var i =0; i<len/2; i++){
    
//     if(str[i] !== str[len -1 -i] ){
//         flag = false
//         console.log("Its is not plindrome")
//     }
// }
// if(flag === true){
//     console.log("Its is Plindrome")
// }


// _____Ques:11_______

// var str = prompt("Enter any Character:")
// var newarray1;
// function uppercase(str) {
//     var array1 = str.split(' ');
//     newarray1 = [];
//     for (var i = 0; i < array1.length; i++) {
        
//         newarray1.push(array1[i].charAt(0).toUpperCase() + array1[i].slice(1));
//     }
//     return newarray1
// }
// (uppercase(str));
// console.log(newarray1.join(" "))


// _____Ques:12_______

// function longestWord(str){
//     var strword = str.split(" ");
//     var find = "";
//     for(var i =0; i < strword.length; i++){
//         if(strword[i].length > find.length){
//             find = strword[i];
//         }
//     }
//     return find;

// }
//console.log(longestWord("Web development program"))

// var arr = ["blue","orange","blue","black"]
// document.write(`Before updating array: ${arr}</br>`)
// arr.splice(2,1,"Yellow")

// document.write(`After updating array: ${arr}`)





// _____Ques:14_______

// var radius = +prompt("Enetr the radius")
// function calcArea(radius){
//     area = 3.142 * (radius * radius)
//     return area

// }

// function calcCircumference(radius){
    
//     circum = 2 * 3.142 * radius
//     return circum

// }
// calcCircumference(radius)
// calcArea(radius)
// console.log(`The area of Circle is:${area}`)
// console.log(`The circumference of Circle is :${circum}`)

// _____Ques:13_______
// var count = 0
// function letterCount(a,b){
    
//     for(var i=0; i<a.length; i++){
//         if(a[i] === b){
//             count++
//         }
//     }
//     return count
    

// }
// var a = prompt("Enter any string")
// var b = prompt("Enter any single Word")
// var count = letterCount(a, b);
// console.log("Number of occurrences of '" + a + "':", count);
