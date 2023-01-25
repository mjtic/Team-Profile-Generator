// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

//Page creation:
//const generateHTML = require("")

//team profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//question
//inquire starts
//manager prompt questions
//name, employee id, email, and office number
//.then menu option to add enigneer or intern (switch)
//select option prompt questions
const addManager = [
  {
    type: "input",
    name: "name",
    message: "Please enter the first name of your team manager",
    validate: (userInput) => {
      if (userInput) {
        return true;
      } else {
        console.log("Please enter the first name of your team manager!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the ID of your team manager",
    validate: (userInput) => {
        if (isNaN(userInput) || userInput.trim().length === 0) {
          console.log("Please enter a valid ID for office number!");
          return false;
        } else {
          return true;
        }
      },
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the email of your team manager",
    validate: (userInput) => {
      if (userInput) {
        return true;
      } else {
        console.log("Please enter the first name of your team manager!");
        return false;
      }
    },
  },
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
];

const addEmployeeMenu = [
    
    {
        type: "list",
        name: "role",
        message: "What is the role in the company?",
        choices: ['Engineer','Intern'],
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log("Please choose the role of the employee!");
            return false;
          }
        },
      },
]

//menu
//engineer/intern






// TODO: Create a function to write README file
// function writeToFile(fileName, data) {    
//     fs.writeFile (fileName, data, err =>{
//       err ? console.error(err) : console.log('Team profile generated successfully!')
//   })
//   }
  
  // TODO: Create a function to initialize app
  function init() {
    inquirer.prompt(addManager).then((response) => {
      console.log(response),
      inquirer.prompt(addEmployeeMenu).then((response)=>{
        console.log(response)
      }); 
    //   writeToFile("", generateMarkDown(response)); 
    });
    
  
  }
  
  // Function call to initialize app
  init();