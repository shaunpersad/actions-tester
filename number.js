const fs = require('fs');
const prId = Number(fs.readFileSync('./_pr/number'));
const repository = fs.readFileSync('./_pr/repository');
const sha = fs.readFileSync('./_pr/sha');

console.log({ prId, repository, sha })
