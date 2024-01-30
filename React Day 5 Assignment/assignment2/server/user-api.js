const express = require("express");
const UserModel = require('./models/users');
const router = express.Router();

router.get("/getdata", async (req,res)=>{
    let result = await UserModel.find({}, { "_id": 0 });
    try {
        console.log("[Read All] - No. of  items get from database : " + result.length);
        res.send(result);
    }
    catch (error) {
        res.status(500).send(error);    
    }
});


router.post('/validate',async function(req, res){
    const uid = parseInt(req.body.uid);
    const pwd = req.body.pwd;
    try {
        const user = await UserModel.findOne({ uid, pwd });
        if (user) {
            res.send(user);
        } else {
          res.json({ success: false, message: 'Invalid credentials' });
        }
      } catch (error) {
        res.json({ success: false, message: 'Server error' });
      }
});

router.post('/signUp', async function (req, res) {
    const { uid, pwd } = req.body;
  
    try {
      // Check if user with the same uid already exists
      const existingUser = await UserModel.findOne({ uid });
      if (existingUser) {
        return res.json({ success: false, message: 'User already exists' });
      }
  
      // Create a new user
      const newUser = new UserModel({ uid, pwd });
      await newUser.save();
  
      res.json({ success: true, message: 'User registered successfully' });
    } catch (error) {
      res.json({ success: false, message: 'Server error' });
    }
  });

module.exports = router;