const Engineer = require("../lib/Engineer")

test ("get the employee's role", () => {
    const employee = new Engineer ("Faith", 497, "faith@companyemail.com", 'faithGit')

    expect(employee.getRole()).toEqual("Engineer");
});