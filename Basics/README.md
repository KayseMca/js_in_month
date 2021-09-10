## Introduction
## Table of Contents
   - [Data types](#data-types)
      - [Difference Primitive data types of Javascript](#difference-primitive-data-types-of-javascripts-are)
      - [Comments](#comments)
      - [Operators](#operators)
      - [Functions](#functions)
      - [Array](#array)
      - [objects](#objects)
      - [Loops](#loops)   
   - [How Javascript works](#how-javascript-works)
      - [Javascript versions](#javascript-versions)
      - [How it works](#how-it-works)
      - [Javascript versions](#javascript-versions)
   - [Tricks and Tips](#tricks-and-tips)
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

### Difference Primitive data types of JavaScripts are:
 * Number
 * String
 * Boolean
 * Undefined
    * a declared variable but doesn't have a value yet
 * Null
    * meaning not exist

### Comments

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

### Operators
`var year = 2021`    
`console.log(year-26)` // output 1995    
`typeof year` // _output_ Number


### Functions
 if we have lot of codes that we should run couple of times we create function with parameters if necessary then called the function when ever is needed.

 ```
 function helloFunction(name){  
    console.log("hello"+name)  
 }  
 ```


### Array  
it's like collection of Variables
```
var names = ['Kayse', 'Jane']
// accessing the elemant by index
console.log(names[0]) // Kayse
```  

### Objects 
like array instead of accessing the elemant by index, you can access by specific name. And also wont have order as Array.  
```
var obj = {   
   'name':'kayse'
}   
console.log(obj['name']) // Kayse
```

### Loops  
Loops offer a quick and easy way to do something repeatedly(MDN). instead of writing couple of times same code, looping through is better.
  
```
for(var i=0; i<10;i++){  
   console.log(i)
}
```




## How Javascript Works?
let's check first javascript versions
### Javascript Versions
   In 1996 changed from LiveScript to JavaScript. In 1997 ESI(ECMAScript 1) became the first JavaScript version, and then The following versions were released, respectively:
   * 2009 => ES5: Fully Supported all browsers
   * 2015 => ES6 or ES2015: No supported the old browsers but supported moderm browsers
   Javascript, works inside browsers. And because of lots engine exists inside browsers like Google's v8 engine we use browsers Javascript runtime enviroment.

### How it works?
first, all the code in javascript is parsed a parser that reads js codes line by line, then the parser produces *Abstract Syntax Tree*: it translates js code into machine code.  
#### Execution Context  
this is where all Javascript code runs. As defualt the Global Execution Context is the code that not inside any function.  
In the code that exist inside of any function when ever called the function this will be new context Execution Contexts and being the active code that running, and this contineous every new called function on top of stack (see the image). 


the Execution Context is like object and it has three properties:
   * Variable Object
   * Scope Chain
   * "This" variable

more resources => [Youtube link](https://www.youtube.com/watch?v=OympYhd4P9w&list=PL1BztTYDF-QNS9VdeIX62d1X5rxkLsejH&ab_channel=procademy)

Calling a new function, as already mentioned, the new Execution Context(function) is put on top of Execution Stack. This happens two phases:
   * Creation Phase
   * Execution Phase 
##### 1. Creation Phase  
   this calles the function before the execution Phase and scans the function scope then compiles(simply prepares the function to get result)

-  ###### Variable Object   
   Here is where goes all the variables, functions  and inner functions declaration information. All the variables are set undefined and in the execution phase it set its real values. And this is also where comes **Hoisting** => that means before declaration the functions and variables are available to use in Javascript

   - ###### example Hoisting code
   ```
   greating();
   function greating(){
      console.log("Hello there")
   }
   ```
   **Note**: but the function Expression it will give an error as long as we storing the function in variable.   

   ```
   greating(); // this will cause an error because it counts "greating" as variable not as function, 
               but calling without pranteses it return undefined because we mentioned in the Creation phrase all the variable it declares undefined as value.

   var greating = function(){
      console.log("Hello there")
   }
   ```  

* ##### Creation of Scope Chain   
   *Every new function creates a scope:the enviroment in which the variables it defines are accessible*.   
      ***Lexical scoping*** is a function that is Lexically within another function, and have access of the scope of the outer function.

      ```
      // summarizing of what we learned already

      var x = "Javascript";
      first(); // this is Hoisting, we calling function before we declare

      function first() {
         var y = "Concepts";
         second();

         function second() { // this is Lexical scope, it is inside of another function
            var z = "Learning";
            console.log(x+y+z); // this Lexically scope can access the outer(first) function and the global one(x)
         }
      }
      ```
* ##### This Keyword  
   "This" Keyword is basically a special variable that is created  for every execution context.
   The regular function call the "this" Keyword points at the global object( in strict mode it is *undefined*). The value of "this" Keyword is only assigned when the function is actually called(in runtime)
   ```
   function greating() {
      console.log(this) // will call the global object(windows)
   }
   // but ...

   var person = {
      name:"John",
      age : 26
      greating: function() {
         console.log(this) // this will call the person object
      }

      // easily, all the methods, the "this" Keyword points to the object that is calling the method(belong the method)
   }
   ```  
   but in the Arrow function it uses the "this" Keyword of its parent scope.  
   ```
   var person = {
      name:"John",
      age : 26
      greating: function() {
         console.log(this) // this will call the person object

         function inner() {
            console.log(this) // will point the global object(window). But in Arrow function it is different

         }
         inner();

         let func = () {
            console.log(this) // this will point the person object
         }

         func()

         
      }

   }
   ```

   To understand more **this Keyword** let explain these steps:  
   * ###### Implicit Binding  
      Here itw will points where it's called or who calles this. and we covered in the above code(inside the person Object).
      In implicit binding, you need to check what's to the left of the dot(.) operator adjacent to a function at invocation time. This determines what this is binding to. If we look back the above code   
      `person.greating()// output person{name:'John',age:26` in here the **this** keywoard will call the person object because of **the greating** function it called from person and belongs to it.

   * ###### Explicit Binding(Call, Bind, Apply functions)

   * ###### New Binding
   * ###### Window Binding 

##### 2. Execution Phase
   this is where runned the function code line by line.  


 ## Tricks and Tips

```
var a = 10  
 var b = "10"  
 if(a==b)

```  
this comparison my not always good or efficiency  this will only good if you know the return of comparisons, so using __===__ maybe better.



