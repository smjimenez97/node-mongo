const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema({
    registration:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    model:{
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Vehicle', vehicleSchema);