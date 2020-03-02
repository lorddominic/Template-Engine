// TODO: Write code to define and export the Employee class
// function Employee(name, id, email) {
//     if (typeof name !== "string" || !name.trim().length) {
//         throw new Error("Expected parameter 'name' to be a non-empty string");
//     }
//     if (typeof name !== "number" || isNaN(age) || age < 0) {
//         throw new Error("Expect parameter 'age' to be a non-negative number");
//     }
//     this.name = name;
//     this.id = id;
//     this.email = email;
// }

// Employee.prototype.getName = function() {
//     return this.name;
// }
// Employee.prototype.getId = function() {
//     return this.id;
// }
// Employee.prototype.getEmail = function() {
//     return this.email;
// }
// Employee.prototype.getRole = function() {
//     return 'Employee';
// }
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
        return "Employee";
    }
}
module.exports = Employee;