const express = require('../ispit/node_modules/express');
const bodyParser = require('../ispit/node_modules/body-parser');
const cors = require('../ispit/node_modules/cors');

const { mongoose } = require('./db.js');
var profileController = require('./controllers/profileController.js');
var candyController = require('./controllers/candyController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/profiles', profileController);
app.use('/candies', candyController);
