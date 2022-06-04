import express from 'express';
import cors from 'cors';
import productRouter from './routers/product.routes';
import usersRouter from './routers/users.routes';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  return res.send('Hello World');
});

app.use('/product', productRouter);
app.use('/users', usersRouter)

export default app;
