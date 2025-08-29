import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { createPool } from './lib/db.js';
import authRoutes from './routes/auth.js';
import employeeRoutes from './routes/employees.js';
import metaRoutes from './routes/meta.js';
import { errorHandler } from './middleware/error.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

export const db = createPool();

app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api', metaRoutes);

app.use(errorHandler);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`EMS server listening on ${port}`));
