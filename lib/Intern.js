const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;

        getSchool(); 
        // inquirer?

        getRole();
        // HTML?
    }
}

// TODO: Intern extends Employee
// TODO: Adds the following: 
    // TODO: school -> property
    // TODO: getSchool() -> method
    // TODO: getRole() -> method that overrides parent to return 'Intern'
