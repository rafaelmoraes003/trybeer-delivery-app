const fs = require('fs');

const jwtKey = fs.readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' });

module.exports = { jwtKey };