const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pagesHTML = generatePage(userName, github);

// fs.writeFile('index.html', pagesHTML, err => {
//     if (err) throw err;

//     console.log('Protfolio complete! Checkout index.html to see the output!');
// });

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));
