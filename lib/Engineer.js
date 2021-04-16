const Employee = require('./Employee');

// Engineer subclass function inheriting from Employee parent class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

        getGitHub() {
            return this.github;
        }

        getRole() {
            return 'Engineer';
        }
}

module.exports = Engineer;

// TODO: Enginner extends Employee
// TODO: Adds the following: 
    // TODO: github (GitHub username) -> property
    // TODO: getGitHub() -> method
    // TODO: getRole() -> method that overrides parent to return 'Engineer'