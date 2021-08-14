const Employee = require("./Employee")
const fs = require('fs');


class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email, 'Intern')
        this.school = school;
    }
    getSchool(){
        console.log('School name is: ' + this.school)
    }
}

module.exports = Intern