import express from 'express';
import cors from 'cors';
import productRouter from './routers/product.routes';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  return res.send('Hello World');
});

app.use('/all-product', productRouter);

export default app;
