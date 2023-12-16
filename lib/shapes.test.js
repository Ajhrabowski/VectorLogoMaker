const{renderCircle, renderTriangle, renderSquare} = require('./shapes')
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

test('test my circle svg renders', () => {
const shape = new renderCircle('SVG','red','blue')
    expect(shape.render()).toBe(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" fill="red" text-anchor="middle">SVG</text></svg>`);
  });