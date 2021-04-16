// Parent class constructor function
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

        getName() {
            return this.name;
        }

        getId() {
            return this.id;
        }

        getEmail() {
            return this.email;
        }

        getRole() {
            return 'Employee';
        }
}

module.exports = Employee
// TODO: The Employee parent class must have the following properties and methods: 
    // TODO: name -> property
    // TODO: id -> property
    // TODO: email -> property
    // TODO: getName() -> method
    // TODO: getId() -> method
    // TODO: getEmail() -> method
    // TODO: getRole() -> method that returns 'Employee'