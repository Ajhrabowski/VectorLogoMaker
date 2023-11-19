//importing the render shape files
const { renderCircle, renderTriangle, renderSquare } = require("../lib/shapes");

//function to generate the svg

function generateSvg(data) {
  let logoShape = '';
  switch (data.shape) {
    case 'Circle':
      logoShape = renderCircle(data.text,data.shapeColor);
      break;

    case 'Triangle':
      logoShape = renderTriangle(data.text,data.shapeColor);
      break;

    case 'Square':
      logoShape = renderSquare(data.text,data.shapeColor);
      break;

  }
  return logoShape
}


module.exports = generateSvg;

