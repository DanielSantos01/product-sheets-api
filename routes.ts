import { appController } from './controllers';
const express = require('express');
const router = express.Router();


router.get('/', appController.getHome);
router.get('/query', appController.query);
router.post('/put', appController.put);

export default router;
