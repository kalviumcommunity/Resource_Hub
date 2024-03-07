const express = require('express');
const router = express.Router();
const { getConnectionStatus } = require('./db');

router.use(express.json());

const {Model} = require('./schema')

router.post('/post' , async(req,res) => {
    try{
        const info = Model.create(req.body)
        console.log(info)
        res.send(info)
    }
    catch(err){
        console.log(err)
    }
})
// Error handling middleware
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

router.get('/', async (req, res, next) => {
    try {
        const finalStatus = await getConnectionStatus();
        res.send(finalStatus);
    } catch (error) {
        next(error); // Pass error to the error handling middleware
    }
});

router.get("/ping", (req, res) => {
    res.send('pong');
});

router.post("/post", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

router.post('/post', async (req, res, next) => {
    try {
        const info = Model.create(req.body)
        console.log(info)
        res.send(info)
    } catch (error) {
        next(error);  
    }
});

router.delete('/delete', async (req, res) => {
    res.send('info deleted successfully');
});

router.get('/info',async(req,res)=>{
    try{
        const test = await Model.find({})
        console.log(test)
        res.send(test)
    }
    catch(err){
        console.log(err)
    }
})

module.exports = router;
