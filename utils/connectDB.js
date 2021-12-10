import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Server open!');
  } catch (error) {
    throw error;
  }
};

export default connectDB;
