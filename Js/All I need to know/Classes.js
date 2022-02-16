"use strict";
class Player {
    constructor(a, b, c) {
        this.name = a;
        this.age = b;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is played`);
    }
}
const sakib = new Player("Sakib", 40, "Bangladesh");
// Array assign from object
const players = [];
players.push(sakib);
