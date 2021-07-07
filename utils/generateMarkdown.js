
function generateMarkdown(data) {
  return `# ${data.title}

## Description 
  
${data.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Questions](#questions)


## Installation

${data.installation}

## Usage 

${data.usage}

## Credits

${data.credits}

## Questions

GitHub Username: ${data.github}
GitHub Link: https://github.com/${data.github}

If you have anymore questions just email me at ${data.email}
`;
}

module.exports = generateMarkdown;
