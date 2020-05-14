const { totalUnique, broken } = require ('../src/stats.js');
const input = [{
    href: 'https://github.com/markdown-it/markdown-it',
    text: 'obtener informacion',
    file: 'C:\\Users\\PORTOCARRERO\\Desktop\\LIM012-fe-md-links\\carpetaPrueba\\carpeta3\\linksprueba.md',
    statusMessage: 'ok',
    status: 200
  },
  {
    href: 'https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1',
    text: 'promesas en js',
    file: 'C:\\Users\\PORTOCARRERO\\Desktop\\LIM012-fe-md-links\\carpetaPrueba\\carpeta3\\linksprueba.md',
    statusMessage: 'ok',
    status: 200
  },
];
describe('totalUnique', () => {
    it('verfica la cantidad de links totales y los unicos', () => {
        expect(totalUnique(input)).toEqual(
`  Total: 2
  Unique: 2`);
    });
});
describe('broken', () => {
    it('verfica la cantidad de links que no funcionan', () => {
        expect(broken(input)).toEqual(
`  Broken: 0`);
    });
});