const mongoose =require('mongoose');
//define the project schema 

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
    },
    work:{
        type:String,
        enum:["chef","waiter","manager"],
        required:true
    },
    mobile:{
        type:Number,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        
    },
    salary:{
        type:Number,
        required:true
    }
});

//create a model from the schema

const Person = mongoose.model('Person',personSchema);
module.exports=Person;



