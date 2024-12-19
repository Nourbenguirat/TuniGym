const express = require('express');
const zenergyRoute = express.Router();
const { getAllZenergy, addZenergy,getZenergyById,updateZenergy,deleteZenergy} = require('../controllers/ZenergyControllers')

const {AuthValidation} =require('../middleware/AuthValidation');
const {SignInValidation , SignUpValidation,Validation} = require ('../middleware/SignUpValidation');


const {  handleValidation } = require('../middleware/EmailValidation');




zenergyRoute.use(express.json());




//http://localhost:4000/zenergy/allZenergy
zenergyRoute.get('/allZenergy',getAllZenergy)
//http://localhost:4000/zenergy/addZenergy

zenergyRoute.post('/addZenergy',  handleValidation, addZenergy);


// zenergyRoute.post('/addZenergy', SignUpValidation, Validation, addZenergy)


//http://localhost:4000/zenergy/getZenergyById/:id
zenergyRoute.get('/getZenergyById/:id',getZenergyById)
//http://localhost:4000/zenergy/updateZenergy/:id
zenergyRoute.put('/updateZenergy/:id',updateZenergy)
//http://localhost:4000/zenergy/deleteZenergy/:id
zenergyRoute.delete('/deleteZenergy/:id',deleteZenergy)

//http://localhost:4000/zenergy/myaccount

zenergyRoute.get('/myaccount', AuthValidation, async (req, res) => {
    res.send(res.user);  // Assuming the user is stored in 'res.user' after passing through 'AuthValidation'
    console.log("this is the req :", res.user);
});


module.exports = zenergyRoute;