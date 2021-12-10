import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const messageScheme = new Schema(
  {
    url: String,
    message: String,
    password: String,
    date: Date,
  },
  { versionKey: false, unique: true },
);

export default mongoose.models.Messages || mongoose.model('Messages', messageScheme);
