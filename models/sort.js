'use strict';
module.exports = function(sequelize, DataTypes) {
  var Sort = sequelize.define('Sort', {
    url: DataTypes.STRING,
    shorturl: DataTypes.STRING,
    count: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    hooks: {
          beforeCreate : function(callback) {
            let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let length = 5;
            let result = '';
            for(let i=length; i>0; --i){
              result += str[Math.floor(Math.random()*str.length)]
            }
            callback.shorturl = result;
          }
    }
  });
  return Sort;
};
