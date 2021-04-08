import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import router from './routes/itemsRouter.js';

const app = express();
dotenv.config();

app.get('/', (req, res) => {
  res.send('Hello There, Welcome to the heroku server');
});

app.use(express.json());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/items', router);

const CONNECTION_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.PASSWORD}@cluster0.5wv0c.mongodb.net/${process.env.DB_COLLECTION}?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on Port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

mongoose.set('useFindAndModify', false);
