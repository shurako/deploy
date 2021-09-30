const router = require("express").Router();
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()
const { registerValidation, loginValidation } = require("../validation");
const verify = require('../routes/verifyToken')

//REGISTER
router.post("/register", async (req, res) => {
  //validation
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //check if email exists
  const emailExist = await User.findOne({ eMail: req.body.eMail });
  if (emailExist) return res.status(400).send("email already exists");

  //Hash password
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const newuser = new User({
    name: req.body.name,
    password: hashedPassword,
    eMail: req.body.eMail,
  });

  res.json(newuser);
  newuser.save();
});

router.post("/login", async (req, res) => {
  //validation
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //check if user exists
  const user = await User.findOne({ eMail: req.body.eMail });
  if (!user) return res.status(400).send("user not found");

  //password id correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if(!validPassword) return res.status(400).send('Invalid password');

  //Create and assign token
  const token =   jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
  
  res.header('auth-token', token).send(token)
  

});

router.get("/user", verify, async (req, res) => {
  const user = await User.findOne({_id: req.user._id})
  // const user = User.findOne({_id: test._id})
  
  res.send(user)
});

module.exports = router;
