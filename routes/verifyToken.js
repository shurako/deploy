const jwt = require('jsonwebtoken')

module.exports = function  (req, res, next){
    const token = req.header('auth-token');
    if(!token) return res.status(400).send('Acces denied')

    try{
        const veryfied = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = veryfied
        next()
    }catch(err){
        res.status(500).send('Acces denied')
    }

}

