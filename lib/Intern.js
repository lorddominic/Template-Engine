// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// function Intern(name, id, email, school) {
//     Employee.call(this, name, id, email, school);
//     this.school = school;
// }
class Intern extends Employee {
    constructor(name, id, email, school) {
        //super call the parent constructor
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}
module.exports = Intern;