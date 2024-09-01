// Task 1:Variables and Data Types
let employeeName= "Cruella Deville";
const employeeID= 1013;
var isActive= true;

console.log(employeeName);
console.log(typeof(employeeName));
console.log(employeeID);
console.log(typeof(employeeID));
console.log(isActive);
console.log(typeof(isActive));



// Task 2: Compound Data Types
let products= ["toothpaste","sunscreen","facewash"];
const productDetails= {
        name:products,
        price:6.28,
        inStock:true,
}
console.log(products, productDetails);

//Task 3: Assignment Operators

let accountBalance = "1765";
accountBalance += 638;
console.log ("Updated accountBalance:", accountBalance);
accountBalance -= 256; 
console.log ("Updated accountBalance:",accountBalance);
accountBalance *= 5;
console.log ("Updated accountBalance:",accountBalance);
accountBalance %= 2; 
console.log ("Updated accountBalance:",accountBalance);

//Task 4: Comparison Operators 
let emmployeeScore1= "8";
let employeeScore2= "5";
console.log(employeeScore1 > employeeScore2);
console.log(employeeScore1< employeeScore2);
console.log(employeeScore1 >= employeeScore2);
console.log(employeeScore1 <= employeeScore2);
console.log(employeeScore1 === employeeScore2);
console.log(employeeScore1 !== employeeScore2);

//Task 5: Logical Operators 
let hasKeyCard = "true";
let hasPermission = "true";
console.log(hasKeyCard && hasPermission);
console.log(hasKeyCard || hasPermission);
console.log(!hasKeyCard);








