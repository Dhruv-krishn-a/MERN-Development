// Dates 
let myDate =new Date()
console.log(myDate)
//converting to string due to unreadable format 
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate) //Date is an object

//Creating my own date, Months start from 0.
let MyCreatedDate1 =new Date(2023, 0 ,23)
let MyCreatedDate2 = new Date("2023-01-14")
let MyCreatedDate3 = new Date("01-14-2023")
console.log(MyCreatedDate1.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)//In miliseconds
console.log(myTimeStamp)
console.group(MyCreatedDate1.getTime())

//to get values from DATE
let newDate = new Date()
console.log(newDate)


console.log(newDate.getMonth()+1)// we have more Methord like this 
// More advance Customizations
newDate.toLocaleString('default',{
    weekday: "long"
})




