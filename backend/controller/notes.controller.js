import mongoose from "mongoose";
import Note from "../models/note.model.js";
import Tag from "../models/tag.model.js";



export const createNote = async(req, res) => {
   try {
      const { title, subTitle, description, keyTags } = req.body;

      const newNote = new Note({
         title,
         subTitle,
         description,
         keyTags,
      });
      newNote.save();

      res.status(201).json(newNote);
   } catch(err) {
      console.log(`Error in createNote controller: ${err.message}`);
      res.status(500).json({ 
         error: `Internal server error occured: ${err.message}` 
      })
   }
}

export const getNotes = async(req, res) => {
   try {
      const notes = await Note.find({});
      res.status(200).json({
         data: {
            notes
         }
      })
   } catch(err) {
      console.log(`Error in getNotes controller: ${err.message}`);
      res.status(500).json({ 
         error: `Internal server error occured: ${err.message}` 
      })
   }
}