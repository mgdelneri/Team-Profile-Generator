const Employee = require('./Employee');

// Intern subclass function inheriting from Employee parent class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

        getSchool() {
            return this.school;
        }

        getRole() {
            return 'Intern';
        }
}

module.exports = Intern;

// TODO: Intern extends Employee
// TODO: Adds the following: 
    // TODO: school -> property
    // TODO: getSchool() -> method
    // TODO: getRole() -> method that overrides parent to return 'Intern'
