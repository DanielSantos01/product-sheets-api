const controller =  require('./controllers');
const expresss = require('express');
const router = expresss.Router();

router.get('/', controller.getHome);
router.get('/query', controller.query);
router.post('/put', controller.put);

module.exports = router;
