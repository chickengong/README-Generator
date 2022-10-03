// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js')

// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    message: "What is your name?",
    name: 'personName',
  },
  {
    type: "input",
    message: "What's the name of your project?",
    name: "projectName",
  },
  {
    type: "list",
    message: "Which one of these licenses would you like to use?",
    name: "license",
    choices: ["MIT", "ISC", "Apache License 2.0"],
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: 'gitUserName',
  },
  {
    type: "input",
    message: "Please describe your project",
    name: "projectDescript",
  },
  {
    type: "input",
    message: "Please provide installation instruction",
    name: "installGuide",
  },
  {
    type: "input",
    message: "Please provide how someone may contribute.",
    name: "contributions",
  },
  {
    type: "input",
    message: "How is the application used?",
    name: "usage",
  },
  {
    type: "input",
    message: "How was your application tested?",
    name: "tested",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
]


function writeToFile(fileName, data) {
  
    fs.writeFile(fileName, data,
      (err) => err ? console.log(err) : console.log(data));
 }

function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      console.log(response);
      const markdown = generateMarkdown(response);
      const fileName = `README.md`;
      writeToFile(fileName, markdown)
    })
 }


init();