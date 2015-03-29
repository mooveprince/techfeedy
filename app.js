var fileServer = require('./fileServer');
var http = require('http');
http.createServer(function(req, res) {
   var file = __dirname + req.url;
   if(req.url === '/') {
       // serve index.html on root 
       file = __dirname + '/index.html'
   }
   // serve all other files echoed by index.html e.g. style.css
   // callback is optional
   fileServer(file, req, res );

}).listen(process.env.PORT || 8000);

