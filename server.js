const http = require('http');
const express = require('express');
const hbs = require('express-handlebars');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

app.use(express.static('public'));

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'default'}));

app.set('views', __dirname+'/views');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
  let data = {
    title : 'Homepage',
    users : [
      {
        fullname : 'John Deep',
        email : 'john@john.com'
      },
      {
        fullname : 'Atom',
        email : 'atom@atom.com'
      }
    ],

  };
  res.render('index',data);
});

app.get('/users', (req, res) => {
  let data = {
    title : 'List Users',
    users : [
      {
        fullname : 'John Deep',
        email : 'john@john.com'
      },
      {
        fullname : 'Atom',
        email : 'atom@atom.com'
      }
    ],
  };
  res.render('users', data);
});

app.get('/home', (req, res) => {
  //res.render();
});



app.listen(port, () => {
  console.log(`Server Started listen port:${port}`);
});
