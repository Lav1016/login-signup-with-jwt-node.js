const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamp = require('mongoose-timestamp');
const employeeSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    gender:{
        type:String
    },
    email: {
        type: String,
        required: true
    },
    address:{
        type: String,
    },
    collage:{
        type: String
    },
    course:{
        type:String
    },
    hourlyrate:{  
    type: Number
    },
    totalhour:{
        type:Number
    },
    phone:{
        type: Number,
        required : true
    },
});
employeeSchema.plugin(timestamp);

module.exports = mongoose.model('Employee',employeeSchema);

// const employee = new employeeModal({Name:'luv',
// gender:'male',
// email:'luvec1016@gmail.com',
// address:'new delhi',
// collage:'uit allahabad',
// course:'b tech',
// hourlyrate:10,
// totalhour:16,
// phone:8006535111
// });
// console.log(employee);