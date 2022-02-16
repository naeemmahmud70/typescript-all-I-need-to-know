// Inline object type decalre

const student: { name: string; age: number; isMarried: boolean } = {
  name: "Justin",
  age: 25,
  isMarried: true,
};

// Object type declare
type Student2 = {
  name: string;
  age: number;
  isMarried: boolean;
};

const student2: Student2 = {
  name: "Daniel",
  age: 27,
  isMarried: false,
};

// Object interface declare
interface Student3 {
  name: string;
  age: number;
  isMarried?: boolean;
}

const student3: Student3 = {
  name: "Gomez",
  age: 27,
  isMarried: false,
};

const student4: Student3 = {
  name: "Gomez",
  age: 27,
};

// Extend interface
interface Developer extends Student3 {
  junior?: boolean;
  salary: number;
  skills: string[];
}

const employee: Developer = {
  name: "Ujjal",
  age: 26,
  isMarried: false,
  salary: 2500,
  skills: ["JavaScript", "React", "NodeJS", "ExpressJS", "MongoDB"],
};

const employee2: Developer = {
  name: "John",
  age: 34,
  isMarried: true,
  junior: false,
  salary: 2500,
  skills: ["JavaScript", "React", "NodeJS", "ExpressJS", "MongoDB"],
};
