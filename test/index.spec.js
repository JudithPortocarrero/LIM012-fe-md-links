// import {
//   isRutaAbsolute, volverAbsolute, 
// } from '../src/index.js';
const path = require('path'); 
const myFunctions = require('../src/index.js');
const {
  isRutaAbsolute, 
  esArchivo, 
  esDirectorio,
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
  it('comprueba si un archivo', () => {
    // const input = __dirname;
    // const output = true;
    expect(esArchivo('C:/Users/PORTOCARRERO/Desktop/LIM012-fe-md-links/carpetaPrueba')).toBe(false);
  });
  it('Es una función que determina cuando una ruta NO es un archivo', () => {
    expect(esArchivo('C:/Users/PORTOCARRERO/Desktop/LIM012-fe-md-links/carpetaPrueba/carpeta3/linksprueba.md')).toBe(true);
  });
});
describe('esDirectorio', () => {
  it('comprueba si una ruta es o no un archivo', () => {
    // const input = __dirname;
    // const output = true;
    expect(esDirectorio('C:/Users/PORTOCARRERO/Desktop/LIM012-fe-md-links/carpetaPrueba')).toBe(true);
  });
  it('Es una función que determina cuando una ruta NO es un directorio', () => {
    expect(esDirectorio('C:/Users/PORTOCARRERO/Desktop/LIM012-fe-md-links/carpetaPrueba/carpeta3/linksprueba.md')).toBe(false);
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
// process.cwd()método devuelve el directorio de trabajo actual del proceso Node.js.
describe('leerDirectorio', () => {
  const output = ["C:\\Users\\PORTOCARRERO\\Desktop\\LIM012-fe-md-links\\carpetaPrueba\\carpeta3\\linksprueba.md"];
  it('Leeel path ingresado y solo guarda en un array los que tengan extension .md', () => {
    expect(leerDirectorio('C:/Users/PORTOCARRERO/Desktop/LIM012-fe-md-links/carpetaPrueba')).toEqual(output);
  });
});
describe('guardarLinks', () => {
  const input = 'C:\\Users\\PORTOCARRERO\\Desktop\\LIM012-fe-md-links\\carpetaPrueba\\carpeta3\\linksprueba.md';
  const output = [{
    href: 'https://github.com/markdown-it/markdown-it',
    text: 'obtener informacion',
    thePath: 'C:\\Users\\PORTOCARRERO\\Desktop\\LIM012-fe-md-links\\carpetaPrueba\\carpeta3\\linksprueba.md',
  },
  {
    href: 'https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1',
    text: 'promesas en js',
    thePath: 'C:\\Users\\PORTOCARRERO\\Desktop\\LIM012-fe-md-links\\carpetaPrueba\\carpeta3\\linksprueba.md',
  },
]
  it('Genera un array de objetos donde devulve los datos de cada link', () => {
    expect(guardarLinks(input)).toStrictEqual(output);
  });
});