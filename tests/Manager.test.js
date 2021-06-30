const Manager = require("../lib/Manager");

test('create a manager object', () => {
    const employee = new Manager('Dan', 777, 'dan@companyemail.com',110)
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toStrictEqual(expect.any(String));
    expect(employee.officeNum).toEqual(expect.any(Number));
});
