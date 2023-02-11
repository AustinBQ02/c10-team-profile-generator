// In addition to Employee's properties and methods,
const Employee = require("./Employee");

// Engineer will also have:
class Engineer extends Employee {
  // github // GitHub username
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  // getGithub()
  getGithub() {
    return this.github;
  }

  // getRole()
  getRole() {
    // Overridden to return 'Engineer'
    return "Engineer";
  }
}

module.exports = Engineer;
