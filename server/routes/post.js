const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello Post~!!')
});

router.get('/detail', (req, res) => {
    res.send('Post Detail~!!')
})

module.exports = router;