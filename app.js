require("dotenv").config()
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

const Port = process.env.PORT || 30124
const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
app.use(cors(corsOpts));

app.listen(Port,()=>{
    console.log(`Server is Running on Port ${Port}`)
})

app.set('views', './Views/');
app.set("view engine","ejs")

require("./config/db")()

app.use(express.json())
app.use("/",express.static("./FrontEnd/public/"))
app.use('/api/file',require("./Router/File"));
app.use('/download',require("./Router/Download"));
app.use('/myfile',require("./Router/download_page"));
app.use('/registeruser',require("./Router/RegisterUser"));
app.use('/loginuser',require("./Router/LoginUser"));

app.all("*",(req,res)=>{
  res.send("Wrong Input")
}
)