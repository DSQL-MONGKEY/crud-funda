import express from "express";
import { createTag } from "../controller/tag.controller.js";



const router = express.Router();

router.get('/show');
router.post('/add', createTag);
router.delete('/add/:id');

export default router;
