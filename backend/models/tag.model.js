import mongoose from "mongoose";


const tagSchema = new mongoose.Schema({
   tagTitle: {
      type: String,
      required: true,
   },
   color: {
      type: String,
   }
})

const Tag = mongoose.model("Tag", tagSchema);

export default Tag;