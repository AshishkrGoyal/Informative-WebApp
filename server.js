/**
 * Created by Ashish Goyal on 7/10/2017.
 */
const express = require('express');
const passport = require('passport');
const app = express();
const port = 2020;

app.get('/',function (request,response) {
   response.sendfile('public_static/index.html',{root: __dirname});
});

app.listen(port,function () {
    console.log('server has been started at port number: '+ port);
});