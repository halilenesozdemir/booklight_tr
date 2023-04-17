import express from 'express';
// import * as pageController from '../controllers/pageController.js';
import { getIndexPage, getAboutPage } from '../controllers/pageController.js';

const router = express.Router();

router.route('/').get(getIndexPage);
router.route('/about').get(getAboutPage);

export default router;
