//_____Ques:01______

// function power(a,b){
//     var power1= Math.pow(2,3)
//     console.log(`power of ${a} & ${b} is :${power1}`)

// }
// (power(2,3))

// _____Ques:02______

// function leapYear(){
//     var year = prompt("Enter a year")
//     if((year %4===0) && (year % 100 !=0 || year % 400 ===0)){
//         console.log("Its is a leap year")
//     }
//     else{
//         console.log("Its is not leap Year")
//     }
// }
// leapYear()


// _____Ques:03______

// function areaTriangle(a,b,c){
    
//     var s = (a + b + c) /2
//     var area = (s*(s-a)*(s-b)*(s-c))
//     console.log(`The area of Triangle is :${area}`)
// }
// var a = Number(prompt("Enter the number 1"))
// var b = Number(prompt("Enter the number 2"))
// var c = Number(prompt("Enter the number 3"))
// areaTriangle(a,b,c)

// Second Method////

// function areaTrianle(a,b,c){
//     return (a + b + c)/2
// }

// function returnTriangle(a,b,c){
//     var s = areaTrianle(a,b,c)
//     var area = (s*(s-a)*(s-b)*(s-c))
//     console.log(`The area of Triangle is :${area}`)
// }
// returnTriangle(2,2,2)


// _____Ques:04______

// function averageCalc(sub1,sub2,sub3){
    
//     return ((sub1 + sub2 + sub3) / 3)
    
// }

// function percentageCalc(totalmark,maxmark){
//     return (totalmark / maxmark) * 100
// }
// function mainFunction(sub1,sub2,sub3){

//     var average = averageCalc(sub1,sub2,sub3)
//     var totalmark = sub1 + sub2 + sub3
//     var percentage = percentageCalc(totalmark,300)

//     console.log(`The percentge of ${percentage} %`)
//     console.log(`The average number of ${average}`)
// }

// var sub1 = Number(prompt("Enter Subject 1 marks"))
// var sub2 = Number(prompt("Enter Subject 2 marks"))
// var sub3 = Number(prompt("Enter Subject 2 marks"))

//mainFunction(sub1,sub2,sub3)


// var date1 = new Date("2022-05-15T03:00:00Z");
// var date2 = new Date("2022-05-15T04:00:00Z");

// document.write(date1.toLocaleString() )

// function greet(name,b){
//     return name +b/2
// }
// console.log(greet(2,1))

//var num= 1.5
//console.log(Math.round(num))

// var x=10;
// function print(){
//     console.log(x)
//     var x=20
// }
// print()

var num = 10.5
num.toFixed(2)
console.log(num)

// console.log(parseInt("101"))


// function mul(a,b){
//     return a* Number(b)
// }
// console.log(mul("2","3"))

function gret(name){
    console.log("Hello ," +name)
}
gret("shah")

var helo = 'hello world'
console.log(helo.replace("o","x"))


//console.log(parseFloat("10.4"))

//var str = "hello world!"
// document.write(str.slice(6))

// var fruit = "mango"

// switch(fruit){
//     case "apple":
//         document.write("apple is my bext dis")
//         break;
//         case "banan":
//             document.write("apple is my bext dis")
//             break;

//     default:
//         document.write("i don")
    
// }

//var date = new Date()
//document.write(date.getMonth())
