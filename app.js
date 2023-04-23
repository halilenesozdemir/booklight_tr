import express from 'express';
import dotenv from 'dotenv';
import conn from './db.js';
import pageRoute from './routes/pageRoute.js';
import bookRoute from './routes/bookRoute.js';

dotenv.config();

// connection to the DB;
conn();

const app = express();
const port = process.env.PORT;

// ejs template engine
app.set('view engine', 'ejs');

// static files middleware
app.use(express.static('public'));
app.use(express.json());
// routes
app.use('/', pageRoute);
app.use('/books', bookRoute);

app.listen(port, () => {
  console.log(`Application running on port : ${port}`);
});
