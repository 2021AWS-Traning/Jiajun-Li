import axios from 'axios';
import express from 'express';

const app = express();
app.use(express.json());
app.get('/', (req: any, res: any) => {
axios.get('http://backend:5000')
    .then(function (response) {
      res.send("get response from backend!" + response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
});
app.listen(4000, () => console.log('Server is up and running'));
