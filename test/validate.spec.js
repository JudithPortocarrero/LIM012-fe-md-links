const { validateLinks } = require ('../src/validate.js');
describe('validateLinks', () => {
    const input = 'C:\\Users\\PORTOCARRERO\\Desktop\\LIM012-fe-md-links\\carpetaPrueba\\carpeta3\\linksprueba.md';
    const output = [{
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
    it('verfica los links devolviendo href, text, file, statusMenssage, status', (done) => {
        validateLinks(input).then((resultado) => {
        expect(resultado).toEqual(output);
        done();
        });
    });
});