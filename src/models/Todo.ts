import { Schema, model } from 'mongoose';

import type { TodoInteface } from '../types/Todo';

const TodoSchema = new Schema<TodoInteface>(
  {
    title: {
      type: String,
      min: 1,
      max: 64,
    },
    content: {
      type: String,
      min: 1,
      max: 5000,
    },
    status: {
      type: Number,
      enum: [0, 1],
    },
    tags: {
      type: [String],
      max: 10,
    },
    dueDate: Date,
    reminder: {
      date: Date,
      loop: {
        type: Number,
        enum: [0, 1, 2, 3],
      },
    },
  },
  { timestamps: true }
);

const Todo = model('Todo', TodoSchema);

export default Todo;
