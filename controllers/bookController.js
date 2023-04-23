import Book from '../models/bookModel.js';

const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json({
      succeeded: true,
      book
    });
  } catch (error) {
    res.status(500).json({
      succeeded: false,
      error
    });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({
      succeeded: true,
      books
    });
  } catch (error) {
    res.status(500).json({
      succeeded: false,
      error
    });
  }
};

export { createBook, getAllBooks };
