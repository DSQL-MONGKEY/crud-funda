import express from "express";


const router = express.Router();


router.get('/show');
router.post('/add');
router.post('/edit/:id');
router.delete('/delete/:id');

export default router;