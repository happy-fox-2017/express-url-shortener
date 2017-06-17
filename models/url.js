'use strict';
module.exports = function(sequelize, DataTypes) {
  var Url = sequelize.define('Url', {
    norm_url: {
      type: DataTypes.STRING,
      // validate: {
      //   contains: 'http://',
      // }
    },
    short_url: DataTypes.STRING,
    click_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  },{
    hooks: {
      beforeCreate : function(url) {
          let deployUrl = "https://pendek-url.herokuapp.com/";
          let devUrl = "http://localhost:3000/";
          let length = 5
          let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
          let result = '';
          for (var i = length; i > 0; --i) {
            result += chars[Math.floor(Math.random() * chars.length)]
          };
          url.short_url = deployUrl + result;
          // return callback()
          // console.log(`isi thisnya ${JSON.stringify(this)}`);
          // console.log(`isi url : ${JSON.stringify(Url)}`);
          // console.log(`isnya ==========${this.short_url}`);
      }
    }
  })
  return Url;
};
