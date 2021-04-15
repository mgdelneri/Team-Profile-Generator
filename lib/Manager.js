const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;

        getRole();
    }
}

// TODO: Manager extends Employee
// TODO: Adds the following: 
    // TODO: office number -> property
    // TODO: getRole() -> method that overrides parent to return 'Manager'