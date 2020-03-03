const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const teamMembers = [];

function initialPrompt() {
    inquirer
        .prompt([{
            type: "list",
            message: "What type of team member would you like to add?",
            name: "profession",
            choices: [
                "manager",
                "engineer",
                "intern",
                "Exit application"
            ]
        }])
        .then(function(response) {
            switch (response.profession) {
                case "manager":
                    addManager();
                    break;
                case "engineer":
                    addEngineer();
                    break;
                case "intern":
                    addIntern();
                    break;
                default:
                    exitApplication();
            }
        });
};

initialPrompt();

function addManager() {
    inquirer.prompt([{
            type: "input",
            message: "Please enter your name",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter your ID",
            name: "id"
        },
        {
            type: "input",
            message: "Please enter your email",
            name: "email"
        },
        {
            type: "input",
            message: "Please enter your office number",
            name: "officeId"
        }
    ]).then(function(res) {
        var manager = new Manager(res.name, res.id, res.email, res.officeId);
        teamMembers.push(manager);
        console.log(res);
        initialPrompt();
        //render(arr);
    })
}

function addEngineer() {
    inquirer.prompt([{
            type: "input",
            message: "Please enter your name",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter your ID",
            name: "id"
        },
        {
            type: "input",
            message: "Please enter your email",
            name: "email"
        },
        {
            type: "input",
            message: "Please enter your GitHub name",
            name: "githubName"
        }
    ]).then(function(res) {
        var engineer = new Engineer(res.name, res.id, res.email, res.githubName)
        teamMembers.push(engineer);
        console.log(res);
        initialPrompt();
    })
}

function addIntern() {
    inquirer.prompt([{
            type: "input",
            message: "Please enter your name",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter your ID",
            name: "id"
        },
        {
            type: "input",
            message: "Please enter your email",
            name: "email"
        },
        {
            type: "input",
            message: "Which school are you in?",
            name: "schoolName"
        }
    ]).then(function(res) {
        var intern = new Intern(res.name, res.id, res.email, res.schoolName)
        teamMembers.push(intern);
        console.log(res);
        initialPrompt();
    })
}

function exitApplication() {
    var page = render(teamMembers);
    fs.writeFile(outputPath, page, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
    //loop through team members array,depending on the role,will call display methods and call the html generator. then use fs package to output to the output file
}