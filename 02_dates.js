//date is like a class which have been premade for us.

function  dateMethords(){
    const currentdate =new Date()
    console.log("The date is :", currentdate.getDate())
    console.log("month is ", currentdate.getMonth()+1)//dates are 0 indexed
    console.log(currentdate.getYear()+1900)//-1900 due to something shit. '

//setting component of the date .
    currentdate.setFullYear(2022)
    console.log("after setFullyear : ", currentdate)

    currentdate.setMonth(5)//Setting month to june 
    console.log("after Setmonth :",currentdate)

//getting time in miliseconds since 1970
    console.log("time in miliseconds : ",currentdate.getTime());

    const newDate = new Date(2023, 8, 15); //
//Creating a new date
    console. log( "New Date:", newDate);
//
}

dateMethords()


//to calculate the amount of time a function took to run.
function calculatSum ( ) {
    let a = 0;
    for (let i = 0; i<10000000000; i++) {
     a = a + i
    }
    return a;
}
  const beforeDate = new Date();
  const beforeTimeInMs = beforeDate.getTime();
    calculatSum();
  const afterDate = new Date();
  const afterTimeInMs = afterDate.getTime();
 console.log(afterTimeInMs - beforeTimeInMs)
 