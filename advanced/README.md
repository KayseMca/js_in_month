## Objects and Functions
In Javascript everything is Object


### prototypes
are a property of every  function you create, and points an Object.  
```
// constuctor function
    function Animal(name, age) {
        let animal = {}
        animal.name = name
        animal.age = age
        return animal
    }

    animal.prototype.eat = function(){
        console.log(`${this.name} old ${this.age} years` )
    }
```
The above code, every instance of **animal** we create it will have **eat** method, because of prototypes.
 
 * #### new key of instance
 how the **new** key works?.  
 we talked the prototypes and how every instance could have an method. but how this possible?
 ```
 const animalMethod = {
     eat () {
         console.log(`${this.name} eating`)
     }

     play() {
         console.log(`${this.name} playing`)
     }
 }
 ```

 The above object with methods we wanna to make the below constuctor function as its method in the every instance of it.

```
 // constuctor function
    function Animal(name, age) {
        let animal = Object.create(animalMethod)
        animal.name = name
        animal.age = age
        return animal
    }

let leo = new Animal('leo', 78)
```
**animalMethod** has methods and we made the prototypes(methods) of the Animal using **Object.create(animalMetod)**, in here, instead of using *Object.create* and *return*, the **new** key will do these automatically.

* #### Prototype Inheritance