const express = require('express');
const router = express.Router();
const { getConnectionStatus } = require('./db');

router.use(express.json());

const { Model } = require('./schema')

router.post('/post', async (req, res) => {
    try {
        const info = Model.create(req.body)
        console.log(info)
        res.send(info)
    }
    catch (err) {
        console.log(err)
    }
})

router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

router.get('/', async (req, res, next) => {
    try {
        const finalStatus = await getConnectionStatus();
        res.send(finalStatus);
    } catch (error) {
        next(error);
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
router.get('/info/:id', async (req, res) => {
    const _id = req.params.id
    Model.findById({ _id })
        .then(users => res.json(users))
        .catch(err => console.log(err))
})

app.delete('/delete/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const deletedUser = await userModel.findByIdAndDelete(_id);
        if (!deletedUser) {
            return res.status(404).send('User not found');
        }
        res.json(deletedUser);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }
});

router.put(`/updateUser/:id`, async (req, res) => {
    const _id = req.params.id
    Model.findByIdAndUpdate({ _id: _id }, {
        Img:req.body.Img,
        Resources: req.body.Resources,
        Description: req.body.Description,
        Links: req.body.Links

    })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})
router.get('/info', async (req, res) => {
    try {
        const test = await Model.find({})
        console.log(test)
        res.send(test)
    }
    catch (err) {
        console.log(err)
    }
})

module.exports = router;
