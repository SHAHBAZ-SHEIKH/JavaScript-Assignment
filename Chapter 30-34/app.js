// _____Question#01______

// var currentDate = new Date()
// console.log(currentDate)


// _____Question#02______

// var currentMonth = new Date()
// var monthName = ["January","febrarury","March","April"]
// console.log(currentMonth.toString())
// console.log(`Current Month is:${monthName[currentMonth.getMonth()]}`)


// _____Question#03______


// var currentDate = new Date()
// var CurrentMont=currentDate.toString()
// console.log(`Today is :${CurrentMont.slice(0,3)}`)


// _____Question#04______

// var currentDate = new Date()
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var CurrentDay=currentDate.getDay()
// var currentDay1=(dayNames[CurrentDay])

// for(var i =0; i<dayNames.length; i++){
//     if((dayNames[i] === currentDay1)){
//         console.log("Today is Fun Day")
//     }
// }

// _____Question#05______

// var date = new Date()
// var currentDate = date.getDate()
// if(currentDate <=15){
//     console.log("First Fifteen Days Of the Month")
// }
// else{
//     console.log("Last Days Of the Month")
// }

// _____Question#06______

// var date = new Date("January. 1, 1970")
// var currentDate = new Date()
// var oldDate = (date.getTime())
// var nowday=  (currentDate.getTime())
// console.log(currentDate.getHours())

// var diff = oldDate /(1000 * 60 * 60 * 24 )
// console.log(`Elapsed millisecod  ${date} is: ${diff}`)

// _____Question#07______

// var dateType = new Date()
// var dateHour = dateType.getHours()
// console.log(dateHour)
// if(dateHour >=1 && dateHour <12){
//     console.log("IT'S AM")
// }
// else if(dateHour >=12 && dateHour<24){
//     console.log("IT'S PM")
// }


// _____Question#08______

// var ramzanDatePast = new Date("June 18,2015")
// var comingRAmzanDate = new Date("Mar 11,2024")

// var differBoth = comingRAmzanDate.getTime() - ramzanDatePast.getTime()
// var days = differBoth / (1000 * 60 * 60 *24)
// var Month = differBoth / (1000 * 60 * 60 *24 * 30)
// var Year = differBoth / (1000 * 60 * 60 *24 * 30 )/12
// console.log(`${days} Days Have Passed Since 1st Ramazan 2015`)
// console.log(`${Month} Month Have Passed Since 1st Ramazan 2015`)
// console.log(`${Math.round(Year)} Years Have Passed Since 1st Ramazan 2015`)

// _____Question#10______

// var date = new Date("Dec 5,2015")
// var date1 = new Date ("Jan,1,2015")
// var dateMilli = date.getTime() - date1.getTime()
// console.log(Math.floor(dateMilli /1000))



// _____Question#13______

// var ageinput = parseInt(prompt("Enter Your Age"))
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - (ageinput);
// console.log(`Your age is: ${ageinput}`)
// console.log(`your BithYear is: ${birthYear}`)


// _____Question#14______

var customerName = prompt("Enter Customer Name")
var BillMonth = prompt("Enter Bill Month")
var numberOfUnit = +prompt("Enter Bill OF unit")
var chargesOFUnit = +prompt("Enter CHarges Of Unit")
var netAmount = numberOfUnit * chargesOFUnit
var lateAmout = 350;
var lateCharges = netAmount + lateAmout
document.write("<h1>K-Electric Bill</h1>")

document.write(`Customer Name:<strong>${customerName}</strong></br>`)
document.write(`Bill Month is:<strong>${BillMonth}</strong></br>`)
document.write(`Number OF unit:<strong>${numberOfUnit}</strong></br>`)
document.write(`Charges OF unit:<strong>${chargesOFUnit}</strong></br>`)
document.write(`Net Amount payable(Within Due Date):<strong> ${netAmount}</strong> </br>`)
document.write(`Late Amount Surcharge:<strong>${lateAmout}</strong></br>`)
document.write(`Gross Amount Payabla (after Due Date):<strong>${lateCharges}</strong></br>`)



