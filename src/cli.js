const indexFunction = require('./index');
const statsFunctions = require('./stats');
const { mdLinks } = indexFunction;
const { totalLinks, uniqueLinks, brokenLinks } = statsFunctions;

const cliFunction = (path, options) => {
  if (options === '--validate') {
    return mdLinks(path, { validate: true }).
    then((resultado) => {
      let links = '';
      resultado.forEach((file) => {
        links += `${file.href} ${file.text} ${file.file} ${file.validate} ${file.status} \n`;
      });
      return links;
    });
  }
  if (options === '--stats') {
    return mdLinks(path, { validate: true }).then((resultado) => {
      const statsValue = `Total: ${totalLinks(resultado)}\nUnique: ${uniqueLinks(resultado)}`;
      return statsValue;
    });
  } if (options === '--stats --validate' || options === '--validate --stats') {
    return mdLinks(path, { validate: true }).then((resultado) => {
      const validStats = `Total: ${totalLinks(resultado)}\nUnique: ${uniqueLinks(resultado)}\nBroken: ${brokenLinks(resultado)}`;
      return validStats;
    });
  }
  return mdLinks(path, { validate: false }).then((resultado) => {
    let links = '';
    resultado.forEach((file) => {
      links += `${file.href} ${file.text} ${file.file}\n`;
    });
    return links;
  });
};
module.exports = { cliFunction };
// instalar node $ npm install node-fetch --save
// instalar marked npm install -g marked
