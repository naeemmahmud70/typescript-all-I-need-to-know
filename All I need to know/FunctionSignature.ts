let sum: (x: number, y: number) => number;

sum = (a: number, b: number) => {
  return a + b;
};

let calculation: (x: number, y: number, z: string) => number;

calculation = (a: number, b: number, c: string) => {
  if (c === "add") {
    return a + b;
  } else {
    return a - b;
  }
};
calculation(5, 5, "add");

let userDetails: (
  id: number | string,
  userInfo: { name: string; age: number }
) => void;

userDetails = (id: number | string, user: { name: string; age: number }) => {
  console.log(id, user);
};
