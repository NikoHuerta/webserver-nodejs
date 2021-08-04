const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


//servir contenido estatico
//app.use( express.static('public/react') );
app.use( express.static('public/angular') );

// //MODELO MVC
// //--> CONTROLADOR
// app.get('/', (req, res) => {
//     res.render('home', {
//         nombre: 'Nicolas Huerta',
//         titulo: 'Index',
//     });
// });

// app.get('/generic', (req, res) => {
//     //res.sendFile(__dirname + '/public/generic.html');
//     res.render('generic', {
//         nombre: 'Nicolas Huerta',
//         titulo: 'Generic',
//     });
// });

// app.get('/elements', (req, res) => {
//     res.render('elements', {
//         nombre: 'Nicolas Huerta',
//         titulo: 'Elements',
//     });
//     //res.sendFile(__dirname + '/public/elements.html');
// });

app.get('*', (req, res) => {
    // res.sendFile(__dirname + '/public/404.html');
    res.sendFile(__dirname + '/public/angular/index.html');
});

// app.get('/hola-mundo', (req, res) => {
//     res.send('Hello World from hello-mundo');
// });



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });