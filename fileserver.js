module.exports = function(file, req, res, callback) {
    var fs = require('fs')
        , ext = require('path').extname(file)
        , type = ''
        , fileExtensions = {
            'html':'text/html',
            'css':'text/css',
            'js':'text/javascript',
            'json':'application/json',
            'png':'image/png',
            'jpg':'image/jpg',
            'wav':'audio/wav'
        }
    for(var i in fileExtensions) {
       if(ext === i) {    
          type = fileExtensions[i]
          break
       }
    }
    fs.exists(file, function(exists) {
       if(exists) {
          res.writeHead(200, { 'Content-Type': type })
          fs.createReadStream(file).pipe(res)
          if(callback !== undefined) callback()
       } else {
          console.log(file,'file dne')
         }  
    })
}