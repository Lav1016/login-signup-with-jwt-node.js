const express = require('express');
const app = express();
const studentRoute = require('./api/routes/student')
const facultyRoute = require('./api/routes/student-registration.js')
const bodyParser = require('body-parser')
const adminRoute = require('./api/routes/admin')
const middleware = require('./middleware/check-auth')


//  database connection ..............

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://lav:lav@cluster0.tlisc.mongodb.net/studentData', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection with database.') }
    else { console.log('Error in DB connection : ' + err) }
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use('/student',studentRoute)
app.use('/faculty',facultyRoute)

app.use('/admin',adminRoute)


app.use((req,res,next)=>{
    res.status(404).json({
        error:'bad request'
    })
})

app.listen(3000,()=> {
    console.log('server is running');
})
module.exports = app