class SmartDevice {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    charging(){
        console.log('I am charging');
    }
}

class Phone extends SmartDevice{
    constructor (name, price, camera) {
        super(name, price);
        this.camera = camera;
    }
    sendSms(){
        console.log('I am sending SMS');
    }
}

class Watch extends SmartDevice {
    constructor (name, price, brand) {
        super(name, price);
        this.brand = brand;
    }
}

class Tablet extends SmartDevice {
    constructor (name, price, isWifiEnabled) { 
        super(name, price);
        this.isWifiEnabled = isWifiEnabled;
    }
}

const myPhone1 = new Phone('Samsung', 10, '16MP');
console.log(myPhone1);
myPhone1.charging();