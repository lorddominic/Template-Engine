// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// function Manager(name, id, email, officeNum) {
//     Employee.call(this, name, id, email, officeNum);
//     this.officeNum = officeNum;
// }
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}
module.exports = Manager;