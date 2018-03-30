let express = require('express')
let router = express.Router()
let User = require('./userSchema')


router.get('/', function(req, res){
    res.send(
        `<h1 style="
            color: 5bc0de; 
            font-family: monospace; 
            text-align: center;
            font-size: 50px;">Welcome to Io Chat Api</h1>`)
})

// Create User Api
router.post('/user', function(req, res){
    //Set User into object
    let user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
    })
    //Save user object to db 
    user.save(function(err, doc){
        if (err) {
            throw err
        }
        res.json(doc)
    })
})

router.post('/login', function(req, res){
    User.findOne({
        username: req.body.username,
        password: req.body.password
    }, function(err, doc){
        if (err) {
            throw err
        }
        else{
            if (doc) {
                res.json(doc)
            }else{
                res.json({
                    error: 'invalid credentials'
                })
            }
        }
    })
})

module.exports = router