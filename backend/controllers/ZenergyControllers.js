const zenergySchema = require ('../model/Zenergy');
const  bcrypt =  require ('bcrypt');
const jwt = require('jsonwebtoken');

const getAllZenergy = async(req,res)=>{
    try {
        const zenergy = await zenergySchema.find();
        res.status(200).json({msg:'you have got all the zenergies ',zenergy});

    } catch (error) {
        console.log(error);
        res.send('error is showing');                
    }
}

const addZenergy = async(req,res)=>{
    try {
        const newZenergy = new zenergySchema(req.body);
        console.log("new zenergy", req.body);
        await newZenergy.save();
        res.status(200).json({msg:'you added new zenergy ', newZenergy});

        
    } catch (error) {
        console.log(error);
        res.send('you have a problem');
        
    }
}



const getZenergyById =async(req,res)=>{
    try {
        const{id}  = req.params;
        console.log("id",id);
        const zenergy =await zenergySchema.findById(id);
        console.log("zenergy", zenergy);

        res.status(200).json({msg: 'zenergy', zenergy});
        
    } catch (error) {
        console.log(error);
        res.send('you have a problem');        
    }
}


const  updateZenergy = async(req,res)=>{
    try {
        const {id} = req.params;
        console.log("id",id);
        const updatedZenergy= await zenergySchema.findByIdAndUpdate(id,{$set: {...req.body}});
        console.log("updated zenergy", updatedZenergy);
        res.status(200).json({msg:'zenergy updated', updatedZenergy})
        
    } catch (error) {
        console.log(error);
        res.send('you have a problem');
        
    }
}

const deleteZenergy = async(req,res)=>{
    try {
        const {id}=req.params;
        console.log("id",id);
        const deletedZenergy = await zenergySchema.findByIdAndDelete(id);
        res.status(200).json({msg:'zenegy',deletedZenergy})
        
    } catch (error) {
        console.log(error);
        res.send('you have a problem');
        
    }
}

module.exports={getAllZenergy,addZenergy,getZenergyById,updateZenergy,deleteZenergy};