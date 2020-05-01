var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt ([
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
        message: "Please enter the names of contributors if any."
    },
    {
        type: "confirm",
        name: "tests",
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

]).then(function(data) {

    var filename = data.title.toLowerCase().split(' ').join('') + ".json";

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
  
      if (err) {
        return console.log(err);
      }
  
      console.log("Success!");
  
    });
  });

  