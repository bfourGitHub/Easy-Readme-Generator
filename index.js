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
        message: "What is the description of the Project",
        name: "description",
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
