const express=require("express");
router=express.Router();

router.post("/",(req,res)=>{
    res.json([])
})

module.exports=router   