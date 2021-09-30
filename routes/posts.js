const router = require("express").Router();
const verify = require('../routes/verifyToken')



router.post('/', verify, (req, res) => {

    res.json({title: 'test', desc: 'test1'})
})

module.exports = router;
