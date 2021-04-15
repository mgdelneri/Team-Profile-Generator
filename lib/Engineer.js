const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;

        getGitHub();
        // inquirer?

        getRole();
        // HTML?
    }
}

// TODO: Enginner extends Employee
// TODO: Adds the following: 
    // TODO: github (GitHub username) -> property
    // TODO: getGitHub() -> method
    // TODO: getRole() -> method that overrides parent to return 'Engineer'