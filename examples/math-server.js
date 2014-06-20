﻿var   util = require('util'),
      rpc = require('../src/bertrpc');

rpc.expose('math', {
    // return the sum of an array of numeric values
    sum: function(values) {
      var res = 0;
      for(var i = 0; i < values.length; i++)
          res += values[i];
      return res;
    },

    // return the average of an array of numeric values
    avg: function(values) {
      return this.sum(values) / values.length;
    },

    dbl: function(values) {
      var res = new Array()
      for(var i = 0; i < values.length; i++)
          res[i] = values[i]*2;
      return res;
    },



});

rpc.listen(7001, 'localhost');
