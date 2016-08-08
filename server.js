/**
 * Created by user on 8/8/16.
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
        console.log(" requrest once");
        res.json( {
            name: "weilizhu",
            age: 26,
            major: "CSE"
        })
});

app.listen(3000);