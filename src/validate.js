const  fetch  =  require ('node-fetch');
const prueba = require ('./utilities.js');

const validateLinks = (arrayPath) => {
  return Promise.all(
  prueba.guardarLinks(arrayPath).map((element) => {
    return fetch(element.href) 
    .then((res) => {
      let mensaje;
      const newobject = {
        href: element.href,
        text: element.text,
        file: element.thePath,
      };
      // if (res.status >= 200 && res.status <= 399) {
      //   mensaje = 'ok';
      // } else{
      //   mensaje = 'fail';
      // }
      (res.status >= 200 && res.status <= 399) ? mensaje = 'ok' : mensaje = 'fail';
      newobject.statusMessage = mensaje;
      newobject.status = res.status;
      return newobject;
    })
}));;
};

module.exports = { validateLinks };
