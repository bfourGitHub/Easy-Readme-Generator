//Require the inquirer package
const inquirer = require("inquirer");

// array of questions for user
const questions = [
    {
        message: "What is the title of the project?",
        name: "title",
        type: "input"
    },
    {
        message: "What is the description of the Project",
        name: "description",
        type: "input"
    },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    
}

// function call to initialize program
init();
