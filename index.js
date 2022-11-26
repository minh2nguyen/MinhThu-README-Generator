//Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// This will link the page to where the readme is developed
const generateMarkdown = require('./utils/generateMarkdown.js');

// This is array of questions for user input
const questions = [
    {
        // Input for user's full NAME
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
        // Input for users GITHUB USERNAME
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
        // Input for the users EMAIL 
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
        // Input for the TITLE or the Github Project
        type: 'input',
        name: 'project title',
        message: 'Please enter the title of your Github Project',
        validate: projectInput => {
            // Accept if a project title is inputed 
            if (projectInput) {
                return true;
            // reject and ask the user to enter title if they did not
            } else {
                console. log('Every project has a title. Please enter the title of your Github project!');
                return false;
            }
        } 
    },
    {
        // Input for the description of the Github Project
        type: 'input',
        name: 'description',
        message: 'Please enter the description of your Github Project',
        validate: descriptionInput => {
            // Accept if a description is inputed 
            if (descriptionInput) {
                return true;
            // reject and ask the user to add a description of their project if they did not
            } else {
                console. log('Please provide a description of your Github project!');
                return false;
            }
        } 
    },
    {
        // Input for instruction to project usage
    },
    {
        // Input for how to install project
    },
    {
        // Input for how others can contribute to the project
    },
    {
        // Input for project license 
    },
];

// This is the function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, err => {
        // if there is an error with creating the README
        if (err) {
            console.log(err);
            return;
        // when the README has been created sucessfully!
        } else {
            console.log("Your README has been successfully created!")
        }
    })
}

// Function to initialize app
function init() {
    const init = () => {
        return inquirer.prompt(questions);
    }
}

// Function call to initialize app
init()
.then(userInput => {
    return generateMarkdown(userInput);
})
.then(readmeInfo => {
    return writeToFile(readmeInfo);
})
.catch(err => {
    console.log(err);
})