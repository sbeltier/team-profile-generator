const Employee = require("./Employee")
const fs = require('fs');


class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email, 'Engineer')
        this.github = github;
    }
    getGithub(){
        this.github = github
        console.log(this.github)
    }

    addEngineerCard() {      
        const engineerCard =
        `\n<div class="card d-inline-flex shadow" style="width: 18rem;">
            <h5 class="card-header bg-primary text-light shadow-sm" style="--bs-bg-opacity: .75;">${this.name}
            <div class="role">Engineer</div></h5>
            <div class="card-body bg-light" style="--bs-bg-opacity: .1;">
                <ul class="list-group list-group-flush bg-light" style="--bs-bg-opacity: .1;">
                    <li class="list-group-item">ID: ${this.id} </li>
                    <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                    <li class="list-group-item">Github: <a href="https://www.github.com/${this.github}">github.com/${this.github}</li>
                </ul>
            </div>
        </div>`

        let currentIndexFile = fs.readFileSync('./src/index_generated.html');
        fs.appendFile('./src/index_generated.html', engineerCard, (err) => {
        (err) ? console.log('error with appendFile') : console.log('Engineer Card appended')
        }) 
    }
    
}

module.exports = Engineer