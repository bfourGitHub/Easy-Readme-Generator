// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
  ${data.description}

  ## Installation Guide
  ${data.installationInstructions}

  ## Usage Guidelines
  ${data.usage}

  ## How to Contribute
  ${data.contributing}

  ## Testing
  ${data.tests}

  ## License
  ${data.License}

  //Insert function HERE to loop thru the liscense options and based on the chosenLicense display corresponding license information.


  ## Questions
  //Comment on ways to contact for more information or possible collaborations
  ${data.github}
  ${data.email}

// Duplicate line 3 of code to get the other prompts to display here. use appropriate #'s to give appropriate headings 
`;
}

module.exports = generateMarkdown;
