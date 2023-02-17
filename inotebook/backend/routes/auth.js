const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//Express Validator     

//creating route api/auth/createUser so that user created
router.post('/createUser',
[body('email',"Enter a valid email").isEmail(),body('password',"password should be atleast 5 characters").isLength({ min: 5 }),body('name',"name should be atleast 3 characters").isLength({ min: 3 })]
, async (req, res)=>{
  // if there are errors in validation then return bad response with the error
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  //Most driver methods that communicate with your MongoDB cluster, such as findOneAndUpdate() and countDocuments() SEE MONGODB DOCUMENTATION
  
  let user= await User.findOne({email:req.body.email})
  if (user){
    return res.status(400).json({error:"sorry user with this email id already exists"})
  }
  
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(req.body.password, salt);


  //storing user's data in monogo db
  user= await User.create({
        name: req.body.name,
        password:secPass ,
        email:req.body.email
      })

      const data={
        id:user.id
      }

  const JWT_SECRET = 'Harryisagoodboy';
  const authtoken= jwt.sign(data,JWT_SECRET);
      res.json({authtoken:authtoken})    // sending response to thunder client that user has been created 
   
} )

module.exports = router