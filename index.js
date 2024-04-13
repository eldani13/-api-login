import express from "express";
import { connectDB } from './config/database.js';
import bodyParser from "body-parser";
import { PORT } from './config/config.js';
import loginRoutes from './routes/loginRoutes.js';

const app = express();

app.use(bodyParser.json());
connectDB();

app.use('/api/login', loginRoutes);

app.listen(PORT, () => {
  console.log(`El puerto ${PORT} esta siendo escuchado`);
});
