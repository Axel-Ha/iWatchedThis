//CONFIGURER L'APPLICATION EXPRESS (MIDDLEWARE, ROUTES, ETC)
import animesRoutes from './routes/animes'
// src/app.ts
import express from 'express';
import cors from 'cors';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/api', (_req, res) => {
  res.status(200).json({ status: 'ok' });
  console.log('hello from our server')
});

app.use('/api/animes', animesRoutes);

export default app;
