
  [![License](https://img.shields.io/badge/License-Unlicense-blue.svg)]

  # Model-View-Controller (MVC) Challenge: Tech Blog

  ## Description
  This application is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. The application uses the Model, View, Controller paradigm.

  The deployed website can be viewed at: https://friendly-train-mvc.herokuapp.com/

  <img width="1246" alt="Screen Shot 2022-07-22 at 10 48 55 PM" src="https://user-images.githubusercontent.com/91441453/180587821-242d90f1-968a-4ce1-9823-180b74c90cb4.png">

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Questions](#questions)
  * [License](#license)
  
  ## Installation
  * Clone GitHub repository. 

  * Add a .env file with the following: 
  `DB_NAME=blog_db`
  `DB_USER=<your mysql username>`
  `DB_PW=<your mysql password>` 

  * `npm init`

  * Confirm that bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, mysql2, sequelize dependencies are installed. 

  * Log into mysql. Run the command `source db/schema.sql` and then `quit`.

  * `npm run seed`

  * `npm start`  

  ## Usage
  Start the application by using `npm start`. 

  ## Contributing
  To contribute to this project, contact me with any questions. Contact information is listed below.

  ### Questions
  To request additional information: 
  Find me on GitHub: [chlucas324]<br /><br />
  Email me with any questions: chlucas324@gmail.com

  ## License
  This application is covered by the The Unlicense license: http://unlicense.org/.


