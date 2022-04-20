import { Schema, model, Types as MongooseTypes } from 'mongoose';
import type { UserInterface } from '../types/User';

import { isEmail } from '../validations';

const UserSchema = new Schema<UserInterface>(
  {
    name: {
      first: {
        type: String,
        min: 2,
        max: 64,
        required: true,
      },
      last: {
        type: String,
        min: 2,
        max: 64,
        required: true,
      },
    },
    username: {
      type: String,
      min: 3,
      max: 25,
      unique: true,
    },
    role: {
      type: Number,
      enum: [0, 1],
    },
    email: {
      type: String,
      unique: true,
      validate: [isEmail, 'this email not valid'],
    },
    password: {
      type: String,
      required: true,
    },
    tags: MongooseTypes.Array,
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const User = model('User', UserSchema);

export default User;
