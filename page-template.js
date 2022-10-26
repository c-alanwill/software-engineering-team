// Create Team
const generateTeam = team => {

	// Create Manager HTML
	const generateManager = manager => {
		return `
		<div class="card mx-1 mb-3">
		<div class="card-header">
			<div class="card-title"> $(manager.getName()}</div>
			<div class="card-subtitle"> $(manager.getRole()}</div>
		</div>
		<div class="card-body">
			<p class="card-text"><strong>ID: </strong>$(manager.getID()}</p>
			<p class="card-text"><strong>Email: </strong> <a href="mailto:$(manager.getEmail()}">$(manager.getEmail()}</a></p>
			<p class="card-text"><strong>Office Number: </strong> ${manager.getOfficeNumber()}</p>
		</div>
	</div>
		`
	};
	// Create Engineer HTML
	const generateEngineer = engineer => {
		return `
		<div class="card mx-1 mb-3">
		<div class="card-header">
			<div class="card-title"> $(engineer.getName()}</div>
			<div class="card-subtitle"> $(engineer.getRole()}</div>
		</div>
		<div class="card-body">
			<p class="card-text"><strong>ID: </strong>$(engineer.getID()}</p>
			<p class="card-text"><strong>Email: </strong> <a href="mailto:$(engineer.getEmail()}">$(engineer.getEmail()}</a></p>
			<p class="card-text"><strong>Office Number: </strong> ${engineer.getGithub()}</p>
		</div>
	</div>
		`
	};
	// Create Intern HTML
	const generateIntern = intern => {
		return `
		<div class="card mx-1 mb-3">
		<div class="card-header">
			<div class="card-title"> $(intern.getName()}</div>
			<div class="card-subtitle"> $(intern.getRole()}</div>
		</div>
		<div class="card-body">
			<p class="card-text"><strong>ID: </strong>$(intern.getID()}</p>
			<p class="card-text"><strong>Email: </strong> <a href="mailto:$(intern.getEmail()}">$(intern.getEmail()}</a></p>
			<p class="card-text"><strong>Office Number: </strong> ${intern.getSchool()}</p>
		</div>
	</div>
		`
	};

	const html = [];

	html.push(team
		.filter(employee => employee.getRole() === "Manager")
		.map(manager => generateManager(manager))
	);
	html.push(team
		.filter(employee => employee.getRole() === "Engineer")
		.map(engineer => generateEngineer(engineer))
		.join ("")
	);
	html.push(team
		.filter(employee => employee.getRole() === "Intern")
		.map(intern => generateIntern(intern))
		.join ("")
	);

	return html.join("");
}

// Export function to generate page
module.exports = team => {

	return `
	<!DOCTYPE html>
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
			${generateTeam(team)}
		</div>
	</div>
</body>
</html>
	`;
};


