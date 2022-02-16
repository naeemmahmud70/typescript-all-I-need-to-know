"use strict";
// Regular function
function add(first, second) {
    const result = first + second;
    return result;
}
const total = add(10, 20);
console.log(total);
// Arrow function
const getFullName = (firstName, lastName) => {
    const result = firstName + " " + lastName;
    return result;
};
const fullName = getFullName("Naeem", "Miah");
console.log(fullName);
// If do not want to return from function
const getFullName2 = (firstName, lastName) => {
    const result = firstName + " " + lastName;
    console.log(result);
};
getFullName2("Naeem", "Miah");
