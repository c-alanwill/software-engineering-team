const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const distDir = path.resolve(__dirname, 'dist');
const distPath = path.join(distDir, 'team.html');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');


const render = require('./page-template');
const idArray = [];
const teamMembers = [];

// Create Team Members
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
            return 'Please enter a minimum of one character.';
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
            return 'Please enter a minimum of one character.';
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
            return 'Please enter a minimum of one character.';
          },
        },
        {
          type: 'input',
          name: 'managerNumber',
          message: "What is your team member's number?",
          validate: (answer) => {	
            if (answer != '') {
              return true;
            }
            return 'Please enter a minimum of one character.';
          },
        },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerNumber
      );
      teamMembers.push(manager);
      idArray.push(answers.managerId);
      createTeam();
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
            return 'Please enter a minimum of one character.';
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
            return 'Please enter a minimum of one character.';
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
            return 'Please enter a minimum of one character.';
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
            return 'Please enter a minimum of one character.';
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
            return 'Please enter a minimum of one character.';
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
            return 'Please enter a minimum of one character.';
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
            return 'Please enter a minimum of one character.';
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
            return 'Please enter a minimum of one character.';
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
	
  function buildTeam() {
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir);
    }
    fs.writeFileSync(distPath, render(teamMembers), 'utf-8');
  }

  createManager();

	