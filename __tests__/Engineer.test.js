const Engineer = require("../lib/Engineer")
const Employee = require("../lib/Employee")

// Test Engineer Class
describe("Engineer", () => {
    it("should create a new employee named Sarah, whose ID number is 1, email address is s.nicole.beltier@gmail.com, role is engineer and has the github username sbeltier", () => {
        const employeeTest = new Engineer ('Sarah', '1', 's.nicole.beltier@gmail.com', 'sbeltier');

        expect(employeeTest.name).toEqual("Sarah");
        expect(employeeTest.id).toEqual('1')
        expect(employeeTest.email).toEqual('s.nicole.beltier@gmail.com')
        expect(employeeTest.github).toEqual('sbeltier')
    })
})

// Test Employee Role
describe("Employee", () => {
    it("should create a new employee named Sarah, whose ID number is 1, email address is s.nicole.beltier@gmail.com, role is engineer", () => {
        const employeeTest2 = new Employee ('Sarah', '1', 's.nicole.beltier@gmail.com', 'Engineer');

        expect(employeeTest2.name).toEqual("Sarah");
        expect(employeeTest2.id).toEqual('1')
        expect(employeeTest2.email).toEqual('s.nicole.beltier@gmail.com')
        expect(employeeTest2.role).toEqual('Engineer')
    })
})