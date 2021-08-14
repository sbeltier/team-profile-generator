const inquirer = require('inquirer');
const fs = require('fs');
const { prompt } = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


// Questions to ask all employees
const generalQuestions = [
    {
        type: 'input',
        message: "What is this employee's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is this employee's ID number?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is this employee's email?",
        name: 'email',
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
    },
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
        name: 'github',
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
                            // writeFile Function
                            newEmployee.addManagerCard(this.name, this.id, this.email, this.officeNumber);
                            console.log('No more members to add')
                        }
                        else {
                            newEmployee.addManagerCard(name, id, email, officeNumber);
                            
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
                            // writeFile Function
                            console.log('No more members to add')
                        }
                        else {
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
                            // writeFile Function
                            console.log('No more members to add')

                        }
                        else {
                            addTeam();
                        }
                    })
            }
        })
}
addTeam();