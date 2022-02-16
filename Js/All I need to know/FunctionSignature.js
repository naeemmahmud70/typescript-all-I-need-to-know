"use strict";
let sum;
sum = (a, b) => {
    return a + b;
};
let calculation;
calculation = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
calculation(5, 5, "add");
let userDetails;
userDetails = (id, user) => {
    console.log(id, user);
};
