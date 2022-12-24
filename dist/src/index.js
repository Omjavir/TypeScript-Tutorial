"use strict";
let age = 20;
if (age < 50)
    age += 10;
console.log(age);
function render(document) {
    console.log("document", document);
}
function calcTax(income, taxYear) {
    if (taxYear < 50000)
        return income * 2;
    return income * 1.2;
}
console.log(calcTax(30000, 2022));
let newArr = [1, 4, 5, 6];
let newStrArr = ["one", "two", "three"];
let user = [0, "Om"];
let mySize = 2;
console.log("mySize is :", mySize);
let employees = { id: 1, name: "" };
console.log("employee :", employees);
let employee = {
    id: 1,
    name: "Om Javir",
};
console.log("employee : ", employee);
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2;
    }
    else {
        return parseInt(weight) * 2;
    }
}
console.log("Weight: ", kgToLbs(10));
console.log("Weight: ", kgToLbs("15kg"));
let qnty = 100;
function greet(name) {
    if (name) {
        console.log("name :", name);
    }
    else {
        console.log("Hola!");
    }
}
greet(null);
function getCustomerBday(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomerBday(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//# sourceMappingURL=index.js.map