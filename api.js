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

router.post('/user', function(req, res){

    console.log(req.body)

    let user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    user.save(function(err, doc){
        if (err) {
            throw err
        }
        res.json(doc)
    })
})

module.exports = router