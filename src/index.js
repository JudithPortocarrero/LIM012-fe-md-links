// solo pruebas de funciones
// const instalarLibreria = require('npm install --global <github-user>/md-links');
const fs = require('fs');
const path = require('path'); 
const marked = require('marked');

const isRutaAbsolute = (ruta) => path.isAbsolute(ruta);// El path.isAbsolute()método determina si pathes una ruta absoluta.
const volverAbsolute = (ruta) => path.resolve(ruta);
const existPath = (ruta) => {
  fs.statSync(ruta, (err) =>{
    if (!err) {
      if (isRutaAbsolute(ruta) == false) {
        return volverAbsolute(ruta);
       }
      return ruta;
    } else if (err.code === 'ENOENT') {
      console.log('path no existente');
    }
  });
};// si es un archivo stats.isFile()
function filePathExists(filePath) {
  return new Promise((resolve, reject) => {
    fs.stat(filePath, (err, stats) => {
      if (err && err.code === 'ENOENT') {
        return resolve(false);
      } else if (err) {
        return reject(err);
      }
      if (stats.isFile() || stats.isDirectory()) {
        return resolve(true);
      }
    });
  });
}
const esArchivo = (ruta) => fs.statSync(ruta).isFile();// Un fs.Stats objeto proporciona información sobre un archivo.
const archivoMD = (ruta) => path.extname(ruta) === '.md';// Returns: '.md' Obtenga la extensión de una ruta de archivo
const leerDirectorio = (ruta) => {
    const volverAbsolutoPath = volverAbsolute(ruta);
    let arrayMd = [];
    if (esArchivo(volverAbsolutoPath)) {
      if (archivoMD(volverAbsolutoPath)) {
        arrayMd.push(volverAbsolutoPath);
      }
    } else {
      const pathFiles = fs.readdirSync(volverAbsolutoPath);
      pathFiles.forEach((file) => {
        arrayMd = arrayMd.concat(leerDirectorio(path.join(volverAbsolutoPath, file)));
      });
    }
    return arrayMd;
  };
const guardarLinks = (arrayPath) => {
    const arrayRutas = leerDirectorio(arrayPath);
    const arrayLinks = [];
    arrayRutas.forEach((thePath) => {
      const leerFiles = fs.readFileSync(thePath, 'utf8');
      const renderer = new marked.Renderer();
      renderer.link = (href, title, text) => {
        arrayLinks.push({
          href,
          text,
          thePath,
        });
      };
      marked(leerFiles, { renderer });
    });
    return arrayLinks;
  };
module.exports = {
  isRutaAbsolute, 
  volverAbsolute, 
  existPath,
  esArchivo, 
  archivoMD, 
  leerDirectorio,
  guardarLinks,
};
// path.parse()método devuelve un objeto cuyas propiedades representan elementos significativos de path. Los separadores de directorio finales se ignoran, vea path.sep.
// path.parse('C:\\path\\dir\\file.txt');
// Returns:
// { root: 'C:\\',
//   dir: 'C:\\path\\dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }
//
// "node-fetch": "^2.6.0"