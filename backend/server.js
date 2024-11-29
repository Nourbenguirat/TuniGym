const express =require('express');
const app =express();
const ConnectDb =require ('./config/ConnectDb');
const cors =require('cors');
const zenergy = require ('./model/Zenergy');
const program = require ('./model/Program');
const user =require ('./model/User');

const userRoute =require('./routes/UserRoutes');
const programRoute =require('./routes/ProgramRoutes');
const healthRoute =require('./routes/ZenergyRoutes');


require('dotenv').config();

const port =process.env.PORT;

app.use(express.json());

ConnectDb();
app.use(cors());



//// begin zone MULTER///

 const multer =require ("multer");

 const storage =multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null,"../frontend/public/images");
    },
    filename:function(req,file,cb){
        const uniqueSuffix =Date.now();
        cb(null,uniqueSuffix + file.originalname);
    },
 });

 const upload = multer({ storage: storage });

 app.post("/upload-image", upload.single("imageUser"),async(req,res)=>{
    try {
        const imageName =req.file.filename;
        const neededImage =imageName.toString();
        res.end(`${neededImage}`);
    } catch (error) {
        console.log(error);
        res.end("you have a problem");  
    }
 });
  app.post ('/upload-images' ,upload.array('images',10),(req,res)=>{
    try {
        const uploadedFiles = req.files;
        if(!uploadedFiles){
            return res.status(400).send('No files were upload.')  
        }
        const imageArray = uploadedFiles.map(file =>({
            name:file.originalname,
            // data:file.buffer.toString(),
        }));
        res.json({sucess:true ,uploadedFiles});

    } catch (error) {
        console.log(error);
        res.send('you have a problem'); 
    }
  });


  /// end eonr MULTER////

  ////////route principale //////////
  app.use('/user', userRoute);
  app.use('/program',programRoute);
  app.use('/zenergy', zenergyRoute);


app.listen(port,()=>{
    console.log(`the application is correctly running on the port ${port}`);
    
})