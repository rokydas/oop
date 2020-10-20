class PenDrive {
    constructor(capacity, color, price) {
        this.capacity = capacity;
        this.color = color;
        this.price = price;
    }
}

const ignite = new PenDrive('36GB', 'White', 1300);
console.log(ignite);
const dell = new PenDrive('32GB', 'Black');
console.log(dell);

// Old version of declaring class using function
function StickyNote(color, price) {
    this.color = color;
    this.price = price;
}

const yellow = new StickyNote('Yellow', 50);
console.log(yellow);