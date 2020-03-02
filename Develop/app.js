const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const members = [];
inquirer
    .prompt([{
        type: "list",
        message: "What is your profession?",
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
        var manager = new manager(res.name, res.id, res.email, res.officeId);
        members.push(manager);
        console.log(res);
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
        var engineer = new engineer(res.name, res.id, res.email, res.githubName)
        members.push(engineer);
        console.log(res);
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
        var engineer = new intern(res.name, res.id, res.email, res.schoolName)
        members.push(intern);
        console.log(res);
    })
}

function exitApplication() {
    for (let i = 0; i < members.length; i++) {

    }
    //loop through team members array,depending on the role,will call display methods and call the html generator. then use fs package to output to the output file
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```