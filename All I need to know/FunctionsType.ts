function add2(first: number, second: number): number {
  const result = first + second;
  return result;
}
const total2: number = add2(10, 20);
console.log(total);

// Arrow function

const getFullName3 = (firstName: string = "John", lastName: string): string => {
  const result = firstName + " " + lastName;
  return result;
};
const fullName2: string = getFullName3("Naeem", "Miah");
console.log(fullName2);

// If do not want to return from function

const getFullName4 = (firstName: string, lastName: string): void => {
  const result = firstName + " " + lastName;
  console.log(result);
};
getFullName4("Naeem", "Miah");
