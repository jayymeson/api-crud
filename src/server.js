import app from './app';
import conectDataBase from './database';

const port = 3001;

app.listen(port, () => {
  conectDataBase();
  console.log(`API is running on port http://localhost:${port}`);
});
