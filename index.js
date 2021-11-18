const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./Assets/genReadMe.js');

const questionsEl = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project',
        },
        {
            type: 'input',
            name: 'tableofcontents',
            message: 'Please provide a table of contents for your project', 
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide any installation instructions. Leave blank if none',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is this project used for?',
        },
        {
            type: 'input',
            name: 'license',
            message: 'Please enter your license. Leave blank if not applicable',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who are the contributors of this project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Is there a test included?',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What do I do if I have a question?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
        }
    ]);
};

const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your README has been successfully created!")
        }
    })
};

questionsEl()

.then(answers => {
    return generateReadMe(answers);
})
.then(data => {
    return writeFile(data);
})
.catch(err => {
    console.log(err)
})