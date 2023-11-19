const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateSvg = require("./examples/generateSvg")

const questions = [

    {
        type: 'input',
        name: 'text',
        message: 'What is your text for my logo? (No more than 3 characters)',
        
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What is the color of your text?',
        
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape do you wish to choose?',
        choices: ['Circle', 'Triangle', 'Square'],
        
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What is the color of your shape?',
        
    },
];

// Function to write svg file

function writeToFile(fileName, data) {
    
    return fs.writeFileSync(path.join(process.cwd(), fileName), data); 
}


  // Function call to initialize svg file

   function init() {
     inquirer.prompt(questions)
        .then(answers => {
            console.log("Data: ", answers)

            let svgFile = generateSvg(answers);
            console.log("Svg Created: ", svgFile)
        })
        .catch(error => {
            console.log("Error: ", error);
        })
  } 
  
//   Function call to initialize svg file

  function init() {
    inquirer.prompt(questions).then((answers) => {
     console.log(answers) 
        writeToFile("./examples/svgFile.svg", generateSvg({ ...answers }));
    });
  }


init();