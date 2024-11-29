const programSchema = require ('../model/Program');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getAllProgram = async(req,res)=>{
    try {
        const  program = await programSchema.find();
        res.status(200).json({msg:'you got all the programs', program});

    } catch (error) {
        console.log(error);
        res.end('error is showing');                
    }
}

const addProgram = async(req,res)=>{
    try {
        const newProgram = new programSchema(req.body);
        console.log("new program",req.body);
        await newProgram.save();
        res.status(200).json({msg:'you added new program', newProgram})
        
    } catch (error) {
        console.log(error);
        
    }
}

const getProgramById = async(req,res)=>{
    try {
        const {id}=req.params;
        console.log("id",id);
        const  program = await programSchema.findById(id);
        res.status(200).json({msg:'Program',program});       
    } catch (error) {
        console.log(error);
        res.send('you have a problem');
        
    }
}

const updateProgram = async (req,res)=>{
    try {
        const {id}=req.params;
        console.log("id",id);
        const updatedProgram = await programSchema.findByIdAndUpdate(id ,{$set:{...req.body}});
        console.log("updated program", updateProgram);
        res.status(200).json({msg:'program updated',updatedProgram});                
    } catch (error) {
        console.log(error);
        res.send ('You have a problem');        
    }
}

const deleteProgram = async(req,res)=>{
    try {
        const {id} = req.params;
        console.log("id",id);
        const deleteProgram = await programSchema.findByIdAndDelete(id);
        res.status(200).json({msg:'¨Program',deleteProgram});       
    } catch (error) {
        console.log(error);
        res.send('you  have a problem');
    }
}




module.exports = {getAllProgram, addProgram,getProgramById,updateProgram,deleteProgram}