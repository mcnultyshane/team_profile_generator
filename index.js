// GIVEN a command-line application that accepts user input
const inquirer = require('inquirer');
const fs = require('fs');
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input

// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
const promptMainMenu = () => {
    return inquirer.prompt([{
            type: 'list',
            name: 'whichTeamMem',
            message: 'Would you like to add an engineer or an intern?',
            choices: ['Engineer', 'Intern'],
        }, ])
        .then(responses => {
            console.log(responses)
            // if the user wants to add an engineer:
            if (responses.choices[0]) {
                // call Engineer prompt
                return promptEngineer();

            } else {
                // call engineer prompt
                return promptIntern();
            }
        })
};
const promptIntern = () => {
    return inquirer.prompt([{
                type: 'input',
                name: 'intName',
                message: "Enter employee's name",
            },
            {
                type: 'input',
                name: 'intIdNumber',
                message: "Enter employee ID,s number:",
            },
            {
                type: 'input',
                name: 'intEmail',
                message: "Enter employee's email address:",
            },
            {
                type: 'input',
                name: 'schoolIntern',
                message: "Enter the intern's school:",
            },
            // WHEN I enter the team manager’s name, employee ID, email address, and office number
            // THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
            {
                type: 'list',
                name: 'addTeamMember',
                message: 'Would you like to add another employee or finish building team?',
                choices: ['Add Employee', 'Finish Team'],
            },
            // {
            //     type: 'list',
            //     name: 'whichTeamMem',
            //     message: 'Would you like to add an engineer or an intern?',
            //     choices: ['Engineer', 'Intern'],
            // },
        ])
        .then(responses => {
            console.log(responses)
            // if the user wants to add an employee:
            if (responses.choices[0]) {
                // they are asked which employee:
                return inquirer.prompt([{
                        type: 'list',
                        name: 'whichTeamMem',
                        message: 'Would you like to add an engineer or an intern?',
                        choices: ['Engineer', 'Intern'],
                    }])
                    .then(responsesTwo => {
                        // if the user chooses Engineer:
                        if (responsesTwo.choices[0]) {

                            // Questions for Engineer begin:
                            console.log(responsesTwo);

                        } else {
                            // if they choose intern:
                            // Questions for Intern begin:

                        }

                    })
            } else {
                // render manager page to html
            }
        })
};
const promptEngineer = () => {
    return inquirer.prompt([{
                type: 'input',
                name: 'engName',
                message: "Enter employee's name",
            },
            {
                type: 'input',
                name: 'engIdNum',
                message: "Enter employee ID,s number:",
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
            {
                type: 'list',
                name: 'engAddTeamMember',
                message: 'Would you like to add another employee or finish building team?',
                choices: ['Add Employee', 'Finish Team'],
            },
            // {
            //     type: 'list',
            //     name: 'whichTeamMem',
            //     message: 'Would you like to add an engineer or an intern?',
            //     choices: ['Engineer', 'Intern'],
            // },
        ])
        .then(engResponses => {
            console.log(engResponses)
            // if the user wants to add an employee:
            if (engResponses.choices[0]) {
                // they are asked which employee:
                return inquirer.prompt([{
                        type: 'list',
                        name: 'whichTeamMem',
                        message: 'Would you like to add an engineer or an intern?',
                        choices: ['Engineer', 'Intern'],
                    }])
                    .then(responsesTwo => {
                        // if the user chooses Engineer:
                        if (responsesTwo.choices[0]) {

                            // Questions for Engineer begin:
                            console.log(responsesTwo);

                        } else {
                            // if they choose intern:
                            // Questions for Intern begin:

                        }
                    })
            } else {
                // render manager page to html
            }
        })
};
const promptManager = () => {
    return inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: "Enter employee's name",
            },
            {
                type: 'input',
                name: 'iDNumber',
                message: "Enter employee ID,s number:",
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
            {
                type: 'list',
                name: 'addTeamMember',
                message: 'Would you like to add another employee or finish building team?',
                choices: ['Add Employee', 'Finish Team'],
            },
            // {
            //     type: 'list',
            //     name: 'whichTeamMem',
            //     message: 'Would you like to add an engineer or an intern?',
            //     choices: ['Engineer', 'Intern'],
            // },{
            //     type: 'input',
            //     name: 'engineGithub',
            //     message: "Enter the engineer's gitHub username:",
            // },
            // {
            //     type: 'input',
            //     name: 'schoolIntern',
            //     message: "Enter the intern's school:",
            // },

        ])
        .then(responses => {
            console.log(responses)
            // if the user wants to add an employee:
            if (responses.choices[0]) {
                // they are asked which employee:
                return inquirer.prompt([{
                        type: 'list',
                        name: 'whichTeamMem',
                        message: 'Would you like to add an engineer or an intern?',
                        choices: ['Engineer', 'Intern'],
                    }])
                    .then(responsesTwo => {
                        // if the user chooses Engineer:
                        if (responsesTwo.choices[0]) {

                            // Questions for Engineer begin:
                            console.log(responsesTwo);










                        } else {
                            // if they choose intern:
                            // Questions for Intern begin:

                        }

                    })
            } else {
                // render manager page to html
            }
        })
};


promptManager();
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu


// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu






// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated