var express = require('express');
const{ user_register,user_login,user_delete, user_update,get_user } = require('../controller/logincontroller');
const { checktoken } = require('../middleware/auth');
var router = express.Router();


/* GET home page. */
router.post('/',user_login);

router.post('/register',user_register);

router.get('/delete/:id',user_delete);

router.post('/update/:id',user_update);

router.post('/view_user/:page_no',checktoken,get_user );



module.exports = router;
