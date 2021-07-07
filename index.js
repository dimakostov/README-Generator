const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create a function to initialize app
const init = data => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your Project title?',
            validate: input => {
                if(input){
                    return true;
                }else{
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub Username?',
            validate: input => {
                if(input){
                    return true;
                }else{
                    console.log('Please enter your GitHub Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: input => {
                if(input){
                    return true;
                }else{
                    console.log('Please enter your Email Address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?',
            validate: input => {
                if(input){
                    return true;
                }else{
                    console.log('Please provide a Description!');
                    return false;
                }
            }
          },
          {
            type: 'input',
            name: 'installation',
            message: 'Please enter a installtion description',
            validate: input => {
                if(input){
                    return true;
                }else{
                    console.log('Please enter your description for installation!');
                    return false;
                }
            }
          },
          {
            type: 'input',
            name: 'usage',
            message: 'Describe the uses of your project',
            validate: input => {
                if(input){
                    return true;
                }else{
                    console.log('Please enter your uses!');
                    return false;
                }
            }
        },
            {
                type: 'input',
                name: 'credits',
                message: 'Please provide the names of everyone who worked on the project',
                validate: input => {
                    if(input){
                        return true;
                    }else{
                        console.log('Please enter everyones names!');
                        return false;
                    }
                }
            }
        
          ])
}

// Function call to initialize app
init()
    .then(data => {
        const generate = generateMarkdown(data);

        fs.writeFile('./README.md', generate, err=> {
            if(err) throw err;

            console.log("README complete! Check out the file to see the output!");
        })
    });
