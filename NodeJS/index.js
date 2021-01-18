const express           = require('../ispit/node_modules/express');
const bodyParser        = require('../ispit/node_modules/body-parser');
const cors              = require('../ispit/node_modules/cors');

const { mongoose }      = require('./db.js');
var profileController   = require('./controllers/profileController.js');
var candyController     = require('./controllers/candyController.js');
var cartController      = require('./controllers/cartController');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/profiles', profileController);
app.use('/candies', candyController);
app.use('/cart', cartController);


// -----------------------------------------------------------------------------------------------------------------------------

const bot  = express();
const dfff = require('../ispit/node_modules/dialogflow-fulfillment');

bot.get('/', (req, res) =>{
    res.send('operativni smo');
});

bot.post('/', express.json(),(req, res) => {
    const agent = new dfff.WebhookClient({
        request: req,
        response: res
    });

    function takeMeHome(agent){
      var payload = {
        "richContent": [
          [
            {
              "type": "button",
              "icon": {
                "type": "chevron_right",
                "color": "#FF9800"
              },
              "text": "Click here to go home",
              "link": "http://localhost:4200",
              "event": {
                "name": "",
                "languageCode": "",
                "parameters": {}
              }
            }
          ]
        ]
      }
      agent.add(new dfff.Payload(agent.UNSPECIFIED, payload, {sendAsMessage: true, rawPayload: true}))
    }

    function takeMeHome(agent){
      var payload = {
        "richContent": [
          [
            {
              "type": "button",
              "icon": {
                "type": "chevron_right",
                "color": "#FF9800"
              },
              "text": "Click here to go home",
              "link": "http://localhost:4200",
              "event": {
                "name": "",
                "languageCode": "",
                "parameters": {}
              }
            }
          ]
        ]
      }
      agent.add(new dfff.Payload(agent.UNSPECIFIED, payload, {sendAsMessage: true, rawPayload: true}))
    }

    function takeMeToLogin(agent){
      var payload = {
        "richContent": [
          [
            {
              "type": "button",
              "icon": {
                "type": "chevron_right",
                "color": "#FF9800"
              },
              "text": "Click here to go to login",
              "link": "http://localhost:4200/login",
              "event": {
                "name": "",
                "languageCode": "",
                "parameters": {}
              }
            }
          ]
        ]
      }
      agent.add(new dfff.Payload(agent.UNSPECIFIED, payload, {sendAsMessage: true, rawPayload: true}))
    }

    function takeMeToSignup(agent){
      var payload = {
        "richContent": [
          [
            {
              "type": "button",
              "icon": {
                "type": "chevron_right",
                "color": "#FF9800"
              },
              "text": "Click here to sign up",
              "link": "http://localhost:4200/signup",
              "event": {
                "name": "",
                "languageCode": "",
                "parameters": {}
              }
            }
          ]
        ]
      }
      agent.add(new dfff.Payload(agent.UNSPECIFIED, payload, {sendAsMessage: true, rawPayload: true}))
    }

    function takeMeToTheProducts(agent){
      var payload = {
        "richContent": [
          [
            {
              "type": "button",
              "icon": {
                "type": "chevron_right",
                "color": "#FF9800"
              },
              "text": "Click here to go to products page",
              "link": "http://localhost:4200/candy",
              "event": {
                "name": "",
                "languageCode": "",
                "parameters": {}
              }
            }
          ]
        ]
      }
      agent.add(new dfff.Payload(agent.UNSPECIFIED, payload, {sendAsMessage: true, rawPayload: true}))
    }

    function demoWebHook(agent){
        agent.add('Saljemo odgovor sa webhook servera');
    }

    function customIntent(agent){
        var payload = { 
            "richContent": [
              [
                {
                  "type": "accordion",
                  "title": "Poruka sa slikom",
                  "subtitle": "podnaslov slike",
                },
                {
                  "type": "image",
                  "rawUrl": "https://upload.wikimedia.org/wikipedia/commons/8/87/Beograd_night.png",
                  "accessibilityText": "alt text"
                }
              ]
            ]
          }
          agent.add(new dfff.Payload(agent.UNSPECIFIED, payload, {sendAsMessage: true, rawPayload: true}))
    }

    var intentMap = new Map();
    intentMap.set('demo', demoWebHook);
    intentMap.set('customIntent', customIntent);
    intentMap.set('takeMeHome', takeMeHome);
    intentMap.set('takeMeToLogin', takeMeToLogin);
    intentMap.set('takeMeToSignup', takeMeToSignup);
    intentMap.set('takeMeToTheProducts', takeMeToTheProducts);

    agent.handleRequest(intentMap);

});

bot.listen(333, () => console.log('server radi na portu 333'));
