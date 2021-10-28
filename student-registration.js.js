const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const Employee = require('../../model/Student-Registration-Form')

router.get('/', (req,res)=>{
    Employee.find()
    .then(result=>{
        res.status(200).json({
            employeeData:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
  
});
// insert data 
    router.post('/',(req,res,next)=>{
        const employee = new Employee({
            Name: req.body.name,
            gender :req.body.gender,
            email :req.body.email,
            address: req.body.address,
            collage: req.body.collage,
            course : req.body.course,
            phone  :req.body.phone
        })
        employee.save()
        .then(result=>{ 
            console.log(result);
            res.status(200).json({
                newEmployee:result
            })
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error:err
            })
        })
        });

        



module.exports= router