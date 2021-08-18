const Manager = require("../lib/Manager")
const Employee = require("../lib/Employee")

// Test Manager Role
describe("Manager", () => {
    it("should create a new employee named Sarah, whose ID number is 1, email address is s.nicole.beltier@gmail.com, role is Manager and whose office number is 17", () => {
        const employeeTest = new Manager ('Sarah', '1', 's.nicole.beltier@gmail.com', '17');

        expect(employeeTest.name).toEqual("Sarah");
        expect(employeeTest.id).toEqual('1')
        expect(employeeTest.email).toEqual('s.nicole.beltier@gmail.com')
        expect(employeeTest.officeNumber).toEqual('17')
    })
})

// Test Employee Role
describe("Employee", () => {
    it("should create a new employee named Sarah, whose ID number is 1, email address is s.nicole.beltier@gmail.com, role is Manager", () => {
        const employeeTest2 = new Employee ('Sarah', '1', 's.nicole.beltier@gmail.com', 'Manager');

        expect(employeeTest2.name).toEqual("Sarah");
        expect(employeeTest2.id).toEqual('1')
        expect(employeeTest2.email).toEqual('s.nicole.beltier@gmail.com')
        expect(employeeTest2.role).toEqual('Manager')
    })
})