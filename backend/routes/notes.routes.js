import express from "express";

const router = express.Router();

router.get('/show');
router.post('/add');
router.post('/edit');
router.delete('/delete');

export default router;