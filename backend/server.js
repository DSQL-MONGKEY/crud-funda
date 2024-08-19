import express from 'express';


const app = express();
const HOST = 'localhost';
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/test', (req, res) => {
   res.status(200).json({ "message": "done" })
})

app.listen(PORT,() => {
   console.log(`Server listening on ${HOST}:${PORT}`)
})