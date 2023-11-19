//Functions that returns a shapes

function renderCircle(text, color) {
    // Render the shape as an SVG string
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <circle cx="150" cy="100" r="80" fill="${color}" />
    <text x="150" y="125" font-size="60" text-anchor="middle">${text}</text>
    </svg>`;
  }

 

function renderTriangle(text, color) {
    // Render the shape as an SVG string
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <circle cx="150" cy="100" r="80" fill="${color}" />
    <text x="150" y="125" font-size="60" text-anchor="middle">${text}</text>
    </svg>`;
  }

  

function renderSquare(text, color) {
    // Render the shape as an SVG string
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <circle cx="150" cy="100" r="80" fill="${color}" />
    <text x="150" y="125" font-size="60" text-anchor="middle">${text}</text>
    </svg>`;
  }

  module.exports = {renderCircle, renderTriangle, renderSquare};