let express = require('express')
let socket = require('socket.io')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
let Api = require('./api')

let app = express()
app.use(bodyParser.json())
try {
    let server = app.listen(80, function () {
        console.log('listening for requsts on port 80')
    })

    mongoose.connect('mongodb://localhost:27017/iochat', function(){
        console.log("Connected to mongodb successfully")
    })
    
    app.use('/api', Api)
    app.use(express.static('public'))


    let io = socket(server)

    io.on('connection', function (socket) {
        console.log('a user is connected', socket.id)
    })
} catch (error) {
    console.log(error)
}
