// making a calculator
import inquirer from "inquirer";

const answers: {
    numberOne: number,
    numberTwo: number,
    operator: string,
} = await inquirer.prompt([
{
  type: "number",
  name: "numberOne",
  message: "Kindly Enter your frist no:",
},
{
    type: "number",
    name: "numberTwo",
    message: "Kindly Enter your Second no:",
  },
  {
    type: "list",
    name: "operator",
    choices: ["*","+","-","/"],
    message: "Select Operator:",
  },

]);

// console.log(answers);
const {numberOne, numberTwo, operator} = answers;

if (numberOne && numberTwo && operator) {
    let result: number = 0;
        if (operator === "+") {
           result = numberOne + numberTwo
    } else if (operator === "-") {
        result = numberOne - numberTwo
 } if (operator === "/") {
    result = numberOne / numberTwo
} if (operator === "*") {
    result = numberOne * numberTwo
}

      console.log("Your Reasult is :", result);  
    
    
} else {
    console.log("Kindly Enter Valid Input");
}
