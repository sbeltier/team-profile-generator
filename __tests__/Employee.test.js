const Employee = require("../lib/Employee")

describe("Employee", () => {
    it("should create a new employee named Sarah, whose ID number is 1, email address is s.nicole.beltier@gmail.com and role is employee", () => {
        const employeeTest = new Employee ('Sarah', '1', 's.nicole.beltier@gmail.com', 'Employee');

        expect(employeeTest.name).toEqual("Sarah");
        expect(employeeTest.id).toEqual('1')
        expect(employeeTest.email).toEqual('s.nicole.beltier@gmail.com')
        expect(employeeTest.role).toEqual('Employee')
    })
})