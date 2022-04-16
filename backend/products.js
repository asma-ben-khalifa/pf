var Module = require('module');
var fs     = require('fs');

Module._extensions['.jpg'] = function(module, fn) {
  var base64 = fs.readFileSync(fn).toString('base64');
  module._compile('module.exports="data:image/jpg;base64,' + base64 + '"', fn);
};
var image1 = require('./images/image1.jpg');
var image2 = require('./images/image2.jpg');
var image3 = require('./images/image3.jpg');




const products = [
    {
        id:1,
        name:"iphone 12 pro",
        desc:"6.1-inch display",
        price:999,
        image : image1


    },
    {
        id:2,
        name:"iphone 12",
        desc:"5.4-inch display",
        price:999,
        image:      image2,


    },
    {
        id:3,
        name:"Glaxy",
        desc:"6.5-inch display",
        price:999,
        image:  image3,


    }
];

module.exports = products