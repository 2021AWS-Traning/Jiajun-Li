import express from 'express';
import { connectDB } from './repositories/connection';

const app = express();
app.get('/', (req: any, res: any) => {
  res.send('Hello World!');
});
app.listen(5000, () => console.log('Server is up and running'));

(async () => {
  await connectDB();
  console.log("DB CONNECTED!!!")
})();
