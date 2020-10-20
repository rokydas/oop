class Animal {
    constructor() {

    }
    talk() {
        // console.log('Make some noise');
        throw new Error("You must implement and use specific animal talk method");
    }
}

class Cat extends Animal {
    catTalk() {
        console.log('Meauuuu');
    }
}

class Dog extends Animal {
    dogTalk() {
        console.log('Bark Bark');
    }
}

const myCat = new Cat();
myCat.catTalk();
const myDog = new Dog();
myDog.dogTalk();