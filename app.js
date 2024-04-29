const express=require("express");

const path=require("path");

const app=express();

const detail=require("./index.js");

const bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.post("/signup",async(req, res)=>{
        let s=await detail(req.body);
        s.save().then(()=>{
            res.send("Done");
        }).catch((err)=>{
            console.log(err);
        })
})



app.listen(2000);