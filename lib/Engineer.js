const Employee = require("./Employee")
const fs = require('fs');


class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email, 'Engineer')
        this.github = github;
    }
    getGithub(){
        console.log('Github username is: ' + this.github)
    }
}

module.exports = Engineer