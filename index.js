const inquirer = require("inquirer");
const fs = require("fs");
const generateSvgFile = require("./examples")

inquirer
  .prompt([

    {
        type: 'input',
        name: 'text',
        message: 'What is your text for my logo? (No more than 3 characters)',
        
    },
    {
        type: 'input',
        name: 'color',
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
        name: 'color',
        message: 'What is the color of your shape?',
        
    },
])

// Function to write svg file
// function writeSvgFile(fileName, svgContent) {
//     fs.writeFile(fileName, svgContent, (err) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       console.log(`SVG file ${fileName} has been created.`);
//     });
//   }

function writeToFile(fileName, data) {
    
    return fs.writeFileSync(path.join(process.cwd(), fileName), data); 
}


  // Function call to initialize svg file

  function init() {
    inquirer.prompt(questions)
        .then(answers => {
            console.log("Data: ", answers)

            let svgFile = generateSvgFile(answers);
            console.log("Svg Created: ", svgFile)
        })
        .catch(error => {
            console.log("Error: ", error);
        })
  } 
  
  // Function call to initialize svg file

  function init() {
    inquirer.prompt(questions).then((answers) => {
      
        writeSvgFile("../examples/svgFile", generateSvgFile({ ...answers }));
    });
  }


init();