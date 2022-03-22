import express from 'express';
import mainRoutes from './routes/routes.js';

const app = express();
export const port = process.env.port || 3000;

// body parsing //
app.use(express.json());

// API routing
app.use('/dimashki', mainRoutes);

export default app;
