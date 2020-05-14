// import { mdLinks } from './index.js';
// import { totalLinks, uniqueLinks, brokenLinks } from './stats.js';
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
// instalar node $ npm install node-fetch --save
// instalar marked npm install -g marked

// import { mdLinks } from './index.js';
// import { totalLinks, uniqueLinks, brokenLinks } from './stats.js';
// const { mdLinks } = require('./index');
// const { totalLinks, uniqueLinks, brokenLinks } = require('./stats');
// const cliFunction = async (path, options) => {
//   if (options === '--validate') {
//     const resultado = await mdLinks(path, { validate: true });
//     let links = '';
//     resultado.forEach((agregar) => {
//       links += `href: ${agregar.href}\ntext: ${agregar.text}\nthepath: ${agregar.thePath}\nvalidate: ${agregar.validate}\nstatus: ${agregar.status}\n\n`;
//     });
//     return links;
//   }
//   else if (options === '--stats') {
//     const resultado_1 = await mdLinks(path, { validate: true });
//     const statsValue = `Total: ${totalLinks(resultado_1)}\nUnique: ${uniqueLinks(resultado_1)}`;
//     return statsValue;
//   } else if (options === '--stats --validate' || options === '--validate --stats') {
//     const resultado_2 = await mdLinks(path, { validate: true });
//     const validStats = `Total: ${totalLinks(resultado_2)}\nUnique: ${uniqueLinks(resultado_2)}\nBroken: ${brokenLinks(resultado_2)}`;
//     return validStats;
//   } 
//   const resultado_3 = await mdLinks(path, { validate: false });
//   let links_1 = '';
//   resultado_3.forEach((file) => {
//     links_1 += `href: ${file.href}\ntext: ${file.text}\nthepath: ${file.thePath}\n\n`;
//   });
//   return links_1;
// };
// module.exports = { cliFunction };
