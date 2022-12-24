// *** Variable ***
let age: number = 20;
if (age < 50) age += 10;
console.log(age);

// *** Function ***
function render(document: string) {
  console.log("document", document);
}

function calcTax(income: number, taxYear: number): number {
  if (taxYear < 50_000) return income * 2;
  return income * 1.2;
}

console.log(calcTax(30_000, 2022));

// *** Arrays ***
let newArr: number[] = [1, 4, 5, 6];
let newStrArr: string[] = ["one", "two", "three"];

// *** Tuples ***
let user: [number, string] = [0, "Om"];

// *** Enums (Used to declare constants) ***
const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log("mySize is :", mySize);

// *** Objects ***
let employees: {
  //   readonly id: number; // "readonly" avoid the id from getting updated
  id: number;
  name: string;
} = { id: 1, name: "" };
// employee.name = "Om Javir";

console.log("employee :", employees);

// *** Type alias ***
type Employee = {
  id: number;
  name: string;
};

let employee: Employee = {
  id: 1,
  name: "Om Javir",
};

console.log("employee : ", employee);

// *** Union types ***
function kgToLbs(weight: number | string): number {
  // "|" is union type
  if (typeof weight === "number") {
    return weight * 2;
  } else {
    return parseInt(weight) * 2;
  }
}

console.log("Weight: ", kgToLbs(10));
console.log("Weight: ", kgToLbs("15kg"));

// *** Literal types (exact or specific) ***
type Quantity = 50 | 100;
let qnty: Quantity = 100;

// *** Nullable types ***
function greet(name: string | null | undefined) {
  // We cannot pass null or undefined without using union else it will throw error
  if (name) {
    console.log("name :", name);
  } else {
    console.log("Hola!");
  }
}

greet(null);

// *** Optional chaining ***
type Customer = {
  birthday: Date;
};
function getCustomerBday(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomerBday(1);
console.log(customer?.birthday); // We can use "." after ? known as optional chaining instead of using if else conditions.
// Example:
//  if (customers !== null && customers !== undefined) customers[0];
// customers?.[0];
