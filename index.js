// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

//Page creation:
const generateTemplate = require("./src/generateTemplate")

//team profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamProfileArray = [];

const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the your name",
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log("Please enter the your name!");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "id",
        message: "Please enter the ID",
        validate: (userInput) => {
          if (isNaN(userInput) || userInput.trim().length === 0) {
            console.log("Please enter a valid ID!");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the email",
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log("Please enter the email!");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "role",
        message: "Please select your role ",
        choices: ["Manager", "Engineer", "Intern"],
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log("Please choose the role of the employee!");
            return false;
          }
        },
      },
    ])
    .then((userInput) => {
      switch (userInput.role) {
        case "Manager":
          addManager(userInput);

          break;
        case "Engineer":
          addEngineer(userInput);

          break;
        case "Intern":
          addIntern(userInput);

          break;
        default:
          console.log("Something is very wrong!");
      }
    });
};
// addManager function

const addManager = (data) => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the office number of your team manager",
        validate: (userInput) => {
          if (isNaN(userInput) || userInput.trim().length === 0) {
            console.log("Please enter a valid number for office number!");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((userInput) => {
      let manager = new Manager(
        data.name,
        data.id,
        data.email,
        userInput.officeNumber
      );
      console.log(manager);
      teamProfileArray.push(manager);
      menuDisplay();
    });
};

const addEngineer = (data) => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "github",
        message: "Please enter your github username ",
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log("Please enter your github username of your engineer");
            return false;
          }
        },
      },
    ])
    .then((userInput) => {
      let engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        userInput.github
      );
      console.log(engineer);
      teamProfileArray.push(engineer);
      menuDisplay();
    });
};
const addIntern = (data) => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "school",
        message: "Please enter your school username ",
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log("Please enter your school of your Intern");
            return false;
          }
        },
      },
    ])
    .then((userInput) => {
      let intern = new Intern(data.name, data.id, data.email, userInput.school);
      console.log(intern);
      teamProfileArray.push(intern);
      menuDisplay();
    });
};

const menuDisplay = () => {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "confirm",
        message: "Do you wish to continue creating another employee?",
        default: false,
      },
    ])
    .then((response) => {
      if (response.confirm) {
        addEmployee();
      } else {
        console.log("Done creating a team!");
        console.log(teamProfileArray);
        writeToFile('.dist/team.html', );
      }
    });
};

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile (fileName, data, err =>{
      err ? console.error(err) : console.log('Team profile generated successfully!')
  })
  }

// // TODO: Create a function to initialize app
function init() {
  addEmployee();   
  };

// Function call to initialize app
init();
