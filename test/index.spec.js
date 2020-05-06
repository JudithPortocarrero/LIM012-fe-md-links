// import {
//   isRutaAbsolute, volverAbsolute, 
// } from '../src/index.js';
const path = require('path'); 
const myFunctions = require('../src/index.js');
const {
  isRutaAbsolute, 
  // volverAbsolute, 
  // existPath,
  esArchivo, 
  archivoMD, 
  leerDirectorio,
  guardarLinks,
} = myFunctions;

describe('isRtaAbsolute', () => {
  it('Comprobar si es una ruta es absoluta', () => {
    expect(isRutaAbsolute('/LIM012-fe-md-links/')).toBe('/LIM012-fe-md-links/');
  });
  it('Convierte una ruta relativa en absoluta', () => {
        expect(isRutaAbsolute('../src')).toBe(path.resolve('../src'));
      });
});
describe('esArchivo', () => {
  it('comprueba si una ruta es o no un archivo', () => {
    // const input = __dirname;
    // const output = true;
    expect(esArchivo('C:\Users\PORTOCARRERO\Desktop\LIM012-fe-md-links\carpetaPrueba')).toBe(false);
  });
  it('Es una función que determina cuando una ruta NO es un directorio', () => {
    expect(esArchivo('..\carpetaPrueba\carpeta3\linksprueba.md')).toBe(true);
  });
});
describe('archivoMD', () => {
  it('Determina si el archivo tiene formato .md', () => {
    expect(archivoMD('linksprueba.md')).toBe(true);
  });
  it('Determina si el archivo NO tiene formato .md', () => {
    expect(archivoMD('index.js')).toBe(false);
  });
});
describe('leerDirectorio', () => {
  it('', () => {
    expect(leerDirectorio('C:\Users\PORTOCARRERO\Desktop\LIM012-fe-md-links\carpetaPrueba')).toEqual('../carpetaPrueba/carpeta3/linksprueba.md');
  });
});
describe('guardarLinks', () => {
  const input = path.resolve('../carpetaPrueba');
  const output = [{
    href: 'https://github.com/markdown-it/markdown-it',
    text: 'obtener informacion',
    file: path.resolve('../carpetaPrueba/carpeta3/linksprueba.md'),
  },
  {
    href: 'https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1',
    text: 'promesas en js',
    file: path.resolve('../carpetaPrueba/carpeta3/linksprueba.md'),
  }]
  it('', () => {
    expect(guardarLinks(input)).toEqual(output);
  });
});