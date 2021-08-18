const Employee = require("./Employee")
const fs = require('fs');


class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email, 'Intern')
        this.school = school;
    }
    getSchool(){
        this.school = school
        console.log(this.school)
    }

    addInternCard() {      
        const internCard =
        `\n<div class="card d-inline-flex shadow" style="width: 18rem;">
            <h5 class="card-header bg-primary text-light shadow-sm" style="--bs-bg-opacity: .75;">${this.name}
            <div class="role">Intern</div></h5>
            <div class="card-body bg-light" style="--bs-bg-opacity: .1;">
                <ul class="list-group list-group-flush bg-light" style="--bs-bg-opacity: .1;">
                    <li class="list-group-item">ID: ${this.id} </li>
                    <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                    <li class="list-group-item">School: ${this.school}</li>
                </ul>
            </div>
        </div>`


        fs.appendFile('./src/index_generated.html', internCard, (err) => {
        (err) ? console.log('error with appendFile') : console.log('Intern Card appended')
        }) 
    }
}

module.exports = Intern