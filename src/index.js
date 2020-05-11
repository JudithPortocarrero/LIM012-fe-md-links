// promesas y callback
const utilities = require('./utilities.js');
const validate = require('./validate.js');
const mdLinks = (path, options) => {
  return promesa = new Promise((resolve) => {
    if ( options === true) {
      resolve (validate.validateLinks(path));
    } else {
      resolve (utilities.guardarLinks(path));
    }
  });
}
module.exports = mdLinks;