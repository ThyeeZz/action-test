const fs = require('fs');
const {join} = require('path');



const content = fs.readFileSync(join(process.cwd(), 'README.md'), 'utf8');

const newContent = content + '\n this is test 12'

fs.writeFileSync(join(process.cwd(), 'README.md'), newContent);

console.log('Done');
