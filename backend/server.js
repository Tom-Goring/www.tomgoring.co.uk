var express = require('express');
var app = express();
var port = process.env.port || 3000;
 
app.get("/contactMe",function(request,response)
{
    response.json({"Message":"Welcome to Node js"});
});
 
app.listen(port, function () {
    var datetime = new Date();
    var message = "Server runnning on Port:- " + port + " Started at :- " + datetime;
    console.log(message);
});
