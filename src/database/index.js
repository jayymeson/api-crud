import mongoose from 'mongoose';

const conectDataBase = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDB connected');
    })
    .catch((err) => {
      console.log(`Error connecting to MongoDB: ${err}`);
    });
};

export default conectDataBase;
