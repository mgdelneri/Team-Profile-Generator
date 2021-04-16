const Employee = require('./Employee');

// Manager subclass function inheriting from Employee parent class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

        getOfficeNumber() {
            return this.officeNumber;
        }

        getRole() {
            return 'Manager';
        }
}

module.exports = Manager;

// TODO: Manager extends Employee
// TODO: Adds the following: 
    // TODO: office number -> property
    // TODO: getRole() -> method that overrides parent to return 'Manager'