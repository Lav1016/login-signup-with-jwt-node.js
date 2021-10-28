const mongoose = require('mongoose');
var validator = require('validator');

const adminSchema = new mongoose.Schema({
    userame: {
        type: String,
    },
    password:{
        type:String,

    },
    phone:{
        type: Number,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        
    },
    gender:{
        type:String
    },
    role: {
        type: String,
        default: 'basic',
        enum: ["basic", "supervisor", "admin"]
       },
       accessToken: {
        type: String
       }
},
{timestamps: true}
)

module.exports = mongoose.model('Admin',adminSchema);