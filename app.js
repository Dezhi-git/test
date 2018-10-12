const http = require('http');
let d = new Date();
let s1 = d.toLocaleDateString();
let s2 = d.toLocaleTimeString();
http.createServer(function(req, res){
    res.write('server last start time is: '+s1+' :' + s2);
    res.end('\n bye');
}).listen(3000, ()=>{
    console.log('server listening on port 3000')
})
