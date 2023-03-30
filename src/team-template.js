// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

// function to create team based on input from prompt
const generateTeam = (team) => {
  // create manager card
  const generateManager = (manager) => {
    return `
        <div class="card employee-card">
        <div class="card-header">
          <h2 class="card-title">${manager.getName()}</h2>
          <h3 class="card-title">
            <i class="fas fa-mug-hot mr-2"></i> ${manager.getRole()}</h3>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">
              Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
            </li>
            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
          </ul>
        </div>
      </div>
        `;
  };
  // create engineer cards
  const generateEngineer = (engineer) => {
    return `
    <div class="card employee-card">
    <div class="card-header">
      <h2 class="card-title">${engineer.getName()}</h2>
      <h3 class="card-title">
        <i class="fas fa-glasses mr-2"></i> ${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">
          Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
        </li>
        <li class="list-group-item">
          GitHub:
          <a
            href="https://github.com/${engineer.getGithub()}"
            target="_blank"
            rel="noopener noreferrer"
            >${engineer.getGithub()}</a
          >
        </li>
      </ul>
    </div>
  </div>
    `;
  };

  // create intern cards
  const generateIntern = (intern) => {
    return `
        <div class="card employee-card">
        <div class="card-header">
          <h2 class="card-title">${intern.getName()}</h2>
          <h3 class="card-title">
            <i class="fas fa-user-graduate mr-2"></i> ${intern.getRole()}</h3>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">
              Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
            </li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
          </ul>
        </div>
      </div>
        `;
  };

  // send all the html.... somewhere

  const html = [];

  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );

  return html.join("");
};

module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team Profile</title>
    <!-- bootstrap and font awesome -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="style.css" />
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>

  <body>
    <!-- Header div -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mb-4 p-5 team-heading">
          <h1 class="text-center">Meet the Team!</h1>
        </div>
      </div>
    </div>
    <!-- Target Container for team info -->
    <div class="container">
      <div class="row">
        <div class="team-area justify-content-center col-12 d-flex">
        ${generateTeam(team)}
        
        </div>
      </div>
    </div>
  </body>
</html>

    `;
};
