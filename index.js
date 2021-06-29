// GIVEN a command-line application that accepts user input
const inquirer = require('inquirer');
const fs = require('fs');
const validator = require('validator');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const teamMemberArray = [];

// Taken back to main menu
const promptMainMenu = () => {
    
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'addTeamMember',
            message: 'Would you like to add another employee?',
            default: false,
        
        },
        {
            type: 'list',
            name: 'whichTeamMem',
            message: 'Would you like to add an engineer or an intern?',
            choices: ['Manager', 'Engineer', 'Intern'],
        }, ])
        .then(responses => {
            console.log(responses)
            // if the user wants to add an engineer:
            if (responses.whichTeamMem[0]) {
                // call Engineer prompt
                return promptManager();

            } else if (responses.whichTeamMem[1]) {
                // call engineer prompt
                return promptEngineer();

            } else {
                return promptIntern();
            }
        })
};

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
const promptIntern = () => {
    return inquirer.prompt([{
                type: 'input',
                name: 'intName',
                message: "Enter intern's name:",
                default: "",
                validate: userInput => {
                    if (userInput !== "") {
                        return true
                    }
                    return "You have to provide an employee name"
                }
            },
            {
                type: 'input',
                name: 'intIdNumber',
                message: "Enter intern's employee ID number:",
            },
            {
                type: 'input',
                name: 'intEmail',
                message: "Enter intern's email address:",
            },
            {
                type: 'input',
                name: 'schoolIntern',
                message: "Enter the intern's school:",
            },
            // WHEN I enter the team manager’s name, employee ID, email address, and office number
            // THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
            // {
            //     type: 'confirm',
            //     name: 'intAddTeamMember',
            //     message: 'Would you like to add another employee?',
            //     default: false,
            // },
            // {
            //     type: 'list',
            //     name: 'whichTeamMem',
            //     message: 'Would you like to add an engineer or an intern?',
            //     choices: ['Engineer', 'Intern'],
            // },
        ])
        .then(IntResponses => {
            console.log("These are the Intern Inputs: " + IntResponses)
            // if the user wants to add an employee:
            // if (IntResponses.intAddTeamMember[0]) {
            //     // they are asked which employee:
            //     return promptMainMenu ()
                    
            // } else {
            //     return Intresponses
            //     // render manager page to html
            // }
        })
};

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
const promptEngineer = () => {
    return inquirer.prompt([{
                type: 'input',
                name: 'engName',
                message: "Enter employee's name:",
                default: "",
                validate: userInput => {
                    if (userInput !== "") {
                        return true
                    }
                    return "You have to provide an employee name"
                }
            },
            {
                type: 'input',
                name: 'engIdNum',
                message: "Enter employee ID number:",
            },
            {
                type: 'input',
                name: 'engEmail',
                message: "Enter employee's email address:",
            },
            {
                type: 'input',
                name: 'engGithub',
                message: "Enter the engineer's gitHub username:",
            },
            // return back to main menu?
            // {
            //     type: 'confirm',
            //     name: 'engAddTeamMember',
            //     message: 'Would you like to add another employee?',
            //     default: false,
            // },
        ])
        .then(engResponses => {
            // console.log(engResponses)
            // // if the user wants to add an employee:
            // if (engResponses.engAddTeamMember) {
            //     // they are asked which employee:
            //     return promptMainMenu ()
                    
            // } else {
            //     return engResponses
            //     // render manager page to html
            // }
        })
};

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
const promptManager = () => {
    console.log("Welcome to the Team Builder.");
    return inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: "Enter employee's name:",
                default: "",
                validate: userInput => {
                    if (userInput !== "") {
                        return true
                    }
                    return "You have to provide an employee name"
                }
            },
            {
                type: 'input',
                name: 'iDNumber',
                message: "Enter employee ID number:",
                default:"",
                validate: userInput => {
                    if (validator.isNumeric(userInput)) {
                        return true;
                    }
                    return "Please enter a valid number."
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter employee's email address:",
            },
            {
                type: 'input',
                name: 'officeNum',
                message: "Enter the manager's office number:",
            },
            // WHEN I enter the team manager’s name, employee ID, email address, and office number
            // THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
            // 
        ])
        .then(response => {
            const MyNewEmployee = new Manager(response.name, response.idNumber, response.email, response.officeNum)
            teamMemberArray.push(MyNewEmployee)
            console.log("Review the user inputs: " + response)
           // what do you want to do next/ 
            promptMainMenu()

            .catch(error => {
                if (error.isTtyError) {
                    return console.log(error.message)
                } else {
                    return "unknown error involved"
                }
            })
        });
    }
// my option funciton
// do you want to build a ___ ___ __
// inquirer prompt

promptManager();

// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address