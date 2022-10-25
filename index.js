const Manager = require('./lib/Manager');
const Engineer = require('.lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(_dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('page-template.js');
const { create } = require('domain');

const teamMembers = [];
const idArray = [];

// Inform User
console.log(
		'\nWelcome to the team generator.\nUse `npm run reset` to reset the dist/ folder\n'
);

function appMenu(){
	function createManager() {
inquirer
  .prompt([
    {
      type: 'input',
      name: 'managerName',
      message: "What is your team manager's name?",
			validate: (answer) => {	
				if (answer != '') {
					return true;
				}
				return 'Please enter at least one character.';
			},
    },
    {
      type: 'input',
      name: 'id',
      message: "What is your team manager's id?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is your team manager's email address?",
    },
    {
      type: 'input',
      name: 'num',
      message: "What is your team member's office number?",
    },
    {
      type: 'input',
      name: 'github',
      message: "What is your team member's GitHub Username?",
    },
    {
      type: 'input',
      name: 'school',
      message: 'What school did your team member attend?',
    }
	
	function createTeam() {
		inquirer
		.prompt([
			{
				type: 'list',
				name: 'memberChoice',
				message: "Which type of team member would you like to add?",
				choices: [
					'Engineer',
					'Intern',
					"I don't want to add any more team members.",
				],
				},
			},
  function addEngineer() {
    inquirer
    .prompt([
      {
        
      }
    ])
  }

  function addIntern() {

  }

  function buildTeam() {
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, renber(teamMembers), 'utf-8');
  }

  createManager();
	}

	appMenu();


  // ])
  // .then((answers) => {
  //   const htmlPageContent = generateHTML(answers);

  //   fs.writeFile('./dist/team.html', htmlPageContent, (err) =>
  //     err ? console.log(err) : console.log('Successfully created index.html!')
  //   );
  // });