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

//where all response comes into
const teamProfileArray = [];

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
          console.log("Please enter a valid ID for your team manager!");
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
        console.log("Please enter the email of your team manager!");
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
      {
        type: "input",
        name: "name",
        message: "Please enter the first name of employee",
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log("Please enter the first name of your employee!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the ID of your employee",
        validate: (userInput) => {
            if (isNaN(userInput) || userInput.trim().length === 0) {
              console.log("Please enter a valid ID for your employee!");
              return false;
            } else {
              return true;
            }
          },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the email of your employee",
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log("Please enter the email of your employee!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Please enter the github username of your employee",
        
        validate: (userInput) => {
          if (userInput) {
            return true;
          } else {
            console.log("Please enter the email of your employee!");
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



// function runApp() {
//   createTeam();
//       //Creating My Team: 
//       function createTeam() {
//           inquirer.prompt([{
//               type: "list",
//               message: "What type of employees are you liking to add to your team: Manager, Engineer, Intern?",
//               name: "addEmployee",
//               choices: ["Manager", "Engineer", "Intern", "I am finished adding team members."]
//           }]).then(function(input){
//               switch(input.addEmployee){
//                   case "Manager":
//                       createManager();
//                       break;
//                   case "Engineer":
//                       createEngineer();
//                       break;
//                   case "Intern":
//                       createIntern();
//                   default:
//                       createHtml();
//               }
//           })
//       }
  
//       function createManager() {
//           inquirer.prompt([{
//               type: 'input',
//               name: "managerName",
//               message: "What is your Manager's Name? "
//           },
//           {
//               type: 'input',
//               name: "managerId",
//               message: "What is your Manager's ID? "
//           },
//           {
//               type: 'input',
//               name: "managerEmail",
//               message: "What is your Manager's email? "
//           },
//           {
//               type: 'input',
//               name: "managerOfficeNumber",
//               message: "What is your Manager's Office Number? "
//           }
//       ]).then(answers => {
//           const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
//           teamArray.push(manager);
//           createTeam();
//         });
//       }
//           function createEngineer() {
//               inquirer.prompt([
//                   {
//                       type: 'input',
//                       name: "engineerName",
//                       message: "What is your Engineer's Name: ?"
//                   },
//                   {
//                       type: 'input',
//                       name: "engineerId",
//                       message: "What is your Engineer's ID?"
//                   },
//                   {
//                       type: 'input',
//                       name: "engineerEmail",
//                       message: "What is your Engineer's Email?"
//                   },
//                   {
//                       type: 'input',
//                       name: "engineerGithub",
//                       message: "What is your Engineer's GitHub username?"
//                   },
//                   ]).then(answers => {
//                       const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.managerOfficeNumber);
//                       teamArray.push(engineer);
//                       createTeam();
//                     });
//           }
//           function createIntern() {
//               inquirer.prompt([
//                   {
//                       type: 'input',
//                       message: "What is your Intern's Name: ?",
//                       name: "name"
//                   },
//                   {
//                       type: 'input',
//                       message: "What is your Intern's ID number? ",
//                       name: "id"
//                   },
//                   {
//                       type: 'input',
//                       message: "What is your Intern's ID Email? ",
//                       name: "email"
//                   },
//                   {
//                       type: 'input',
//                       message: "What is your Intern's ID Office Number? ",
//                       name: "school"
//                   },
                  
//                   ]).then(answers => {
//                       const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
//                       teamArray.push(intern);
//                       createTeam();
//                     });
//           }
  
  
//       }
//   //this is the end of the function. The main function
//   function createHtml() {
//       fs.writeFile('./dist/test.html', (teamArray))
//   }
//   //the actually initialization of the function runApp
//   runApp();
