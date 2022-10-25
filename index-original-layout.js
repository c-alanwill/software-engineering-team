const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ name, role, id, email, num, github, school }) =>
`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link
	rel="stylesheet"
	href=	"https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css">
<link
	rel="stylesheet"
	href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
	integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
	crossorigin="anonymous"
/>
	<link rel="stylesheet" href="reset.css" />
	<link rel="stylesheet" href="style.css" />
	<title>Software Engineering Team</title>
</head>
<body>
<!-- Navbar -->
<nav class="navbar navbar-dark bg-primary">My Team</nav>
	<br>
	<br>
	<!-- Cards -->
	<div class="card-group">
		<div class="card mx-1 mb-3">
			<div class="card-header">
				<div class="card-title">${name}</div>
				<div class="card-subtitle">${role}</div>
			</div>
			<div class="card-body">
				<p class="card-text"><strong>ID: </strong>${id}</p>
				<p class="card-text"><strong>Email: </strong>${email}</p>
			</div>
		</div>
		<div class="card mx-1 mb-3">
			<div class="card-header">
				<div class="card-title">${name}</div>
				<div class="card-subtitle">${role}</div>
			</div>
			<div class="card-body">
				<p class="card-text"><strong>ID: </strong>${id}</p>
				<p class="card-text"><strong>Email: </strong>${email}</p>
				<p class="card-text"><strong>Num: </strong>${num}</p>
			</div>
		</div>
		<div class="card mx-1 mb-3">
			<div class="card-header">
				<div class="card-title">${name}</div>
				<div class="card-subtitle">${role}</div>
			</div>
			<div class="card-body">
				<p class="card-text"><strong>ID: </strong>${id}</p>
				<p class="card-text"><strong>Email: </strong>${email}</p>
				<p class="card-text"><strong>Num: </strong>${num}</p>
				<p class="card-text"><strong>Github: </strong>${github}</p>
			</div>
		</div>
		<div class="card mx-1 mb-3">
			<div class="card-header">
				<div class="card-title">${name}</div>
				<div class="card-subtitle">${role}</div>
			</div>
			<div class="card-body">
				<p class="card-text"><strong>ID: </strong>${id}</p>
				<p class="card-text"><strong>Email: </strong>${email}</p>
				<p class="card-text"><strong>Num: </strong>${num}</p>
				<p class="card-text"><strong>Github: </strong>${github}</p>
				<p class="card-text"><strong>School: </strong>${school}</p>
			</div>
		</div>
	</div>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
		{
      type: 'input',
      name: 'role',
      message: 'What is your role?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'num',
      message: 'What is your phone number?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub Username?',
    },
    {
      type: 'input',
      name: 'school',
      message: 'What school did you attend?',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
