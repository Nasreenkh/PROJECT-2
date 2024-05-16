#! /usr/bin/env node

import inquirer from "inquirer";

// Define the initial balance and PIN
let myBalance: number = 10000; // Dollar
let mypin: number = 1245;

  // Async function to handle user input
async function main() {
    // Prompt the user for PIN
    let pinAnswer = await inquirer.prompt([
        {
            name: "pin",
            message: "Enter your PIN: ",
            type: "number",
        }
    ]);

    // Check if the entered PIN matches
    if (pinAnswer.pin === mypin) {
        console.log("Correct PIN Code!");

        // Prompt user for operation choice
        let operationAns = await inquirer.prompt([
            {
                name: "operation",
                message: "Please select an option:",
                type: "list",
                choices: ["Withdraw", "Fast Track Withdraw", "Check balance"]
            }
        ]);

        // Check the selected operation
        if (operationAns.operation === "Withdraw" || operationAns.operation === "Fast Track Withdraw") {
            // Prompt user for withdrawal amount
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter the amount to withdraw: ",
                    type: "number",
                }
            ]);
            
            // Check if withdrawa amount is valid
            if (amountAns.amount <= myBalance) {
                // Perform withdrawa and update balance
                myBalance -= amountAns.amount;
                console.log("Withdrawa successful. Your remaining balance is: " + myBalance);
            } else {
                console.log("Insufficient funds!");
            }
        } else if (operationAns.operation === "Check balance") {
            // Display current balance
            console.log("Your balance is: " + myBalance);
        }
    } else {
        console.log("Incorrect PIN number!");
    }
}

// Call the main function to start the program
main();

