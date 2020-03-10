var express = require('express');
var router = express.Router();

const Pharmacy = require('../models/').Pharmacy

router.get('/', async (req, res) => {
    await Pharmacy.findAll()
        .then(data => {
            res.send(data)
        })
})

router.post('/', async (req, res) => {
    await Pharmacy.create(req.body).then(p => {
        res.send(p)
    })
})

module.exports = router;
