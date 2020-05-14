const { mdLinks } = require('../src/index.js');
describe('validateLinks', () => {
    const input = 'C:\\Users\\PORTOCARRERO\\Desktop\\LIM012-fe-md-links\\carpetaPrueba\\carpeta3\\linksprueba.md';
    const output1 = [{
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
    const output2 = [{
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
    it('Cuando la option en true', (done) => {
        mdLinks(input, { validate: true }).then((resultado) => {
        expect(resultado).toEqual(output2);
        });
        done();
    });
    it('Cuando la option en false', (done) => {
        mdLinks(input, { validate: false }).then((resultado) => {
        expect(resultado).toEqual(output1);
        });
        done();
    });
});