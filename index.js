const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Array of Manager, Engineer, and Intern objects with answers to inquirer questions
const members = [];

// Manager inquirer questions that get pushed into members array when answered
function managerQuestions() {
    inquirer
     .prompt([
         {
            type: "input",
            message: "What is the team manager's name?",
            name: "name",
         },
         {
            type: "input",
            message: "What is the team manager's employee ID?",
            name: "id",
         },
         {
            type: "input",
            message: "What is the team manager's email address?",
            name: "email",
         },
         {
            type: "input",
            message: "What is the team manager's office number?",
            name: "number",
         }
    ])
     .then((answer) => {
        const manager = new Manager(answer.name, answer.id, answer.email, answer.number);
        members.push(manager);
        console.log(members);
        optionQuestion();
    })
}

// Inquirer question that lets user choose more team members and get directed to further questions, or to finish the team 
function optionQuestion() {
    inquirer
     .prompt([
         {
           type: "list",
           message: "Which team member would you like to add?",
           name: "option",
           choices: ["Engineer", "Intern", "The team is complete"]
         }
     ])
      .then((choice) => {
          if (choice.option === "Engineer") {
              engineerQuestions();
          } else if (choice.option === "Intern") {
              internQuestions();
          } else if (choice.option === "The team is complete") {
              writeHTML();
          }
      })
}

// Engineer inquirer questions that get pushed into members array when answered
function engineerQuestions() {
    inquirer
     .prompt([
         {
            type: "input",
            message: "What is the engineer's name?",
            name: "name"
         },
         {
            type: "input",
            message: "What is the engineer's employee ID?",
            name: "id"
         },
         {
            type: "input",
            message: "What is the engineer's email address?",
            name: "email"
         },
         {
            type: "input",
            message: "What is the engineer's GitHub username?",
            name: "github"
         }
     ])
     .then((answer) => {
        const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
        members.push(engineer);
        console.log(members);
        optionQuestion();
     })
}

// Intern inquirer questions that get pushed into members array when answered
function internQuestions() {
    inquirer 
    .prompt([
        {
          type: "input",
          message: "What is the intern's name?",
          name: "name"
        },
        {
          type: "input",
          message: "What is the intern's employee ID?",
          name: "id"
        },
        {
          type: "input", 
          message: "What is the intern's email address?",
          name: "email"
        },
        {
          type: "input", 
          message: "What is the intern's school?",
          name: "school"
        }
    ])
    .then((answer) => {
        const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
        members.push(intern);
        console.log(members);
        optionQuestion();
    })
}

// Calls manager function to start the program
managerQuestions();

// Function to write HTML file
function writeToFile(fileName, template) {
    fs.writeFile(fileName, template, function(err) {
        console.log(fileName);

        if (err) {
            return console.log(err);
        } else {
            return console.log("The team is complete!");
        }
    })
}

// Function that connects user inputs to generated HTML
function writeHTML() {
    let html = generateHTML(members);
    writeToFile('./dist/team.html', html);
}

