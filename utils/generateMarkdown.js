const fs = require('fs')
const inquirer = require('inquirer');
const index = require('.././index.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === 'APACHE 2.0'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'GPL 3.0') {
    return`[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === 'BSD 3') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else (license === 'None')
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## table of content
  
  * [Description](#description)
  * [License](#license)
  * [Installations](#installations)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Email](#email)
  * [Github](#github)
  
  ## Description
  ${data.description}
  
  
  
  ## Installations
  ${data.installations}
  
  ## Usage
  ${data.usage}
    
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Github
  ${data.github}
    
  ## Email
  ${data.email}
    
  ## License
  ${renderLicenseBadge(data.license)}
    

`;
}

module.exports = generateMarkdown;
