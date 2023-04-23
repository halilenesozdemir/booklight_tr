import express from 'express';
import * as bookController from '../controllers/bookController.js';

const router = express.Router();

router.route('/').post(bookController.createBook).get(bookController.getAllBooks);
export default router;
