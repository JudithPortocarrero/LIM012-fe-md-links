// import { cliFunction } from './cli.js';
const { cliFunction } = require('./cli.js');
const input = [];
for (let i = 3; i < process.argv.length; i += 1) {
  input.push(process.argv[i]);
}
const newInput = input.join(' ');
const path = process.argv[2];
cliFunction(path, newInput).then(res => console.log(res)).catch(error => console.error())