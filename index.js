// Import Classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Uses the Inquirer package
const inquirer = require("inquirer");
// Uses the Jest
const path = require("path");

// global variables to take in team member info
const teamMembers = [];
const arrId = [];

const mainMenu = () => {
  // WHEN I start the application
  // THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
  const newManager = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "mgrName",
          message: "Please enter the NAME of the team manager:",
        },
        {
          type: "input",
          name: "mgrID",
          message: "Please enter the ID of the team manager:",
        },
        {
          type: "input",
          name: "mgrEmail",
          message: "Please enter the EMAIL of the team manager:",
        },
        {
          type: "input",
          name: "mgrOffice",
          message: "Please enter the OFFICE NUMBER of the team manager:",
        },
      ])
      .then((data) => {
        const manager = new Manager(
          data.mgrName,
          data.mgrID,
          data.mgrEmail,
          data.mgrOffice
        );
        // WHEN I enter the team manager’s name, employee ID, email address, and office number
        teamMembers.push(manager);
        arrId.push(data.mgrID);
        // THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
        newTeam();
      });
  };

  const newTeam = () => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "type",
          message: "Which type of team member would you like to add?",
          choices: [
            "Engineer",
            "Intern",
            "I'm done - create the team profile!",
          ],
        },
      ])
      .then((typeChoice) => {
        switch (typeChoice.type) {
          case "Engineer":
            newEngineer();
            break;
          case "Intern":
            newIntern();
            break;
          default:
            createProfile();
        }
      });
  };

  const newEngineer = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engName",
          message: "What is your engineer's name?",
        },
        {
          type: "input",
          name: "engId",
          message: "What is your engineer's ID?",
        },
        {
          type: "input",
          name: "engEmail",
          message: "What is your engineer's email address?",
        },
        {
          type: "input",
          name: "engGithub",
          message: "What is your engineer's GitHub name?",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engName,
          answers.engId,
          answers.engEmail,
          answers.engGithub
        );
        teamMembers.push(engineer);
        arrId.push(answers.engId);
        // testing
        console.log(
          `\nTeam Array: \n${JSON.stringify(
            teamMembers
          )} \nID Array: \n${arrId}`
        );
        // testing
        newTeam();
      });
  };

  // welcome user and prompt for new manager info
  console.log("\nWelcome to the team profile generator!\n");
  newManager();
};

mainMenu();

// WHEN I select the engineer optionn
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
