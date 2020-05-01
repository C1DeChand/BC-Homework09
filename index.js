const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser () {
    return inquirer.prompt ([

        {
            type: "confirm",
            name: "readme",
            message: "Please type 'y' to begin."
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username."
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
            type: "confirm",
            name: "toc",
            message: "Would you like a table of contents?"
        },
        {
            type: "confirm",
            name: "ins",
            message: "Would you like to add an installation method for your project?"
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
            type: "confirm",
            name: "lic",
            message: "Does your project have a license?"
        },
        {
            type: "input",
            name: "license",
            message: "Please enter the type of license."
        },
        {
            type: "input",
            name: "contributing",
            message: "Please enter the names of contributors if any (use commas to seperate multiple)."
        },
        {
            type: "confirm",
            name: "Ts",
            message: "Does your project have any tests?"
        },
        {
            type: "input",
            name: "tests",
            message: "Please add a URL to your tests."
        },
        {
            type: "confirm",
            name: "faq",
            message: "Does your project have any FAQs?"
        },
        {
            type: "input",
            name: "FAQs",
            message: "please list FAQs."
        }

    ])

}

function generateREADME(answers) {
    
    if (answers.readme === true) {
        `
        # ${answers.title}
        ### By: ${answers.username}`
        
        if (answers.contributing === true) 
        {
            `With: ${answers.contributing}.`;
        }
        
        `## Description: 
        ${answers.description}

        `;
    };

    if (answers.toc === true) {
        `
        ### 1. Title
        ### 2. Description`;

        if (answers.ins === true){

            `### 3. Installation`;

        };

        `### 4. Usage`

        if (answers.lic === true) {

            `### 5. License`;

        };

        if (answers.Ts === true) {

            `### 6. Tests`;
            
        };

        if (answers.faq === true) {

            `### 7. FAQs`;
            
        };

    };

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
  


// (function(data) {

//     var filename = data.title.toLowerCase().split(' ').join('') + ".json";

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
  
//       if (err) {
//         return console.log(err);
//       }
  
//       console.log("Success!");
  
//     });
//   });

  