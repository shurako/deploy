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

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'gym/build')));
  // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'gym/build', 'index.html'));
    });
  }
  
  // ** MIDDLEWARE ** //
  const whitelist = ['http://localhost:3001', 'http://localhost:8080']
  const corsOptions = {
    origin: function (origin, callback) {
      console.log("** Origin of request " + origin)
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        console.log("Origin acceptable")
        callback(null, true)
      } else {
        console.log("Origin rejected")
        callback(new Error('Not allowed by CORS'))
      }
    }
  }


 
// CONNECT TO DB
mongoose.connect(uri, {useNewUrlParser : true}, () => {
    
} )

app.listen( port , () => {
    console.log('server connected')
})
 