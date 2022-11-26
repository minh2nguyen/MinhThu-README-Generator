//Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// This will link the page to where the readme is developed
const generateMarkdown = require('./utils/generateMarkdown.js');

// This is array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Welcome! Please enter for first and last name!',
        validate: nameInput => {
            if (nameInput) {
            // Accept if user entered their first and last name
                return true;
            } else {
            // Reminder for user to enter their name if they have not
                console.log('Please enter your first and last name before moving forward!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'github',
        message: 'Please Type in your Github username.',
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
    },
    {
        // Now asking user for their email
        type: 'input',
        name: 'email',
        message: 'Please enter your email address',
        validate: emailInput => {
            // Accept if a valid email is inputed 
            if (emailInput) {
                return true;
            // reject and ask the user to enter an email if they did not
            } else {
                console. log('Please enter your email address as a source of contact');
                return false;
            }
        } 
    },
    {
        // Question array for Github Prject
        
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
