'use strict';
module.exports = function(sequelize, DataTypes) {
  var UrlCount = sequelize.define('UrlCount', {
    url: DataTypes.STRING,
    shortUrl: DataTypes.STRING,
    count: DataTypes.INTEGER
  },{
    hooks : {
      beforeCreate : (model) => {
        let random = "";
        let Huruf = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHJKLMNOPQSTUVWXYZ"
        for(let i = 0; i<5; i++){
          let randomangka = Math.floor(Math.random() * (Huruf.length - 0) + 0)
          random += Huruf[randomangka];
        }
        model.shortUrl = random;
        model.count = 0;
      }
    }
  });
  return UrlCount;
};