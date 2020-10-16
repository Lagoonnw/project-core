const {Router} = require('express');
const router = Router();
const IceCream = require('../models/IceCream');

router.get('/', async (req, res) => {
    try {
        const items = await IceCream.find({});
        res.status(201).json(items);

    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }
});