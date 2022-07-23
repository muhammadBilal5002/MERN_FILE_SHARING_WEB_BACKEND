const express = require("express")
const user = require("../model/user")
const router = express.Router()

router.post("/",async (req,res)=>{
const {email,password}= req.body
const result1 = await user.findOne({Email:email.toLowerCase(),Password:password})
if(result1){
console.log(result1)
    res.send({data:true,result:result1})
}
else{
    res.send({data:false})
}
})


module.exports = router