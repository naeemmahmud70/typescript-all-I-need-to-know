// Regular function
function add(first: number, second: number): number {
  const result = first + second;
  return result;
}
const total: number = add(10, 20);
console.log(total);

// Arrow function

const getFullName = (firstName: string, lastName: string): string => {
  const result = firstName + " " + lastName;
  return result;
};
const fullName: string = getFullName("Naeem", "Miah");
console.log(fullName);

// If do not want to return from function

const getFullName2 = (firstName: string, lastName: string): void => {
  const result = firstName + " " + lastName;
  console.log(result);
};
getFullName2("Naeem", "Miah");
