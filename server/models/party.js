const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const partySchema = new Schema({
    title: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: false 
    },
    leader:{
        type: String,
        required: false 
    },
    members:{
        type: Number,
        required: false
    }
},{});
const Party = mongoose.model('Party', partySchema);

module.exports = Party;