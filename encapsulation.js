class Tiger {
    #speed = 100;
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(`I am ${this.name}. I am running at ${this.#speed} kmph`);
    }
}

const royalBengal = new Tiger('Royal Bengal');
// console.log(royalBengal.#speed); error => private
// royalBengal.#speed = 400; error => private
royalBengal.name = 'Royal Bengal Tiger';
console.log(royalBengal);
royalBengal.run();