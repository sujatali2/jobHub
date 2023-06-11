const router = require('express').Router();
const userController = require('../controllers/userController');
const { verifyToken, verifyAndAuthorization, verifyAdmin } = require('../middleware/verifyToken');


router.put('/update/:id',verifyAndAuthorization, userController.updateUser);
router.delete('/delete/:id',verifyAndAuthorization, userController.deleteUser);
router.get('/get/:id',verifyAndAuthorization, userController.getUser);
router.get('/getAll',verifyAndAuthorization, verifyAdmin,  userController.getAllUser);

module.exports = router