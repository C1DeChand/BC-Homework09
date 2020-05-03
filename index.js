const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");
// const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser () {
    return inquirer.prompt ([

        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username."
        },
        {
            type: "input",
            name: "contributing",
            message: "Please enter the names of contributors if any (use commas to seperate multiple)."
        },
        {
            type: "input",
            name: "repoURL",
            message: "Please enter the URL to your project/repository."
        },
        {
            type: "input",
            name: "title",
            message: "Please enter the title of your project/readme."
        },
        {
            type: "input",
            name: "description",
            message: "Please enter a description of what your project."
        },
        {
            type: "input",
            name: "install",
            message: "Please describe how to install your project."
        },
        {
            type: "input",
            name: "usage",
            message: "Please describe how to use your project."
        },
        {
            type: "input",
            name: "license",
            message: "Please enter the type of license."
        },
        {
            type: "input",
            name: "tests",
            message: "Please add a URL to your tests."
        },
        {
            type: "input",
            name: "FAQs",
            message: "please list FAQs."
        },
        {
            type: "input",
            name: "contact",
            message: "Please enter any contact info you want included."
        }

    ]);

};


function generateREADME(answers) {

    // const queryUrl = `https://api.github.com/users/${answers.username}`;

    // axios.get(queryUrl).then(function(res) {
    //     const emailInfo = res.data.map(function(info){
    //         return info.email
    //     })

    //     const emailInfoStr = emailInfo.join("\nEmail: ");

    //     fs.appendFile("readme.md", emailInfoStr, function(err) {

    //         if (err) {

    //             console.log(err);

    //         }
    
    //         console.log(`Saved ${emailInfoStr}`);

    //     });

    // });

    return `
# ${answers.title}
## By: ${answers.username} - ![GitHub followers](https://img.shields.io/github/followers/${answers.username}?label=Follow&style=social)

${answers.contributing}

# Table of Contents:
## [Description](#description)
## [Links](#links)
## [Installation](#installation)
## [Usage](#usage)
## [License](#license)
## [Tests](#tests)
## [FAQs](#faqs)
## [Contact](#contact)

## Description: 
${answers.description}

## Links:
${answers.repoURL}

## Installation:

${answers.install}

## Usage:
${answers.usage}

## License:
${answers.license}

## Tests:
${answers.tests}

## FAQs:
${answers.FAQs}

## Contact:
${answers.contact}
`

};

async function init() {

    console.log("Generating...");

    try {

      const answers = await promptUser();
  
      const readme = generateREADME(answers);
  
      await writeFileAsync("readme.md", readme);
  
      console.log("Successfully wrote to readme.md");

    } catch(err) {

      console.log(err);

    };

};
  
init();
