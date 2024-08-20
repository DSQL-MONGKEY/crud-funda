import Tag from "../models/tag.model.js";

export const createTag = async(req, res) => {
   try {
      const { tagTitle, color } = req.body;

      const newTag = new Tag({
         tagTitle,
         color,
      })
      newTag.save();

      res.status(201).json(newTag)
   } catch(err) {
      console.log(`Error in createTag controller: ${err.message}`);
      res.status(500).json({ 
         error: `Internal server error occured: ${err.message}` 
      })
   }
}