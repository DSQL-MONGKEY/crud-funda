import express from "express";
import { createNote, deleteNote, editNote, getNoteById, getNotes } from "../controller/notes.controller.js";

const router = express.Router();

router.post('/add', createNote);
router.get('/show', getNotes);
router.get('/show/:id', getNoteById);
router.post('/edit/:id', editNote);
router.delete('/delete/:id', deleteNote);

export default router;