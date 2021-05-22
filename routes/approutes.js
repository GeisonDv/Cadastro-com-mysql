const express = require('express');
const router = express.Router();

const myController = require('../controllers/myController');

router.get('/', (req, res) => {
    res.render('form', {layout: false})
});

router.post('/', myController.save)
router.get('/show', myController.show)

module.exports = router;
