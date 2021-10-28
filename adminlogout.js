const express = require('express');
const router = express.Router()


  app.get('/logout',function(req,res){
    req.admin(req.token,(err,user)=>{
        if(err) return res.status(400).send(err);
        res.sendStatus(200);
    });
  
  }); 

