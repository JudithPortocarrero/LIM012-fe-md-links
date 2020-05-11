const mdLinksCli = require('./cli.js');
const { cliFunction } = mdLinksCli;

const input = [];
for (let i = 1; i < args.length; i += 1) {
  input.push(args[i]);
}
const newInput = input.join(' ');

const path = process.argv[0];
// const path = process.argv[2];
const options = process.argv[4] === undefined ? process.argv[3] : `${process.argv[3]} ${process.argv[4]}`;
cliFunction(path, options)
cliFunction(path, newInput)
    .then((res) => console.log(res))
    .catch(() => console.error('error en la ruta'));