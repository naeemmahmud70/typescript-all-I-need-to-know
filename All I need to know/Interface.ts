//Interface in Object

interface Student3 {
  name: string;
  age: number;
  isMarried?: boolean;
}

const students: Student3 = {
  name: "Gomez",
  age: 27,
  isMarried: false,
};

const students4: Student3 = {
  name: "Gomez",
  age: 27,
};

// Extend interface
interface Developer extends Student3 {
  junior?: boolean;
  salary: number;
  skills: string[];
}

const employees: Developer = {
  name: "Ujjal",
  age: 26,
  isMarried: false,
  salary: 2500,
  skills: ["JavaScript", "React", "NodeJS", "ExpressJS", "MongoDB"],
};

const employees2: Developer = {
  name: "John",
  age: 34,
  isMarried: true,
  junior: false,
  salary: 2500,
  skills: ["JavaScript", "React", "NodeJS", "ExpressJS", "MongoDB"],
};

//Special case

interface RectangleOptions {
  width: number;
  length: number;
}

const drawRectangle = (Option: RectangleOptions) => {
  let width = Option.width;
  let length = Option.length;
};

let threeDOption = {
  width: 30,
  length: 20,
  height: 10,
};
drawRectangle(threeDOption);

// Interface in Class

interface IsDeveloper {
  name: string;
  age: number;
  play(): void;
}

class Developers implements IsDeveloper {
  constructor(public name: string, readonly age: number) {}
  play() {
    console.log("");
  }
}
