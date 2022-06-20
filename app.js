const profileDataArgs = process.argv.slice(2, process.argv.length);
const [userName, github] = profileDataArgs;

const fs = require('fs');
const generatePage = require('./src/page-template.js');

fs.writeFile('index.html', generatePage(userName, github), err => {
    if (err) throw err;

    console.log('Protfolio complete! Checkout index.html to see the output!');
});