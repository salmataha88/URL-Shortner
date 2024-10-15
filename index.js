import express from 'express';
import urlRouter from './Modules/URL/url.routes.js';
import { DBconnection } from './DB/connection.js';

const app = express();
const port = 3000;

DBconnection();

app.use(express.json());

app.use('/', urlRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
