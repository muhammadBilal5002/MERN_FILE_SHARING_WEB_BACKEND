const express = require("express")
const File = require("../model/file")
const router = express.Router()

router.get("/:uuid",async (req,res)=>{
    const req_uuid = req.params.uuid
    const query = {uuid:req_uuid}
    const result = await File.findOne(query)
    if(!result){
    return res.render('download.ejs',{filename:"NO FILE EXIST",link:"hello"})
    }
    return res.render('download.ejs',{filename:result.filename,link:`${process.env.Base_Url}download/${result.uuid}`})
})


module.exports = router