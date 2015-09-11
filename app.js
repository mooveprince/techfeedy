var fileServer = require('./fileserver');
var http = require('http');
http.createServer(function(req, res) {
   var file = __dirname + req.url;

   var query = require('url').parse(req.url,true).query;

   if(req.url === '/') {
       file = __dirname + '/index.html'   // serve index.html on root
   } 

   // serve all other files echoed by index.html e.g. style.css
   fileServer(file, req, res );    // callback is optional

}).listen(process.env.PORT || 8008);
