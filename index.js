// solo pruebas de funciones
const comprobarPath = () => {
    const fs = require('fs');
    fs.stat('path/to/file', (err) =>{
        if (!err) {
            console.log('El path ingresado si existe')
        } else if (err.code === 'ENOENT') {
            console.log('path no existente');
        }
    });
};
const comprobarRutaAbsoluta = () => {

};
const comprobarCarpeta = () => {

};
const comprobarArchivoMD = () => {

};
const arrayDeLinks = () => {

};
const VerificarValidate = () => {

};