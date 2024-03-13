const express = require('express');
const router = express.Router();
const { getConnectionStatus } = require('./db');
const Joi = require('joi');
const { Model } = require('./schema');
const { model } = require('./userSchema');


router.use(express.json());

// Define the Joi schema as per your data model
const modelSchema = Joi.object({
    Img: Joi.string().required(),
    Resources: Joi.string().required(),  
    Description: Joi.string().required(),
    Links: Joi.string().required() 
});

// POST route for creating new entries with Joi validation
router.post('/post', async (req, res, next) => {
    const { error, value } = modelSchema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    try {
        const info = await Model.create(value);  
        res.send(info);
    } catch (error) {
        next(error);
    }
});

// PUT route for updating entries by ID, with Joi validation
router.put('/updateUser/:id', async (req, res) => {
    const _id = req.params.id;
    const { error, value } = modelSchema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    try {
        const updatedUser = await Model.findByIdAndUpdate({_id:_id}, value);
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Middleware for handling errors
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// GET route for testing connection status
router.get('/', async (req, res, next) => {
    try {
        const finalStatus = await getConnectionStatus();
        res.send(finalStatus);
    } catch (error) {
        next(error);
    }
});

// Simple ping test route
router.get("/ping", (req, res) => {
    res.send('pong');
});

// GET route to fetch an entry by ID
router.get('/info/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const user = await Model.findById(_id);
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error fetching user data" });
    }
});

// DELETE route to remove an entry by ID
router.delete('/delete/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const deletedUser = await Model.findByIdAndDelete(_id);
        res.json({ message: "User successfully deleted", user: deletedUser });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error deleting user data" });
    }
});

// GET route to list all entries
router.get('/info', async (req, res) => {
    try {
        const users = await Model.find({});
        res.json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error fetching users data" });
    }
});

router.post('/signup',async(req,res)=>{
    try{
        const user = await model.create({
            username:req.body.username,
            password:req.body.password
        })
        res.send(user)
    }catch(err){
        console.error(err)
    }
  
})
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await model.findOne({ username, password });
        
        if (!user) {
            return res.status(401).json({ error: 'Invalid username / password' });
        }

        
        res.status(200).json({ user });
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/logout',(req,res)=>{
    res.clearCookie('username')
    res.clearCookie('password')

    res.status(200).json({message:'Logout succesful'})
})

module.exports = router;