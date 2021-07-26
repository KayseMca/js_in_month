console.log("Hello World!")

console.log("Started today learning Javascript!")

//Variables

// Variables is like container that we can store a valuable to use couple of times

var javascript = "Javascript"
var myName = "Kayse"
var age = 15

console.log(javascript + myName + age) // concating


//Boolean
var exist = true;
console.log(exist)

// windows.alert("you just called me to pop up the head of page")
// getting from user data
// var university = prompt("put your university here?")

// operator precedence
// first the groups in () will calculated then other operators
console.log(4+8/2)
console.log((4+8)/2) // diferrence outputs

//code challenge
// calculating BMI => mass/(height*height)
var mark_mass = 78
var mark_height = 1.65
var mark_result = mark_mass/(mark_height*mark_height)

var john_mass = 89
var john_height = 1.90
var john_result = john_mass/(john_height*john_height)
var isMarkHeigher = mark_result>john_result

console.log("Is mark's BMI higher than john's: "+isMarkHeigher)


// If Else 

var name = "kayse"
var isStudent = false

if(isStudent){
    console.log(`${name} is student`)
}else{
    console.log(`${name} is not a student`)
}

// short if logic

var message = isStudent ? "Yes he is student": "Nope he's not"
console.log(message)

// Switch case

var job = "teacher"

switch(job){
    case "teacher":
        console.log("he teaches student codes")
        break
    case "student":
        console.log("he is still student")
        break
    default:
        console.log("he doesnt work")
}

// * Truthy and Falsy

//* some falsy values are:undefined, null, 0, '', NaN
//* truthy are the not falsy values

// * 25 == '25' true => type coercion, javascript convert string value to number

//Number(value) explicit converting
// 1 == null  implicit converting

var names = ['Kayse','Jane']
console.log(names[0])
console.log(names.length)

var tips = [0.20, 0.15, 0.10]
var bill_tips = []
var billTips = function(bill){
    switch(bill){
        case bill<50:
            bill_tips.push(bill*0.10)
            return bill_tips
        
        case 50<bill<200:
            bill_tips.push(bill*0.15)
            return bill_tips
        
        case bill>200:
            bill_tips.push(bill*0.20)
            return bill_tips
    }
}

console.log(billTips(25))


// ? How Javascript works
// * check the README.md 