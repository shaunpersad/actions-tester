const fs = require('fs');
const prId = Number(fs.readFileSync('./NR'));

console.log({ prId })
