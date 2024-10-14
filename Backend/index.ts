import app from './app';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 6001;
const MONGODB_URI = process.env.MONGODB_URI as string;

mongoose.connect(MONGODB_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
}).catch(error => {
  console.error('Error connecting to MongoDB:', error);
});