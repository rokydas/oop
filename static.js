class Animal {
    static category = 'Dog';
    location = 'Chittagong';
    constructor(name, speed) {
        this.name = name;
        this.speed = speed
    }
    static compare(animal1, animal2) {
        if(animal1.speed > animal2.speed) {
            return `${animal1.name} is faster than ${animal2.name}`;
        }
        else {
            return `${animal2.name} is faster than ${animal1.name}`;
        }
    }
}

const myDog = new Animal('Rocky', 100);
const myRat = new Animal('Micky', 20);

console.log(myDog.category); // Undefined. cause static
console.log(Animal.category);
console.log(Animal.location); // undefined. cause not static
console.log(myDog.location); 

const compare = Animal.compare(myDog, myRat);
console.log(compare);
