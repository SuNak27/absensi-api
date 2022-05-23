require('dotenv').config();
const jwt = require('jsonwebtoken')
const {
    JWT_SECRET_KEY
} = process.env;

module.exports = async (req, res, next) => {
    const token = req.get('X-Sambang-Token')

        jwt.verify(token, JWT_SECRET_KEY, (err, pass) => {
            if (err){
                return res.status(401).json({
                    status: false,
                    message: err.message
                })
            } else if (pass){
                req.pengurus = pass
                next()
            }
        })
}