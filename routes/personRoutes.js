const express = require('express')
const router =express.Router();
const Person = require("./../models/Person");

//POST router to add a person


router.post('/',async(req,res)=>{
    try{
      const data =req.body
  
      const newPerson = new Person(data);
  
      const response =await newPerson.save();
      console.log("data saved");
      res.status(200).json(response);
  
  
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal server Error"});
    }
    
  })

  //GET router to add a person

router.get('/',async(req,res)=>{
    try{
      const data =await Person.find();
      console.log('data fetched');
      res.status(200).json(data);
  }catch(err){
    console.log(err);
    res.status(500).json({error: "Internal server Error"});
  }
  })

  
 //GET router to add a worktype 

router.get("/:workType",async(req,res)=>{
  
    try{
      const workType=req.params.workType;
      if (workType=="chef"|| workType=="waiter"|| workType=="manager"){
  
        const response =await Person.find({work:workType});
        console.log("response fetched");
        res.status(200).json(response);
      
      }else{
          res.status(404).json({error:"invalid work type"});
      }
    }catch(err){
      console.log(err);
      res.status(500).json({error: "Internal server Error"});
  }
  
  })


//UPDATE METHOD  CODE 

  router.put("/:id",async(req,res)=>{
    try{
        const PersonId=req.params.id;
        const updatedPersonData=req.body;
        const response=await Person.findByIdAndUpdate(PersonId,updatedPersonData,{new:true,
            runValidators:true
        });

            if(!response){
                return res.status(404).json({error: "Person not found"});
            }

            console.log("data updated");
            res.status(200).json(response);
        }
    catch(err){
                console.log(err);
                res.status(500).json({error: "Internal server Error"});
            }
            
            })

// DELETE OPERATION CODE 

router.delete("/:id",async(req,res)=>{
    try{
        const personId=req.params.id;

        const response=await Person.findByIdAndRemove(personId);
        if(!response){
            return res.status(404).json({error: "Person not found"});
        }

        console.log("person deleted successfully");
        res.status(200).json(response);
    }
catch(err){
            console.log(err);
            res.status(500).json({error: "Internal server Error"});
        }
        
        })


  module.exports=router;
  