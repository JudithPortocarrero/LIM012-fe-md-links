const  fetch  =  require ('node-fetch');
const obtenerLinks = require ('/index.js');
const {guardarLinks} = obtenerLinks;

const validateLinks = (array) => {
    const linkVefiricados = [];
    guardarLinks(array).forEach(() =>{
        
    })
    const linkVefiricados = array.map(file => fetch(file.href)
      .then((res) => {
        if (res.status >= 200 && res.status <= 301) {
          return {
            ...file,
            status: res.status,
            statusText: res.statusText,
          };
        } return {
          ...file,
          status: res.status,
          statusText: 'FALLO',
        };
      })
      .catch(() => ({
        ...file,
        status: 'ERROR',
        statusText: 'FALLO',
      })));
    return Promise.all(linkVefiricados);
  };  
  module.exports = { validateLinks };
  const validate = (ruta) => {
    //const arr = [];
    getLinks(ruta).forEach((el) => {
      const obj = { ...el };
      arr.push(fetch(el.href)
        .then((res) => {
          if (res.status >= 200 && res.status <= 399) {
            obj.status = res.status;
            obj.message = res.statusText;
            return obj;
          }
          obj.status = res.status;
          obj.message = 'fail';
          return obj;
        })
        .catch(() => {
          obj.status = 'this file does not have status';
          obj.message = 'fail';
          return obj;
        }));
    });
    return Promise.all(arr);
  };