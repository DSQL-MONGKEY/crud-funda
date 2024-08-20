import express from 'express';
import dotenv from 'dotenv';

import dbConnection from './db/dbConnection';
import notesRoutes from './routes/notes.routes';
import todosRoutes from './routes/todos.routes';

dotenv.config();

const app = express();
const HOST = 'localhost';
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/todos', todosRoutes);
app.use('/api/notes', notesRoutes);

app.listen(PORT, () => {
   console.log(`Server listening on ${HOST}:${PORT}`);
   dbConnection();
})