import express from 'express';
import {
  getItems,
  createItems,
  updateItems,
  deleteItems,
  likeItems,
} from '../controllers/itemsController.js';

const router = express.Router();

router.get('/', getItems);
router.post('/', createItems);
router.patch('/:id', updateItems);
router.delete('/:id', deleteItems);
router.patch('/:id/likeItems', likeItems);

export default router;
