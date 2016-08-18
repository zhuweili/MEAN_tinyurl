/**
 * Created by user on 8/8/16.
 */


var express = require('express');
var app = express();
var restRouter = require('./routes/rest');
var redirectRouter = require('./routes/redirect');
var indexRouter = require('./routes/index');

app.longToShortHash = {};
app.shortToLongHash = {};

app.use('/api/v1', restRouter);
app.use('/', indexRouter);
app.use('/:shortUrl', redirectRouter);

app.listen(3000);
