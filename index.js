//Require the inquirer package
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    {
        message: "What is the title of the project?",
        name: "title",
        type: "input"
    },
    {
        message: "Give a description of this project and it's purpose.",
        name: "description",
        type: "input"
    },
    {
        message: "Please provide any special installation instructions.",
        name: "installationInstructions",
        type: "input"
    },
    {
        message: "Please provide any guidelines for usage.",
        name: "usage",
        type: "input"
    },
    {
        message: "Please provide guidelines for contributions to this project.",
        name: "contributing",
        type: "input"
    },
    {
        message: "Provide instructions for testing.",
        name: "tests",
        type: "input"
    },
    {
        message: "Please select your license.",
        name: "license",
        type: "list",
        choices: ["MIT", "MPL-2.0", "Apache-2.0", "None"] 
    //Pick a handful of licsenses and "choices" will be an array to chose from 
    },
    {
        message: "What is your GitHub username?",
        name: "github",
        type: "input"
    },
    {
        message: "What is your email address?", 
        name: "email",
        type: "input"
    },


];

// function to write README file
function writeToFile(fileName, data) {

    const content = generateMarkdown(data);

    fs.writeFile(fileName, content, (err) => {

        if (err) console.log(err);

    });

}

// function to initialize program
function init() {

    inquirer.prompt(questions)
        .then(response => {
            //console.log(response);

            //response.title;

            writeToFile("GEN_README.md", response);

        })

}

// function call to initialize program
init();
