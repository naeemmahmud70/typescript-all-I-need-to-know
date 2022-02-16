class Car {
  model: string;
  price: number;
  private _millage: number;
  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
    this._millage = 500;
  }
  getTotalPrice(tax: number): number {
    const taxAmount = (this.price * tax) / 100;
    const total = this.price + taxAmount;
    return total;
  }
  getActualMillage(): number {
    const realMillage = this._millage + 1000;
    return realMillage;
  }
}

const toyota = new Car("toyota", 100000);
console.log(toyota);
const totalPrice: number = toyota.getTotalPrice(1000);
console.log(totalPrice);
const totalMillage = toyota.getActualMillage();
console.log(totalMillage);
