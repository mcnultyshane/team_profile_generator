class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        // return the name of the team member
        return this.name;
    }
    getID() {
        // return the ID number
        return this.id;
    }

    getEmail() {
        // return the email
        return this.email
    }

    getRole() {
        return "Employee";
    }
};

module.exports = Employee;