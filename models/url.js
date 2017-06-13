'use strict';
module.exports = function(sequelize, DataTypes) {
  var Url = sequelize.define('Url', {
    long_url: DataTypes.STRING,
    short_url: DataTypes.STRING,
    count: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }, hooks: {
      beforeCreate: (callback) => {
        let limit = 5;
        let alpha = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZqwertzuiopasdfghjklyxcvbnm"
        let short = "";
        for (let i = 0; i < limit; i++) {
          short+=alpha[Math.floor(Math.random()*alpha.length)]
        }
        callback.short_url=short;
      }
    }
  });
  return Url;
};