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
export default Player;
