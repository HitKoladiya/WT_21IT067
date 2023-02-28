calculator()
function calculator() {
    var num1 = prompt("Enter a number:");
    var num2 = prompt("Enter another number:");

    // type conversion strings to numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Get the operation
    var operation = prompt("Enter an operation (+, -, *, /):");

    // Perform the operation
    if (operation === "+") {
    alert(`${num1} + ${num2} = ${num1 + num2}`);
    } else if (operation === "-") {
    alert(`${num1} - ${num2} = ${num1 - num2}`);
    } else if (operation === "*") {
    alert(`${num1} * ${num2} = ${num1 * num2}`);
    } else if (operation === "/") {
    alert(`${num1} / ${num2} = ${num1 / num2}`);
    } else { 
    alert("Invalid operator");
    } 
   }