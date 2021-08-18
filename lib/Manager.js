const Employee = require("./Employee")
const fs = require('fs');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email, 'Manager')
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        this.officeNumber = officeNumber;
        console.log(this.officeNumber)
    }
    addManagerCard() {      
        const managerCard =
        `\n<div class="card d-inline-flex shadow" style="width: 18rem;">
            <h5 class="card-header bg-primary text-light shadow-sm" style="--bs-bg-opacity: .75;">${this.name}
            <div class="role">Manager</div></h5>
            <div class="card-body bg-light" style="--bs-bg-opacity: .1;">
                <ul class="list-group list-group-flush bg-light" style="--bs-bg-opacity: .1;">
                    <li class="list-group-item">ID: ${this.id} </li>
                    <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                    <li class="list-group-item">Office Number: ${this.officeNumber}</li>
                </ul>
            </div>
        </div>`


        fs.appendFile('./src/index_generated.html', managerCard, (err) => {
        (err) ? console.log('error with appendFile') : console.log('Manager Card appended')
        }) 
    }
    
}


module.exports = Manager