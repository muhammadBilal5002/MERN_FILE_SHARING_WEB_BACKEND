const express = require("express")
const user = require("../model/user")
const router = express.Router()

router.post("/",async (req,res)=>{
    const {username, email,password,repassword}= req.body
    const result1 = await user.findOne({Email:email.toLowerCase()})
    if(result1){
        return res.send({data:false})
    }
    else{
        const myuser = new user({
            Username:username.toLowerCase(),
            Email: email.toLowerCase(),
            Password:password,
        });
        const result2 = await myuser.save()
        res.send({data:true})
    }
    
})


module.exports = router