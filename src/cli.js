const { mdLinks } = require('./index');
const statsFunction = require('./stats');
const cliFunction = (path, options) => {
  if (options === '--validate') {
    return mdLinks(path, { validate: true })
    .then((resultado) => {
      let links = '';
      resultado.forEach((agregar) => {     
        links += `
        href: ${agregar.href}
        text: ${agregar.text}
        thepath: ${agregar.file}
        validate: ${agregar.statusMessage}
        status: ${agregar.status}\n`;
      });
      return links;
    });
  }
  if (options === '--stats') {
    return mdLinks(path, { validate: true })
    .then((resultado) => {
      const retorno = statsFunction.totalUnique(resultado);
      return retorno;
    });
   } 
   if (options === '--stats --validate' || options === '--validate --stats') {
    return mdLinks(path, { validate: true })
    .then((resultado) => {
      const retorno = `${statsFunction.totalUnique(resultado)}\n${statsFunction.broken(resultado)}`;
      return retorno;
    });
  } 
  return mdLinks(path, { validate: false }).then((resultado) => {
    let links = '';
    resultado.forEach((file) => {
      links += `href: ${file.href}\ntext: ${file.text}\nthepath: ${file.thePath}\n\n`;
    });
    return links;
  });
};
module.exports = { cliFunction };