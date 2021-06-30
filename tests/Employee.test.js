const { hasUncaughtExceptionCaptureCallback } = require("process");
const Employee = require("../lib/Employee");

test('create an employee object', () => {
    const employee = new Employee ("Shane", 55, "shane@companyemail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toStrictEqual(expect.any(String));

    
});
