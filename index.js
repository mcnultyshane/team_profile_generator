// GIVEN a command-line application that accepts user input
const inquirer = require('inquirer');
const fs = require('fs');
const validator = require('validator');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// empty array for input Data
const teamArray = [];

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
                name: 'idNumber',
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
            const MyNewEmployee = new Employee(response.name, response.idNumber, response.email);
            const MyNewManager = new Manager(response.name, response.idNumber, response.email, response.officeNum);
            teamArray.push(MyNewManager);
            console.log("User Inputs: " + MyNewEmployee);
            console.log("New Array: " + teamArray);
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

// function for adding additional team members(main menu return)
const promptMainMenu = () => {
    inquirer.prompt([{
            type: 'list',
            name: 'whichTeamMem',
            message: 'Select additional team member to add:',
            choices: ["Engineer", "Intern", "Team Finished"],
        }, ])
        .then(responses => {
            // console.log("Your choice: " + responses.toString())
            switch (responses.whichTeamMem) {
                case "Engineer":
                    promptEngineer();
                    break;

                case "Intern":
                    promptIntern();
                    break;

                case "Team Finished":
                    generateTeam(teamArray);
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
            console.log("These are the Intern Inputs: " + JSON.stringify(intResponses))
            const MyNewIntern = new Intern(intResponses.intName, intResponses.intIdNumber, intResponses.intEmail, intResponses.schoolIntern)
            console.log("Intern Inputs: " + intResponses);
            teamArray.push(MyNewIntern);

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
            console.log("Engineer Inputs: " + JSON.stringify(engResponses.engName, engResponses.engIdNum, engResponses.engEmail, engResponses.engGithub))
            teamArray.push(MyNewEngineer);

            promptMainMenu();

        })
};

function generateManagerHTML(manager) {
    return ` 
    <div class="column is-4">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title is-centered has-background-warning is-size-4">
                    ${manager.getRole()}
                </p>
            </header>
            <div class="card-content has-background-white-ter">
                <div class="media">
                    <div class="media-left">
                        <figure class="image">
                            <i class="fas fa-business-time is-size-1"></i>
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-5">${manager.getName()}</p>
                        <p class="subtitle is-6 ">ID #: ${manager.getID()} </p>

                    </div>
                </div>
                <div class="content">
                    Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}<i title="Email"
                            class="is-6 is-clickable"></i>
                    </a>
                    <br>
                    Office Number: ${manager.getOfficeNum()}
                </div>
            </div>
        </div>
    </div>
    `;
}

function generateEngineerHTML(engineer) {
    return `
        <div class="column is-4">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title is-centered has-background-warning is-size-4">
                        ${engineer.getRole()}
                    </p>
                </header>
            <div class="card-content has-background-white-ter">
                <div class="media">
                    <div class="media-left">
                        <figure class="image">
                            <i class="far fa-file-code is-size-1"></i>
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-5">${engineer.getName()}</p>
                        <p class="subtitle is-6 ">ID #: ${engineer.getID()} </p>
                    </div>
                </div>
                <div class="content">
                    Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}<i title="Email"
                            class="is-6 is-clickable"></i>
                    </a>
                    <br>
                    Github Username:
                    <a class="is-clickable" href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a>
                </div>
            </div>
        </div>
    </div>
        `;
}

function generateInternHTML(intern) {
    return `
<div class="column is-4">
    <div class="card">
        <header class="card-header">
            <p class="card-header-title is-centered has-background-warning is-size-4">
                ${intern.getRole()}
            </p>
        </header>
        <div class="card-content has-background-white-ter">
            <div class="media">
                <div class="media-left">
                    <figure class="image">
                        <i class="fas fa-user-graduate is-size-1"></i>
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-5">${intern.getName()}</p>
                    <p class="subtitle is-6 ">ID #: ${intern.getID()}</p>
                </div>
            </div>
            <div class="content">
                Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}<i title="Email"
                        class="is-6 is-clickable"></i>
                </a>
                <br>
                University: ${intern.getSchool()}
            </div>
        </div>
    </div>
</div>
    `;
}

// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
const generateTeam = (teamArray) => {
    // console.log("this is line 236:" + teamArray);
    const cardArray = [];

    cardArray.push(teamArray
        .filter(teamMember => teamMember.getRole() === "Manager")
        .map(manager => generateManagerHTML(manager))
    );
    cardArray.push(
        teamArray
        .filter(teamMember => teamMember.getRole() === "Engineer")
        .map(engineer => generateEngineerHTML(engineer))
    );
    cardArray.push(
        teamArray
        .filter(teamMember => teamMember.getRole() === "Intern")
        .map(intern => generateInternHTML(intern)).join('')
    );

    console.log("I'm the card array" + cardArray);
    fs.writeFile('./dist/index.html', template(cardArray), (error, data) =>
        error ? console.error(error) : console.log(data)
    );
    return cardArray;
}


const template = (currentTeam) => `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <title>Document</title>
</head>

<body class="container"></body>
    <section class="hero is-primary has-text-centered">
        <div class="hero-body">
            <p class="title is-size-1 has-text-weight-bold	">
                Team Line-up
            </p>
        </div>
    </section>
    <div class="columns mt-1 is-flex-direction-row is-flex-wrap-wrap is-justify-content-center">
    ${currentTeam}
    </div>
</body>

</html>
`;



promptManager();