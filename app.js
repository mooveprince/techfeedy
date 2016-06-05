var fileServer = require('./fileserver');
var http = require('http');

http.createServer(function(req, res) {
   var file = __dirname + req.url;

   if(req.url === '/') {
       file = __dirname + '/index.html'   // serve index.html on root
   } else if(req.url === '/trends' || req.url.indexOf("lat") > -1  ) {  //if request is for trends & any QS is available
      file = __dirname + '/trends.html';
   }

   // serve all other files echoed by index.html e.g. style.css
   fileServer(file, req, res );    // callback is optional

}).listen(process.env.PORT || 8008);
