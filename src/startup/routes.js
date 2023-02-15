const express = require('express');
const nationRouter = require('../routes/nationRouter');
const playerRouter = require('../routes/playerRouter');
const mongoose = require('mongoose');

module.exports = function (app) {
    mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true, });
    app.use(express.json());
    app.use('/nations', nationRouter);
    app.use('/players', playerRouter)
}