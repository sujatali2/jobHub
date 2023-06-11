const router = require('express').Router();
const jobController = require('../controllers/jobController');
const { verifyToken, verifyAndAuthorization, verifyAdmin } = require('../middleware/verifyToken');

router.post('/',verifyAdmin, jobController.createJob);
router.put('/:id',verifyAdmin, jobController.updateJob);
router.delete('/:id',verifyAdmin, jobController.deleteJob);
router.get('/:id',verifyAdmin, jobController.getJob);
router.get('/',verifyAdmin,  jobController.getAllJob);
router.get('/search/:key',verifyAdmin,  jobController.searchJob);

module.exports = router