const express = require('express');
const mongooose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const passport = require('passport');

//User
const users = require('./routes/api/users')


//BodyParser Middleware Function
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//config database
const db = require('./config/keys').mongoURI;
mongooose.connect(db,{useNewUrlParser:true})
         .then(()=>console.log("Mongodb Successfully Connected"))
         .catch(err=>console.log(err));

// Passport middleware
app.use(passport.initialize());

//passport config
require('./config/passport') (passport);

//Routes
app.use('/api/users', users)         


//Port configuration
const port = process.env.PORT || 5000;
app.listen(port, ()=>{console.log(`Server running on Port ${port}`)});
