const { cliFunction } = require('../src/cli.js');
describe('cliFunction', () => {
    const input = 'C:\\Users\\PORTOCARRERO\\Desktop\\LIM012-fe-md-links\\carpetaPrueba\\carpeta3\\linksprueba.md';
    const output1 = `
        href: https://github.com/markdown-it/markdown-it
        text: obtener informacion
        thepath: C:\\Users\\PORTOCARRERO\\Desktop\\LIM012-fe-md-links\\carpetaPrueba\\carpeta3\\linksprueba.md
        validate: ok
        status: 200

        href: https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1
        text: promesas en js
        thepath: C:\\Users\\PORTOCARRERO\\Desktop\\LIM012-fe-md-links\\carpetaPrueba\\carpeta3\\linksprueba.md
        validate: ok
        status: 200
`;
    const output2 =
`  Total: 2
  Unique: 2`;
    const output3 = 
`  Total: 2
  Unique: 2
  Broken: 0`;
    const output4 = 
`href: https://github.com/markdown-it/markdown-it
text: obtener informacion
thepath: C:\\Users\\PORTOCARRERO\\Desktop\\LIM012-fe-md-links\\carpetaPrueba\\carpeta3\\linksprueba.md

href: https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1
text: promesas en js
thepath: C:\\Users\\PORTOCARRERO\\Desktop\\LIM012-fe-md-links\\carpetaPrueba\\carpeta3\\linksprueba.md

`;
    
    it('Cuando la option es --valida', (done) => {
        cliFunction(input, '--validate').then((resultado) => {
        expect(resultado).toEqual(output1);
        done();
        });
    });
    it('Cuando la option es --stats', (done) => {
        cliFunction(input, '--stats').then((resultado) => {
        expect(resultado).toEqual(output2);
        done();
        });
    });
    it('Cuando la option es -- stats --validate', (done) => {
        cliFunction(input, '--stats --validate').then((resultado) => {
        expect(resultado).toEqual(output3);
        done();
        });
    });
    it('Cuando la option es --validate --stats', (done) => {
        cliFunction(input, '--validate --stats').then((resultado) => {
        expect(resultado).toEqual(output3);
        done();
        });
    });
    it('Cuando la option es ninguna opcion', (done) => {
        cliFunction(input, '').then((resultado) => {
        expect(resultado).toBe(output4);
        done();
        });
    });
});