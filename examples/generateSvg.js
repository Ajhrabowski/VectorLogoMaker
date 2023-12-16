//importing the render shape files
const { renderCircle, renderTriangle, renderSquare } = require("../lib/shapes");

//function to generate the svg

function generateSvg(data) {
  let logoShape = '';
  switch (data.shape) {
    case 'Circle':
      logoShape = new renderCircle(data.text, data.textColor, data.shapeColor);
      break;

    
      case 'Triangle':
      logoShape = new renderTriangle(data.text, data.textColor, data.shapeColor);
      break;

    case 'Square':
      logoShape = new renderSquare(data.text, data.textColor, data.shapeColor);
      break;

  }
  return logoShape.render()
}


module.exports = generateSvg;

