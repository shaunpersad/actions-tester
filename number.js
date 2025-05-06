const fs = require('fs');
const prId = Number(fs.readFileSync('./_pr/number'));
const repository = fs.readFileSync('./_pr/repository', 'utf8');
const sha = fs.readFileSync('./_pr/sha', 'utf8');

console.log({ prId, repository, sha })
