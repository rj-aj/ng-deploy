const mongoose = require('mongoose');

// path to make it little easier to write file paths
const path = require('path');
const fs = require('fs');
const reg = new RegExp('\\.js$', 'i');
const modelsPath = path.resolve('server/models');

// set mongoose's promise to the global promise, even if we don't use it, 
// it makes the warning message go away

mongoose.Promise = global.Promise;

// connect to database
mongoose.connect('mongodb://localhost/testing');
mongoose.connection.on('connected', () => console.log('mongodb connected'));

// path to the models folder
fs.readdirSync(modelsPath).forEach(model => {
    if (reg.test(model)) {
      require(path.join(modelsPath, model));
    }
  });