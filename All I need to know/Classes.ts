class Player {
  name: string;
  age: number;
  country: string;

  constructor(a: string, b: number, c: string) {
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
const players: Player[] = [];
players.push(sakib);
