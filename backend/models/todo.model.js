import mongoose from "mongoose";


const todoSchema = mongoose.Schema({
   title: {
      type: String,
      required: true,
      minLength: 5
   },
   description: {
      type: String,
      default: ""
   },
   status: {
      type: Boolean,
      default: false,
   },
}, { timestamps: true });

const Todo = mongoose.model("todo", todoSchema);

export default Todo;