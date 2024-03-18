//this will act like a blueprint and we can now make multipe objects like in game


// const Animal ={
//     name : "doggy" ,
//     legcount : 4,
//     speaks: "unknown",
// }
// console.log(`Animal ${Animal.name} ${Animal.legcount} ${Animal.speaks}` )

// const animal1 ={
//     name : "cat" ,
//     legcount : 4,
//     speaks: "meow",
// }
// console.log(`Animal1 ${animal1.name} ${animal1.legcount} ${animal1.speaks}` )

//instead of creating this , use classes and objext

//classes -->blueprint 
//the bluelprint have two things ,
//1-->attributes.
//2-->functions.
class animal{
    constructor(name,legcount,speaks){
        this.name=name;
        this.legcount = legcount;
        this.speaks=speaks;
    }
    //There might be multiple animals and they might speak.
    //This speak fn can be called object of a class but not directly on the class
    speak(){
        console.log(`Hi there , I am ${this.name} speaking and I have ${this.legs} Legs,I speak ${this.speaks}`)
     
    }
    //this calls class directly
    static scream(){
        console.log("animal")
    }
}


//There might be multiple animals and they might speak.


//instead of 
// let dog ={
//     name:dog,
//     legcount:4,
//     speaks:bowbow,
// }

//Use this to declare a new object

let dog1=new animal("doggy", 5 , "bhow bhow")//create objects 
let cat1=new animal("car", 4 , "aaaaggghhhh")
cat1.speak()
animal.scream()

// Object Methods Explanation
function objectMethods(obj) {
    console. log( "Original Object:", obj);

    let keys = Object.keys(obj)
    console.log( "After Object.keys(): ", keys)

     let values = Object.values(obj)
     console. log( "After Object.values():", values)

    let entries = Object.entries(obj)
    console. log( "After Object.entries():", entries)

    let hasProp =Object.hasOwnProperty("Property")
    console. log( "After has0wnProperty():", hasProp)

    let newObj = Object.assign({}, obj, { newProperty: "newValue"
   });
     console. log( "After Object.assign():", newObj);
}
const obj ={
  Name: "Dhruv",
  Age: 23,
  city: "agra",
  state: "UP",
  college: "HCST ,Mathura",
  course: "B.Tech",
  stream: "CSE"
};

objectMethods(obj)
