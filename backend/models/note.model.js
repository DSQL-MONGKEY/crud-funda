import mongoose from "mongoose";


const noteSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true
   },
   subTitle: {
      type: String,
   },
   description: {
      type: String,
   },
   tags: {
      type: mongoose.Schema.ObjectId,
      ref: "Tag",
      default: [],
   }
}, { timestamps: true });

const Note = mongoose.model("Note", noteSchema);

export default Note;