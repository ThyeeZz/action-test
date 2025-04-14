const fs = require('fs');
const path = require('path');



const content = fs.readFileSync(join(process.cwd(), 'README.md'), 'utf8');

const newContent = content + '\n this is test 11'

fs.writeFileSync(join(process.cwd(), 'README.md'), newContent);

console.log('Done');
