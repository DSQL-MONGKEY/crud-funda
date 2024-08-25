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
      res.status(500).json({ 
         error: `Internal server error occured: ${err.message}` 
      })
      console.log(`Error in createTag controller: ${err}`);
   }
}

export const getTags = async(req, res) => {
   try {
      const tags = await Tag.find()
         .sort({ createdAt: -1 });

      if(tags.length === 0) {
         res.status(200).json([]);
      }

      res.status(200).json(tags);
   } catch(err) {
      res.status(500).json({ 
         error: `Internal server error occured: ${err.message}` 
      })
      console.log(`Error in getTags controller: ${err}`);
   }
}

export const deleteTag = async(req, res) => {
   const { id } = req.params;

   try {
      const tag = await Tag.findById(id);

      if(!tag) {
         res.status(404).json({
            error: 'Tag not found'
         });
      }

      await Tag.findByIdAndDelete(id);

      res.status(200).json({
         message: 'Tag deleted successfully'
      })
   } catch(err) {
      res.status(500).json({ 
         error: `Internal server error occured: ${err.message}` 
      })
      console.log(`Error in deleteTag controller: ${err}`);
   }
}