const Intern = require("../lib/Intern")
const Employee = require("../lib/Employee")

// Test Intern Role
describe("Intern", () => {
    it("should create a new employee named Sarah, whose ID number is 1, email address is s.nicole.beltier@gmail.com, role is Intern and whose school is UCSD", () => {
        const employeeTest = new Intern ('Sarah', '1', 's.nicole.beltier@gmail.com', 'UCSD');

        expect(employeeTest.name).toEqual("Sarah");
        expect(employeeTest.id).toEqual('1')
        expect(employeeTest.email).toEqual('s.nicole.beltier@gmail.com')
        expect(employeeTest.school).toEqual('UCSD')
    })
})

// Test Employee Role
describe("Employee", () => {
    it("should create a new employee named Sarah, whose ID number is 1, email address is s.nicole.beltier@gmail.com, role is Intern", () => {
        const employeeTest2 = new Intern ('Sarah', '1', 's.nicole.beltier@gmail.com', 'Intern');

        expect(employeeTest2.name).toEqual("Sarah");
        expect(employeeTest2.id).toEqual('1')
        expect(employeeTest2.email).toEqual('s.nicole.beltier@gmail.com')
        expect(employeeTest2.role).toEqual('Intern')
    })
})