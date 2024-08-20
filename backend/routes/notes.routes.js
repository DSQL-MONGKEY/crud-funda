import express from "express";
import { createNote, getNotes } from "../controller/notes.controller.js";

const router = express.Router();

router.post('/add', createNote);
router.get('/show', getNotes);
router.get('/show/:id');
router.post('/edit/:id');
router.delete('/delete/:id');

export default router;