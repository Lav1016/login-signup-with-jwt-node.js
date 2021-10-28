
const controller = require('../controllers/adminsignup');

module.exports = (router) => {
    

    router.post("/signUp", function (req, res) {
        controller.signUp(req.body);
    });

  
}
