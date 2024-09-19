class Pet {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    eat() {
        console.log('Животное ест')
        return this
    }

    makeSound() {
        console.log('Животное издает звук')
        return this
    }
}

class Dog extends Pet {
    makeSound() {
        console.log('Собака лает')
        return this
    }

    sleep() {
        console.log('Собака спит')
        return this
    }
}

class Cat extends Pet {
    makeSound() {
        console.log('Кошка мяукает')
        return this
    }

    sleep() {
        console.log('Кошка спит')
        return this
    }
}

let dog = new Dog('111', 5)
let cat = new Cat('222', 2)
dog.eat().sleep().makeSound()
cat.eat().sleep().makeSound()