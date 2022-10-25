# Software Engineering Team

## Description

* The repository shows a Node.js command-line application that takes in information about employees on a software engineering team,then generates an HTML webpage that displays summaries for each person.  It has a responsive user interface to be laid out properly on various size screens.

## Description

* From the command line, the user is prompted for information that will generate cards for their team members, including an employee, manager, engineer and intern.  The user is asked questions relating to the team members, including their names, roles and email addresses.  In addition to these questionos which are asked, questions will be asked to retrieve the following: the office number ID for the manager; the github address of the engineer; and the schoool attended by the intern. 


## Code

* The command-line application will dynamically generate the file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4) for Node.js.  

The application uses [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4) for collecting input from the user. 

* The application includes Employee, Manager, Engineer, and Intern classes. The application runs tests for these classes (in the `_tests_` directory).

* The project uses Bootstrap and Fontawesome, with links shown on the head section of the HTML.  There is also linked CSS stylesheet in the head section of the HTML. 

* The HTML code contains a logical structure for the elements within the page.  There are sections within the body showing how the first page looks.

* Notes have been applied to the HTML code, CSS and JavaScript code to identify each section of code. 


## Installation

* The project is currently running on Github server.  It can be viewed at: https://c-alanwill.github.io/coding-quiz/

The code for this project can be found on GitHub at: https://github.com/c-alanwill/coding-quiz

There is an index.html file to view the application.  An image of the initial page of the quiz is contained under the "assets" folder.

## Usage

The following image demonstrates the web application's appearance and functionality:

![Daily Calendar](./Assets/daily-calendar.png)

## Credits

N/A

## License

Please refer to the license in the repo.