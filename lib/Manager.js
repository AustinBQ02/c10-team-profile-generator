// In addition to Employee's properties and methods,
const Employee = require("./Employee");
// Manager will also have:
class Manager extends Employee {
  // officeNumber
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  // getRole()
  getRole() {
    // Overridden to return 'Manager'
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}
module.exports = Manager;
