const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

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
   user= await User.create({
        name: req.body.name,
        password: req.body.password,
        email:req.body.email
      })
      res.json(user)    // sending response to thunder client that user has been created 
   
} )

module.exports = router