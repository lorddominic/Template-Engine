// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// function Manager(name, id, email, officeNum) {
//     Employee.call(this, name, id, email, officeNum);
//     this.officeNum = officeNum;
// }
class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }
    getRole() {
        return "Manager";
    }
    getofficeNum() {
        return this.officeNum;
    }
}
module.exports = Manager;