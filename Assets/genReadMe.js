const genReadMe = data => {
    return `# ${data.title}
    ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)
    
    ## Description 
    ${data.description}
    ## Table of Contents
    [Installation](#installation)
    [Usage](#usage)
    [License](#license)
    [Contributing](#contributing)
    [Tests](#tests)
    [Questions](#questions)
    
    ## Installation <a id="installation"></a>
    ${data.installation}
    ## Usage <a id="usage"></a>
    ${data.usage}
    ## License <a id="license"></a>
    This project is license under ${data.license}
    ## Contributing <a id="contributing"></a>
    ${data.contributing}
    ## Tests <a id="tests"></a>
    ${data.tests}
    ## Questions <a id="questions"></a>
    If you have any questions about this project, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
  `;
  }

module.exports = genReadMe;