import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/routes.js';
import { adminuser } from './models/model.js';

const app = express();
const port = 8081;
const url = 'mongodb://localhost:27017/admin'

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(url)
    .then(() => console.log('mongodb connected'))
    .catch((err) => console.log(`err: ${err}`));

app.use('/', router);

app.listen(port, () => {
    console.log(`server running on ${port}`);
});
