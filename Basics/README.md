
## Data types
[Codes Here](my_training_code.js) 💛    
Javascript has dynamic typing. Data types are automatically assigned to variables.
These two variable have different data type but we dont specified their data types.

`
var name = "Kayse"  
`  
`
var number = 15
`

**Difference Primitive data types of JavaScripts are:**
 * Number
 * String
 * Boolean
 * Undefined
    * a declared variable but doesn't have a value yet
 * Null
    * meaning not exist

**Comments**

In Javascript it has two types of making comment in the code

single-line comment   
`\\this's single line comment` 

and multiple line comment   
` 
/* 
this's multple comment line
`  
`
another comment line 
*/
`

**Operators**  
`var year = 2021`    
`console.log(year-26)` // output 1995    
`typeof year` // _output_ Number


**Functions**
 if we have lot of codes that we should run couple of times we create function with parameters if necessary then called the function when ever is needed.

 `
 function helloFunction(name){  
    console.log("hello"+name)  
 }  
 `


**Array**  
it's like collection of Variables
`var names = ['Kayse', 'Jane']`

**Objects**  
like array instead of accessing the elemant by index, you can access by specific name. And also wont have order as Array.  
`var obj = {  
   'name':'kayse'
}`

**Loops**  
Loops offer a quick and easy way to do something repeatedly(MDN). instead of writing couple of times same code, looping through is better.
  
`
for(var i=0; i<10;i++){  
   console.log(i)
}`

## Javascript Versions
In 1996 changed from LiveScript to JavaScript. In 1997 ESI(ECMAScript 1) became the first JavaScript version, and then The following versions were released, respectively:
* 2009 => ES5: Fully Supported all browsers
* 2015 => ES6 or ES2015: No supported the old browsers but supported moderm browsers

more notes=> this link

## How Javascript Works?
 Javascript, works inside browsers. And because of lots engine exists inside browsers like Google's v8 engine we use browsers Javascript runtime enviroment.

 **Sources**  
   English
 * https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf  
Turkish
 * https://oguzkilic.medium.com/taray%C4%B1c%C4%B1lar-javascripti-nas%C4%B1l-yorumlar-fbdfc472f8e3  
 * https://devnot.com/2020/javascript-nasil-calisir/


 ## Tricks and Tips

`var a = 10  
 var b = "10"  
 if(a==b)
`  
this comparison my not always good or efficiency  this will only good if you know the return of comparisons, so using __===__ maybe better.



