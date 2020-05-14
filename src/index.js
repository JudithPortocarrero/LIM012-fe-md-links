// promesas y callback
const { guardarLinks} = require('./utilities.js');
const { validateLinks } = require('./validate.js');
const mdLinks = (ruta, options) => { //ruta = 'C:/Users/PORTOCARRERO/Desktop/LIM012-fe-md-links/carpetaPrueba & options = {validate: true}
  return promesa = new Promise((resolve) => {
    if ( options.validate === true) {
      resolve(validateLinks(ruta));

    } else {
      resolve(guardarLinks(ruta));
    }
  });
}
module.exports = {mdLinks};
// Configuración de npm scripts.
// Testeo asíncrono.	
// Uso de librerias de Mock.	
// Uso de Mocks manuales.	
// Testeo para múltiples Sistemas Operativos.
// Colaboración en Github (branches | pull requests | |tags).