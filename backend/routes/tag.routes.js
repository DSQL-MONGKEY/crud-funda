import express from "express";
import { createTag, deleteTag, getTags } from "../controller/tag.controller.js";



const router = express.Router();

router.get('/show', getTags);
router.post('/add', createTag);
router.delete('/add/:id', deleteTag);

export default router;
