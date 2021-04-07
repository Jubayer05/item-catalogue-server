import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
  title: String,
  description: String,
  creator: String,
  tags: [String],
  selectedFiles: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const ItemsCatalogue = mongoose.model('ItemsCatalogue', itemSchema);

export default ItemsCatalogue;
