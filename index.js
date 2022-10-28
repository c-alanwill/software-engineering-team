const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./page-template');

const teamMembers = [];
const idArray = [];

// Inform User
console.log(
		'\nWelcome to the team generator.\nUse `npm run reset` to reset the dist/ folder\n'
);

function init(){
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
          name: 'managerId',
          message: "What is your team manager's id?",
          validate: (answer) => {	
            if (answer != '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: "What is your team manager's email address?",
          validate: (answer) => {	
            if (answer != '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
        {
          type: 'input',
          name: 'managerOfficeNumber',
          message: "What is your team member's office number?",
          validate: (answer) => {	
            if (answer != '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
      );
      teamMembers.push(manager);
      idArray.push(answers.managerId);
      createTeam();
    });
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
    ])
    .then((userChoice) => {
      switch (userChoice.memberChoice) {
        case 'Engineer':
          createEngineer();
          break;
        case 'Intern':
          createIntern ();
          break;
        default:
          buildTeam();
      }
    });
  }
  function createEngineer() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'engineerName',
          message: "What is your engineer's name?",
          validate: (answer) => {	
            if (answer != '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
        {
          type: 'input',
          name: 'engineerId',
          message: "What is your engineer's id?",
          validate: (answer) => {	
            if (answer != '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
        {
          type: 'input',
          name: 'engineerEmail',
          message: "What is your engineer's email address?",
          validate: (answer) => {	
            if (answer != '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
        {
          type: 'input',
          name: 'engineerGithub',
          message: "What is your engineer's Github username?",
          validate: (answer) => {	
            if (answer != '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      teamMembers.push(engineer);
      idArray.push(answers.engineerId);
      createTeam();
    });
  }
	// function createTeam() {
	// 	inquirer
	// 	.prompt([
	// 		{
	// 			type: 'list',
	// 			name: 'memberChoice',
	// 			message: "Which type of team member would you like to add?",
	// 			choices: [
	// 				'Intern',
	// 				"I don't want to add any more team members.",
	// 			],
	// 			},
  //   ])
  //   .then((userChoice) => {
  //     switch (userChoice.memberChoice) {
  //       case 'Intern':
  //         createIntern ();
  //         break;
  //       default:
  //         buildTeam();
  //     }
  //   });
  // }
  function createIntern() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'internName',
          message: "What is your intern's name?",
          validate: (answer) => {	
            if (answer != '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
        {
          type: 'input',
          name: 'internId',
          message: "What is your intern's id?",
          validate: (answer) => {	
            if (answer != '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
        {
          type: 'input',
          name: 'internEmail',
          message: "What is your intern's email address?",
          validate: (answer) => {	
            if (answer != '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
        {
          type: 'input',
          name: 'internSchool',
          message: "What is your intern's school?",
          validate: (answer) => {	
            if (answer != '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      teamMembers.push(intern);
      idArray.push(answers.internId);
      buildTeam();
      // CAN I HAVE buildTeam HERE ON LINE 249?  IF I ASK THE USER THE QUESTION AGAIN, HOW DO I BUILD TEAM?  NOT SURE ON THE THEN STATEMENT ON LINE 265.
    });
  }
	// function createTeam() {
	// 	inquirer
	// 	.prompt([
	// 		{
	// 			type: 'list',
	// 			name: 'memberChoice',
	// 			message: "Which type of team member would you like to add?",
	// 			choices: [
	// 				"I don't want to add any more team members.",
	// 			],
	// 			},
  //   ])
  //   .then((userChoice) => {
  //     switch (userChoice.memberChoice) {
  //       case 'Intern':
  //         addIntern ();
  //         break;
  //       default:
  //         buildTeam();
  //     }
  //   });
  // }
  
  function buildTeam() {
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, render(teamMembers), 'utf-8');
  }

  createManager();
}

	init();