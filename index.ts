#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 50 + 1);
console.log(randomNumber);

const answers = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "please guess a number between 1-50 ",
    },
]);

if(answers.UserGuessedNumber === randomNumber){
    console.log("Congratulations! you guess right number.");
}else {
console.log("you guessed wrong number");
}