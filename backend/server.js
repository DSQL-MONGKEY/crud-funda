import express from "express";
import dotenv from "dotenv";

import dbConnection from "./db/dbConnection.js";
import notesRoutes from "./routes/notes.routes.js";
import todosRoutes from "./routes/todos.routes.js";
import tagRoutes from "./routes/tag.routes.js";

dotenv.config();

const app = express();
const HOST = 'localhost';
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/todos', todosRoutes);
app.use('/api/notes', notesRoutes);
app.use('/api/tag', tagRoutes);

app.listen(PORT, () => {
   console.log(`Server listen on ${HOST}:${PORT}`);
   dbConnection();
})