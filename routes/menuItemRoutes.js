const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

// GET method to fetch all menu items
router.get('/', async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server Error" });
  }
});

// GET method to fetch menu items by taste
router.get('/:taste', async (req, res) => {
  try {
    const taste = req.params.taste;
    if (taste === "sweet" || taste === "spicy" || taste === "sour") {
      const response = await MenuItem.find({ taste: taste });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid taste type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server Error" });
  }
});

// POST method to add a new menu item
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new MenuItem(data);
    const response = await newMenu.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server Error" });
  }
});


//UPDATE CODE FOR MENU

router.put("/:id",async(req,res)=>{
    try{
        const MenuId=req.params.id;
        const updatedMenuData=req.body;
        const response=await MenuItem.findByIdAndUpdate(MenuId,updatedMenuData,{new:true,
            runValidators:true
        });

            if(!response){
                return res.status(404).json({error: "Menu not found"});
            }

            console.log("data updated");
            res.status(200).json(response);
        }
    catch(err){
                console.log(err);
                res.status(500).json({error: "Internal server Error"});
            }
            
            })




//DELETE CODE FRO MENU

router.delete("/:id",async(req,res)=>{
    try{
        const MenuId=req.params.id;

        const response=await MenuItem.findByIdAndDelete(MenuId);
        if(!response){
            return res.status(404).json({error: "Menu not found"});
        }

        console.log("data deleted");
        res.status(200).json({message:"Menu deleted successfully"});
    }
catch(err){
            console.log(err);
            res.status(500).json({error: "Internal server Error"});
        }
        
        })






module.exports = router;
