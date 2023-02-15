const express = require('express');
const User = require('../models/User');
const router = express.Router();


router.post('/', (req, res)=>{
const userinfo=User(req.body)

userinfo.save()//to save into the mongodatabase

res.send(req.body)// just to see in thunder client

} )

module.exports = router