const { guardarLinks} = require('./utilities.js');
const { validateLinks } = require('./validate.js');
const mdLinks = (ruta, options) => { 
  return promesa = new Promise((resolve) => {
    if ( options.validate === true) {
      resolve(validateLinks(ruta));

    } else {
      resolve(guardarLinks(ruta));
    }
  });
}
module.exports = {mdLinks};