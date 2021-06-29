// GIVEN a command-line application that accepts user input
const inquirer = require('inquirer');
const fs = require('fs');
const validator = require('validator');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
// const {
//     generate
// } = require('rxjs');

const teamMemberArray = [];

// Taken back to main menu
const promptMainMenu = () => {
    inquirer.prompt([

            {
                type: 'list',
                name: 'whichTeamMem',
                message: 'Select additional team member to add:',
                choices: ["Engineer", "Intern", "Team Finished"],
            },
        ])
        .then(responses => {
            console.log("Your choice: " + responses)
            switch (responses.whichTeamMem) {
                case "Engineer":
                    promptEngineer();
                    break;

                case "Intern":
                    promptIntern();
                    break;

                case "Team Finished":
                    generateTeam();
                    break;
            }
        }).catch(error => {
            if (error.isTtyError) {
                return console.log(error.message)
            } else {
                return "unknown error involved"
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
                default: "",
                validate: userInput => {
                    if (validator.isNumeric(userInput)) {
                        return true;
                    }
                    return "Please enter a valid number."
                }
            },
            {
                type: 'input',
                name: 'intEmail',
                message: "Enter intern's email address:",
                default: "",
                validate: userInput => {
                    if (userInput !== "") {
                        return true
                    }
                    return "You have to provide an email."
                }
            },
            {
                type: 'input',
                name: 'schoolIntern',
                message: "Enter the intern's school:",
                default: "",
                validate: userInput => {
                    if (userInput !== "") {
                        return true
                    }
                    return "You have to provide a school."
                }
            },
        ])
        .then(intResponses => {
            console.log("These are the Intern Inputs: " + intResponses)
            const MyNewIntern = new Intern(intResponses.intName, intResponses.intIdNumber, intResponses.intEmail, intResponses.schoolIntern)
            console.log("Intern Inputs: " + intResponses);
            teamMemberArray.push(MyNewIntern);

            promptMainMenu();

        })

};

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
const promptEngineer = () => {
    return inquirer.prompt([{
                type: 'input',
                name: 'engName',
                message: "Enter engineer's name:",
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
                message: "Enter engineer ID number:",
                default: "",
                validate: userInput => {
                    if (validator.isNumeric(userInput)) {
                        return true;
                    }
                    return "Please enter a valid number."
                }
            },
            {
                type: 'input',
                name: 'engEmail',
                message: "Enter engineer's email address:",
            },
            {
                type: 'input',
                name: 'engGithub',
                message: "Enter the engineer's gitHub username:",
            },
        ])
        .then(engResponses => {
            const MyNewEngineer = new Engineer(engResponses.engName, engResponses.engIdNum, engResponses.engEmail, engResponses.engGithub)
            console.log("Engineer Inputs: " + engResponses)
            teamMemberArray.push(MyNewEngineer);

            promptMainMenu();

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
                default: "",
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
                default: "",
                validate: userInput => {
                    if (validator.isNumeric(userInput)) {
                        return true;
                    }
                    return "Please enter a valid number."
                }
            },
            // WHEN I enter the team manager’s name, employee ID, email address, and office number
            // THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
            // 
        ])
        .then(response => {
            const MyNewEmployee = new Employee(response.name, response.iDNumber, response.email);
            const MyNewManager = new Manager(response.name, response.idNumber, response.email, response.officeNum);
            teamMemberArray.push(MyNewManager);
            console.log("User Inputs: " + MyNewEmployee);
            console.log("New Array: " + teamMemberArray);
            // what do you want to do next/ 
            promptMainMenu()

                .catch(error => {
                    if (error.isTtyError) {
                        return console.log(error.message)
                    } else {
                        return "unknown error involved"
                    }
                })
        }).catch(error => {
            if (error.isTtyError) {
                return console.log(error.message)
            } else {
                return "unknown error involved"
            }
        });
}
// my option funciton
// do you want to build a ___ ___ __
// inquirer prompt
const generateTeam = () => {
    console.log(teamMemberArray);

}
promptManager();

// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address