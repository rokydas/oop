class Hero {
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }
    getPower() {
        if(this.power) {
            return this.power;
        }
        else {
            return 'I have no power';
        }
    }
}

const batman = new Hero('batman', 'khamsi');
const catman = new Hero('batman');
console.log(batman.getPower());
console.log(catman.getPower());