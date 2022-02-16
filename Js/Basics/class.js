"use strict";
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
        this._millage = 500;
    }
    getTotalPrice(tax) {
        const taxAmount = (this.price * tax) / 100;
        const total = this.price + taxAmount;
        return total;
    }
    getActualMillage() {
        const realMillage = this._millage + 1000;
        return realMillage;
    }
}
const toyota = new Car("toyota", 100000);
console.log(toyota);
const totalPrice = toyota.getTotalPrice(1000);
console.log(totalPrice);
const totalMillage = toyota.getActualMillage();
console.log(totalMillage);
