import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
  title: String,
  description: String,
  creator: String,
  name: String,
  tags: [String],
  selectedFiles: String,
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const ItemsCatalogue = mongoose.model('ItemsCatalogue', itemSchema);

export default ItemsCatalogue;
