import mongoose from 'mongoose';

const { Schema } = mongoose;

const bookSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  uploadedAt: {
    type: Date,
    default: Date.now()
  }
});

const Book = mongoose.model('Book', bookSchema);
export default Book;
