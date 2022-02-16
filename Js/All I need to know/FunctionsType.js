"use strict";
function add2(first, second) {
    const result = first + second;
    return result;
}
const total2 = add2(10, 20);
console.log(total);
// Arrow function
const getFullName3 = (firstName = "John", lastName) => {
    const result = firstName + " " + lastName;
    return result;
};
const fullName2 = getFullName3("Naeem", "Miah");
console.log(fullName2);
// If do not want to return from function
const getFullName4 = (firstName, lastName) => {
    const result = firstName + " " + lastName;
    console.log(result);
};
getFullName4("Naeem", "Miah");
