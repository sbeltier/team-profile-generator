const inquirer = require('inquirer');
const fs = require('fs');
const { prompt } = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Read in template file contents
let fileContents = fs.readFileSync('./src/index_template.html');
// Write new generated html with template header contents
fs.writeFileSync('./src/index_generated.html', fileContents);

// Questions to ask all employees
const generalQuestions = [
    {
        type: 'input',
        message: "What is this employee's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is this employee's ID number?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is this employee's email?",
        name: 'email'
    },
    {
        type: 'list',
        message: "What is this employee's role?",
        name: 'role',
        choices: [
            'Manager',
            'Engineer',
            'Intern'
        ]
    }
]

// Questions to ask for a Manager
const managerQuestion = [
    {
        type: 'input',
        message: "What is this manager's office number?",
        name: 'officeNumber'
    },
    {
        type: 'list',
        message: "Do want to add more members to your team?",
        name: 'continue',
        choices: [
            'Yes',
            'No'
        ]
    }
]

// Questions to ask for an Engineer
const engineerQuestion = [
    {
        type: 'input',
        message: "What is this engineer's Github username?",
        name: 'github'
    },
    {
        type: 'list',
        message: "Do want to add more members to your team?",
        name: 'continue',
        choices: [
            'Yes',
            'No'
        ]
    }
]


// Questions to ask for an Intern
const internQuestion = [
    {
        type: 'input',
        message: 'What school does this intern attend?',
        name: 'school'
    },
    {
        type: 'list',
        message: "Do want to add more members to your team?",
        name: 'continue',
        choices: [
            'Yes',
            'No'
        ]
    }
]

function addTeam() {
    inquirer
        // Ask all employee questions
        .prompt(generalQuestions)
        // Determine the role
        .then((response) => {
            // Ask Manager question
            if (response.role == 'Manager') {
                prompt(managerQuestion)
                    .then((managerResponse) => {
                        const newEmployee = new Manager(response.name, response.id, response.email, managerResponse.officeNumber)
                        console.log(newEmployee)
                        // Restart function if there are more employees to add
                        if (managerResponse.continue == 'No') {
                            // Add last employee
                            newEmployee.addManagerCard(this.name, this.id, this.email, this.officeNumber);
                            // Close HTML Code
                            fs.appendFile('./src/index_generated.html', `</div>\n</body>\n</html>`, (err) => {
                                (err) ? console.log('error with close HTML code') : console.log('HTML code closed')
                                })
                        }
                        // Add Employee and Restart Inquirer                        
                        else {
                            newEmployee.addManagerCard(this.name, this.id, this.email, this.officeNumber);
                            addTeam();
                        }
                    })
            }
            // Ask Engineer question            
            if (response.role == 'Engineer') {
                prompt(engineerQuestion)
                    .then((engineerResponse) => {
                        const newEmployee = new Engineer(response.name, response.id, response.email, engineerResponse.github)
                        console.log(newEmployee)
                        if (engineerResponse.continue == 'No') {
                            // Add last employee
                            newEmployee.addEngineerCard(this.name, this.id, this.email, this.github);
                            // Close HTML Code
                            fs.appendFile('./src/index_generated.html', `</div>\n</body>\n</html>`, (err) => {
                                (err) ? console.log('error with close HTML code') : console.log('HTML code closed')
                                })
                        }
                        // Add Employee and Restart Inquirer                        
                        else {
                            newEmployee.addEngineerCard(this.name, this.id, this.email, this.github);                            
                            addTeam();
                        }
                    })
            }
            // Ask Intern question
            if (response.role == 'Intern') {
                prompt(internQuestion)
                    .then((internResponse) => {
                        const newEmployee = new Intern(response.name, response.id, response.email, internResponse.school)
                        console.log(newEmployee)                    
                        if (internResponse.continue == 'No') {
                            // Add last employee
                            newEmployee.addInternCard(this.name, this.id, this.email, this.school);
                            // Close HTML Code
                            fs.appendFile('./src/index_generated.html', `</div>\n</body>\n</html>`, (err) => {
                                (err) ? console.log('error with close HTML code') : console.log('HTML code closed')
                                })
                        }
                        // Add Employee and Restart Inquirer                        
                        else {
                            newEmployee.addInternCard(this.name, this.id, this.email, this.school);
                            addTeam();
                        }
                    })
            }
        })
}
addTeam();