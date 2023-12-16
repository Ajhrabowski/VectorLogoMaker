class Shape {

  constructor(text, textColor, color) {
    this.textColor = textColor;
    this.color = color;
    this.text = text;
  }
}  

//Functions that returns a shapes

class renderCircle extends Shape {
  constructor(text, textColor, color){
    super(text, textColor, color)
  }
  // Render the shape as an SVG string
  render(){

    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.color}" /><text x="150" y="125" font-size="60" fill="${this.textColor}" text-anchor="middle">${this.text}</text></svg>`;
  }
}



class renderTriangle extends Shape {
  constructor(text, textColor, color){
    super(text, textColor, color)
  }
  // Render the shape as an SVG string
  render (){

    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><polygon points="150,18 244,182 56,182" fill="${this.color}" /><text x="150" y="125" font-size="30" fill="${this.textColor}"text-anchor="middle">${this.text}</text><svg>`;
  }
}



class renderSquare extends Shape {
  constructor(text, textColor, color){
    super(text, textColor, color)
  }
  // Render the shape as an SVG string
  render(){

    return `<svg xmlns="http://www.w3.org/2000/svg" width="210" height="500"><rect width="100" height="100" fill="${this.color}" /><text x="50" y="60" font-size="30" fill="${this.textColor}" text-anchor="middle">${this.text}</text></svg>`;
  }
}

module.exports = { renderCircle, renderTriangle, renderSquare };