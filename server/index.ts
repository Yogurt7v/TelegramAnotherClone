import express from 'express';
import 'dotenv/config';
import http from 'http';
import cors from 'cors';

const app = express();
const server = http.createServer(app);
const { PORT } = process.env || 4000;

app.use(cors());

app.listen(PORT, () => {
  console.log(`Backend server запущен на http://localhost:${PORT}`);
});
