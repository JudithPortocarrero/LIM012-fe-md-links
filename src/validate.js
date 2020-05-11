const  fetch  =  require ('node-fetch');
const obtenerLinks = require ('/index.js');
const {guardarLinks} = obtenerLinks;

const validateLinks = (array) => {
    const linkVefiricados = [];
    let validate;
    guardarLinks(array).forEach((file) => {
      //const obj = {...file};
      linkVefiricados.push(
        //file.href busca en el array ese objeto
        fetch(file.href)
          .then((resultado) => {
            if (resultado.status >= 200 && resultado.status <= 399) {
              validate = 'ok';
            } else {
              validate = 'fail';
            }
            const agregar= {
              href: file.href,
              text: file.text,
              file: file.thePath, 
              validate: file.validate,
              status:  file.status,
            }
            return agregar;      
          })
          .catch(() => {
            const agregar= {
              href: file.href,
              text: file.text,
              file: file.thePath, 
              validate: 'fail',
              status:  'statusError',
            }
            return agregar;
          }));
    });
    return Promise.all(linkVefiricados);
}; 
module.exports = { validateLinks };
