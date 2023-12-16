const{renderCircle, renderTriangle, renderSquare} = require('./shapes')
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

test('test my circle svg renders', () => {
const shape = new renderCircle('SVG','red','blue')
    expect(shape.render()).toBe(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" fill="red" text-anchor="middle">SVG</text></svg>`);
  });

  test('test my triangle svg renders', () => {
  const shape = new renderTriangle('SVG','yellow','blue')
    expect(shape.render()).toBe(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><polygon points="150,18 244,182 56,182" fill="blue" /><text x="150" y="125" font-size="30" fill="yellow"text-anchor="middle">SVG</text><svg>`);
      });

  test('test my square svg renders', () => {
    const shape = new renderSquare('SVG','grey','pink')
        expect(shape.render()).toBe(`<svg xmlns="http://www.w3.org/2000/svg" width="210" height="500"><rect width="100" height="100" fill="pink" /><text x="50" y="60" font-size="30" fill="grey" text-anchor="middle">SVG</text></svg>`);
      });