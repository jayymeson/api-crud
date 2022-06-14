import 'dotenv/config';
import app from './app.js';
import conectDataBase from './database/index.js';

const port = process.env.PORT || 3001;

app.listen(port, () => {
  conectDataBase();
  if (!process.env.PORT) {
    console.log(`API is running on port http://localhost:${port}`);
  }
});
