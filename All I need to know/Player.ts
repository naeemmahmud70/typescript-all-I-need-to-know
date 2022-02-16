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

export default Player;
