const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern")

test('creates an intern object', () => {
    const employee = new Intern ('Sara', 434, 'sara@gmail.com', 'Temple University');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toStrictEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));

});