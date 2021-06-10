'use strict';
const mongodb = require('mongodb');
const mongoose = require('mongoose');
require('dotenv').config();

module.exports = function (app) { 
  const uri = process.env.DB;

  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});

  let stockSchema = new mongoose.Schema({
    name: {type: String, required: true},
    likes: {type: Number, default: 0},
    ips: [String]
  });

  let Stock = mongoose.model('Stock', stockSchema);

  app.route('/api/stock-prices')
    .get(function (req, res){
      
    });
    
};
