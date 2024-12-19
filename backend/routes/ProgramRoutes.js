const express = require('express');
const programRoute = express.Router();
const {getAllProgram,addProgram,getProgramById ,updateProgram ,deleteProgram} = require ('../controllers/ProgramControllers')

const { AuthValidation } = require('../middleware/AuthValidation');  
const { ProgramValidation } = require('../middleware/ProgramValidation');  

programRoute.use(express.json());

//http://localhost:4000/program/allProgram
programRoute.get('/allProgram', getAllProgram);
//http://localhost:4000/program/addProgram
programRoute.post('/addProgram',  addProgram);
//http://localhost:4000/program/getProgramById/:id
programRoute.get('/getprogrambyid/:id', getProgramById);
//http://localhost:4000/program/updateProgram/:id/
programRoute.put('/updateProgram/:id', updateProgram);
//http://localhost:4000/program/deleteProgram/:id
programRoute.delete('/deleteProgram/:id', deleteProgram);

//http://localhost:4000/program/myaccount
programRoute.get('/myaccount', AuthValidation, async (req, res) => {
    res.send(res.user);  // Send the authenticated user
    console.log("This is the req:", res.user);
});


module.exports = programRoute;
