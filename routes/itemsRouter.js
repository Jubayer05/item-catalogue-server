import express from 'express';
import {
  getItems,
  createItems,
  updateItems,
  deleteItems,
  likeItems,
} from '../controllers/itemsController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getItems);
router.post('/', auth, createItems);
router.patch('/:id', auth, updateItems);
router.delete('/:id', auth, deleteItems);
router.patch('/:id/likeItems', auth, likeItems);

export default router;
