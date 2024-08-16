const mongoose=require('mongoose');

//Define the mongo db connection url

const mongoURL='mongodb://localhost:27017/hotels'

// set up mongo db connection 

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection;
//define event listener for database 
db.on("connected",()=>{
    console.log("connected to mongoDB server");
});
db.on("error",(err)=>{
    console.error("mongoDB connection error:",err);
});
db.on("disconnected",()=>{
    console.log("mongoDB connection disconnected");
});
//export a database connection 
module.exports=db;