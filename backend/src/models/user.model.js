import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// find user by email
userSchema.statics.findByEmail = function (email) {
  return this.findOne({ email });
};

// create new user
userSchema.statics.createUser = function ({ name, email, passwordHash }) {
  return this.create({ name, email, passwordHash });
};

export const User = mongoose.model("User", userSchema);
