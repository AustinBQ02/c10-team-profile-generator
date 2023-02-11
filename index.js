// Import Classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Uses the Inquirer package
const inquirer = require('inquirer');
// Uses the Jest
const path = require('path');




// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
const newManager = async () => {
    const data = await inquirer.prompt([
        {
            type: 'input',
            name: 'mgrName',
            message: 'Please enter the NAME of the team manager:'
        },
        {
            type: 'input',
            name: 'mgrID',
            message: 'Please enter the ID of the team manager:'
        },
        {
            type: 'input',
            name: 'mgrEmail',
            message: 'Please enter the EMAIL of the team manager:'
        },
        {
            type: 'input',
            name: 'mgrOffice',
            message: 'Please enter the OFFICE NUMBER of the team manager:'
        },
    ])
    const manager = new Manager (
        data.mgrName,
        data.mgrID,
        data.mgrEmail,
        data.mgrOffice
    );
    console.log(manager)
}

const mainMenu = () => {
    newManager();
}

mainMenu();

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated


// THEN an HTML file is generated that displays a nicely formatted team roster based on user input