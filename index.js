// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter project title.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of project.',
    },
    {
        type: 'input',
        name: 'installations',
        message: 'Describe how to install and use this project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage guide.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'license used?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How would a different user contribute to the project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How should you run a test in this project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter github link.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email.',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const html = generateMarkdown(data)

        writeToFile('Readme.md', html);
    })
}

// Function call to initialize app
init();
