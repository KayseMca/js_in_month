// // constuctor function
// function Animal(name, age) {
//     let animal = {}
//     animal.name = name
//     animal.age = age
//     return animal
// }

// Animal.prototype.eat = function() {
//     console.log(`${this.name} old ${this.age} years`)
// }

const animalMethod = {
        eat() {
            console.log(`${this.name} eating`)
        },

        play() {
            console.log(`${this.name} playing`)
        }
    }
    // console.log(animalMethod.eat())

//The above object with methods we wanna to make the below constuctor function as its method in the every instance of it.

// constuctor function
function Animal2(name, age) {
    let animal = Object.create(animalMethod)
    animal.name = name
    animal.age = age
    return animal
}

let leo = new Animal2('leo', 78);
console.log(leo.eat())