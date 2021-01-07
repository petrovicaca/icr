const mongoose = require('../ispit/node_modules/mongoose');

mongoose.connect('mongodb://localhost:27017/IspitDB',  { useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;