import Book from '../models/bookModel.js';

const createBook = (req, res) => {
  const book = Book.create(req.body);
  res.status(201).json({
    succeeded: true,
    book
  });
};

export { createBook };
