//backend/src/models/todo.model.js
import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  title: String,
  description: String,
  priority: String,
  dueDate: Date,
  category: String,
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export const Todo = mongoose.model("Todo", todoSchema);