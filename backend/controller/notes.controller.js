import mongoose from "mongoose";
import Note from "../models/note.model.js";
import Tag from "../models/tag.model.js";



export const createNote = async(req, res) => {
   const { title, subTitle, description, tags } = req.body;
   
   try {
      const newNote = new Note({
         title,
         subTitle,
         description,
         tags,
      });
      newNote.save();

      res.status(201).json(newNote);
   } catch(err) {
      res.status(500).json({ 
         error: `Internal server error occured: ${err.message}` 
      })
      console.log(`Error in createNote controller: ${err}`);
   }
}

export const getNotes = async(req, res) => {
   try {
      const notes = await Note.find()
         .sort({ createdAt: -1 });

      if(notes.length == 0) {
         res.status(200).json([]);
      }

      res.status(200).json(notes);
   } catch(err) {
      res.status(500).json({ 
         error: `Internal server error occured: ${err.message}` 
      })
      console.log(`Error in getNotes controller: ${err}`);
   }
}

export const getNoteById = async(req, res) => {
   const { id } = req.params; 
   
   try {
      const note = await Note.findById(id);

      if(!note) {
         return res.status(404).json({ 
            error: "Note not found"
         })
      }

      console.log(note)

      res.status(200).json(note);
   } catch(err) {
      res.status(500).json({ 
         error: `Internal server error occured: ${err.message}` 
      })
      console.log(`Error in getNoteById controller: ${err}`);
   }
}

export const editNote = async(req, res) => {
   const { id } = req.params;
   const { title, subTitle, description, tags } = req.body;
   
   try {
      let note = await Note.findById(id);

      if(!note) {
         return res.status(404).json({
            error: "Note not found"
         });
      }

      note.title = title || note.title;
      note.subTitle = subTitle || note.subTitle;
      note.description = description || note.description;
      note.tags = tags || note.tags;

      note = await note.save();

      res.status(200).json(note);
   } catch(err) {
      res.status(500).json({ 
         error: `Internal server error occured: ${err.message}` 
      })
      console.log(`Error in editNote controller: ${err}`);
   }
}

export const deleteNote = async(req, res) => {
   const { id } = req.params;
   
   try {
      const note = await Note.findById(id);

      if(!note) {
         return res.status(404).json({
            error: 'Post not found'
         });
      }

      await Note.findByIdAndDelete(id)

      res.status(200).json({ message: 'Post deleted successfully' });
   } catch(err) {
      res.status(500).json({ 
         error: `Internal server error occured: ${err.message}` 
      })
      console.log(`Error in deleteNote controller: ${err}`);
   }
}