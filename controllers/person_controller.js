const { Sequelize } = require("sequelize");
const sequelize = require('../database');
const Person =require("../models/person")
const Phone =require("../models/phone")

const add = async(req,res)=>{
    try {
        const resp = await Person.create(req.body, {
            include: [
                {
                    model: Phone,
                },
            ],
        });
    res.status(200).json({
        status:"success",
        response:resp,
        message:"record inserted successfully"
    })
    } catch (error) {
        res.status(400).json({
            status:"failed...!",
            message:error.message
        })
        console.log(error.message);
    }
};

const find = async(req,res)=>{
    try {
        const resp = await Person.findOne({
            where:{
            id: req.params.id
             },
             include: Phone,
          });
          res.status(200).json({
            status:"success",
            response:resp,
            message:"record fetched successfully"
          })
    } catch (error) {
        res.status(400).json({
            status:"failed...!",
            message:error.message
        })
        console.log(error.message);
    }
}

const updateperson = async(req,res)=>{
    try {
        const resp = await Person.update(req.body,{
            where:{
            id: req.params.id
             },
             include: Phone,
          });
          res.status(200).json({
            status:"success",
            response:resp,
            message:"record updated successfully"
          })
    } catch (error) {
        res.status(400).json({
            status:"failed...!",
            message:error.message
        })
        console.log(error.message);
    }
}

const updatephone = async(req,res)=>{
    try {
        const resp = await Phone.update(req.body,{
            where:{
            PersonId: req.params.id
             },

          });
        
          res.status(200).json({
            status:"success",
            response:resp,
            message:"record updated successfully"
          })
    } catch (error) {
        res.status(400).json({
            status:"failed...!",
            message:error.message
        })
        console.log(error.message);
    }
}

const removeperson = async(req,res)=>{
    try {
        const resp = await Person.destroy({
            where:{
            id: req.params.id
             },
          });
          res.status(200).json({
            status:"success",
            response:resp,
            message:"record deleted successfully"
          })
    } catch (error) {
        res.status(400).json({
            status:"failed...!",
            message:error.message
        })
        console.log(error.message);
    }
}

const removephone = async(req,res)=>{
    try {
        const resp = await Phone.destroy({
            where:{
            ph_id: req.params.id
             },
          });
          res.status(200).json({
            status:"success",
            response:resp,
            message:"record deleted successfully"
          })
    } catch (error) {
        res.status(400).json({
            status:"failed...!",
            message:error.message
        })
        console.log(error.message);
    }
}


module.exports = {add,find,updateperson,updatephone,removeperson,removephone}

