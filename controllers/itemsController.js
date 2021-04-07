import mongoose from 'mongoose';
import ItemsCatalogue from '../models/itemsCatalogue.js';

export const getItems = async (req, res) => {
  try {
    const itemsCatalogue = await ItemsCatalogue.find();

    res.status(200).json(itemsCatalogue);
  } catch (err) {
    res.status(404).json({
      err,
    });
  }
};

export const createItems = async (req, res) => {
  const post = req.body;
  console.log(post);
  const newPost = new ItemsCatalogue(post);
  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const updateItems = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('NO post with that id');

  const updatedPost = await ItemsCatalogue.findByIdAndUpdate(_id, post, {
    new: true,
  });
  res.status(200).json(updatedPost);
};

export const deleteItems = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('NO post with that id');

  await ItemsCatalogue.findByIdAndDelete(id);

  res.status(204).send('Post deleted successfully');
};

export const likeItems = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send('NO post with that id');
  }

  const post = await ItemsCatalogue.findById(id);
  const updatedPost = await ItemsCatalogue.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );

  res.status(200).json(updatedPost);
};
