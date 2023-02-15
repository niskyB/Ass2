const express = require('express');
const bodyParser = require('body-parser');
const Nations = require('../schema/nations');

const nationRouter = express.Router();

nationRouter.use(bodyParser.json());

nationRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        next();
    })

nationRouter.get('/', async (req, res, next) => {
    const nations = await Nations.find();
    res.send(nations);

});

nationRouter.get('/:nationId', async (req, res, next) => {
    const nation = await Nations.findById(req.params.nationId);
    res.send(nation);
});

nationRouter.post('/', async (req, res, next) => {
    const newNation = await Nations.create(req.body);
    res.send(newNation);
});


nationRouter.put('/:nationId', async (req, res, next) => {
    const nation = await Nations.findByIdAndUpdate(req.params.nationId, {
        $set: req.body
    }, { new: true })
    res.send(nation);
});

nationRouter.delete('/:nationId', async (req, res, next) => {
    const nation = await Nations.findByIdAndDelete(req.params.nationId);
    res.send(nation);
});

module.exports = nationRouter;
