const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/userSchema')
const dotenv = require('dotenv')

// IMPORT ROUTES
const auth = require('./routes/auth')
const posts = require('./routes/posts')

//MIDDLEWARES
app.use(cors())
app.use(express.json())
app.use('/api/user', auth)
app.use('/api/posts', posts)

const port = process.env.PORT || 3001
const uri = 'mongodb+srv://user1:12345@cluster0.vnpml.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'



 
// CONNECT TO DB
mongoose.connect(uri, {useNewUrlParser : true}, () => {
    
} )
// mongoose.connection.on('connected', () => {
//     console.log('mongoose is connected on ' + port)
   
// })
app.listen( 3001 , () => {
    console.log('server connected')
})
 