import express = require('express');
import * as bodyParser from 'body-parser';
import { createObject, deleteObject, getObjects, updateObject } from './controller/motoController';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      return res.status(200).json({});
    }
    next();
});

app.get('/objects', getObjects);
app.post('/objects', createObject);
app.put('/objects/:id', updateObject);
app.delete('/objects/:id', deleteObject);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
