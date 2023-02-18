const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Harryisagoodboy';

const fetchuser = (req, res, next) => {
   try {
    const token = req.header("auth-token")
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    //verifies the token with secret key , if match is found then returns the payload data.So userdata contains the payload data.Note that our
    // payload data was obejct named User which contains the userid
    const userdata= jwt.verify(token,JWT_SECRET)
    req.user=userdata.user 
    // console.log("in middleware")
    // console.log(req.user)
    next();
   } 
 
    catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })

    }
    
}

module.exports=fetchuser