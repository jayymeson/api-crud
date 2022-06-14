import express from 'express';
import cors from 'cors';
import productRouter from './routers/product.routes.js';
import usersRouter from './routers/users.routes.js';
import loginRouter from './routers/login.routes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  return res.send('Hello World');
});

app.use('/product', productRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter)

export default app;
