// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ##Description 
  ${data.description}

  ##Installation Guide
  ${data.installation-instructions}

  ##Usage Guidelines
  ${data.usage}

  ##How to Contribute
  ${data.contributing}

  ##Testing
  ${data.tests}

  ##License
  ${data.ChosenLicense}

  ##Questions
  //Comment on ways to contact for more information or possible collaborations
  ${data.github}
  ${data.email}

// Duplicate line 3 of code to get the other prompts to display here. use appropriate #'s to give appropriate headings 
`;
}

module.exports = generateMarkdown;
