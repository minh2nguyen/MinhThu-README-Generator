//Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// This will link the page to where the readme is developed
const generateMarkdown = require('./utils/generateMarkdown.js');

// This is array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Type in your Github username.',
        validate: usernameInput => {
            // Accept if a valid username is inputed 
            if (usernameInput) {
                return true;
            // reject and ask the user to enter a valid username if they did not
            } else {
                console. log('Please enter a valid Github username');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
