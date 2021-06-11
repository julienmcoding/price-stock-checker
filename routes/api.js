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
      let responseObject = {};
      responseObject['stockData'] = {};

      //Variable to determine number of stocks
      let twoStocks = false;

      //Output response
      let outputResponse = () => {
        return res.json(responseObject);
      };

      //Find & update Stock document
      let findOrUpdateStock = (stockName, documentUpdate, nextStep) => {
        Stock.findOneAndUpdate(
          {name: stockName},
          documentUpdate,
          {new: true, upsert: true},
          (error, stockDocument) => {
            if(error) {
              console.log(error);
            } else if (!error && stockDocument) {
              if(twoStocks === false) {
                return nextStep(stockDocument, processOneStock)
              }
            }
          }
        )
      };

      //like stock
      let likeStock = (stockName, nextStep) => {

      };

      //Get price
      let getPrice = (stockDocument, nextStep) => {

      };

      //Build response for 1 stock
      let processOneStock = (stockDocument, nextStep) => {

      };

      let stocks = [];
      //Build response for 2 stocks
      let processTwoStocks = (stockDocument, nextStep) => {

      };

      //Process input 
      if (typeof (req.query.stock) === 'string') {
        //one stock
        let stockName = req.query.stock;

        let documentUpdate = {};
        findOrUpdateStock()

      } else if (Array.isArray(req.query.stock)) {
        // stock 1

        //stock 2
      }
      
    });
    
};
