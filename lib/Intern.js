// In addition to Employee's properties and methods,
const Employee = require("./Employee");

// Intern will also have:
class Intern extends Employee {
  // school
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  // getSchool()
  getSchool() {
    return this.school;
  }

  // getRole()
  getRole() {
    // Overridden to return 'Intern'
    return "Intern";
  }
}

module.exports = Intern;
