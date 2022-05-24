import mongoose from 'mongoose';
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: String,
  author: String,
});

export const BookModel = mongoose.model('Book', bookSchema);
