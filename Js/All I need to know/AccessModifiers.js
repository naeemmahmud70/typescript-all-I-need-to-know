"use strict";
class Players {
    constructor(a, b, c) {
        this.name = a;
        this.age = b;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is played`);
    }
}
const player = new Player("Mash", 40, "Bangladesh");
player.name = "Sakib";
player.age = 30;
console.log(player.country);
player.country = "Malaysia";
