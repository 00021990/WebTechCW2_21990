This web aplication was made to fullfil task that was given as my CW for Web Tech module
The app allows you to create, update, delete and view the recipes their descriptions and authors
To run this applicaton you need to open the terminal in your text redactor VS, VScode or whatever and then write the following
1. npm init -y
2. npm i express express-validator body-parser nodemon pug
3. npm start
After following steps are completed the aplication will run at http://localhost:3000/recipe
Link to public repository on GitHub: https://github.com/00021990/WebTechCW2_21990
Link for hosted site: https://classic-playful-homegrown.glitch.me/recipe
The source for the code was taken from seminar 6 semester 2


PROJECT STRUCTURE:

WEBTECHCW2_21990
├── controllers
│   └── recipe.js
├── data
│   └── mock_db.json
├── public
│   ├── css
│   └── js
├── routes
│   ├── api
│   │   ├── index.js
│   │   └── recipe.js
│   └── web
│       ├── index.js
│       └── recipe.js
├── services
│   └── recipe.js
├── validators
│   └── recipe.js
├── views
│   └── recipe
│       ├── create_update.pug
│       ├── index.pug
│       └── head.pug
├── .gitignore
├── app.js
├── LICENSE
├── package-lock.json
├── package.json
└── README.md