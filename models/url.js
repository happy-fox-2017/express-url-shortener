'use strict';

function random(){
  var text = '';
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor( Math.random() * possible.length ));
    }
    return text;
}

module.exports = function(sequelize, DataTypes) {
  var Url = sequelize.define('Url', {
    url: DataTypes.STRING,
    shortened: DataTypes.STRING,
    clicked: DataTypes.INTEGER
  },
  { hooks: {
      beforeCreate: (url,options) => {
        url.clicked = 0,
        url.shortened = random()
      }}
  });
  return Url;
};