const express = require('express');
const vehicleSchema = require("../models/vehicle");

const router = express.Router();

//create vehicle
router.post("/vehicles", (req, res) =>{
    const vehicle = vehicleSchema(req.body);
    console.log(req.body);
    vehicle
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//get all vehicles
router.get("/vehicles", (req, res) =>{
    vehicleSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//get a vehicle
router.get("/vehicles/:id", (req, res) =>{
    const {id} = req.params;
    vehicleSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//uodate a vehicle
router.put("/vehicles/:id", (req, res) =>{
    const {id} = req.params;
    const {registration, brand, model, color} = req.body;
    vehicleSchema
        .updateOne({_id: id},{$set: {registration, brand, model, color}})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//delete a vehicle
router.delete("/vehicles/:id", (req, res) =>{
    const {id} = req.params;
    vehicleSchema
        .remove({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});



module.exports = router;