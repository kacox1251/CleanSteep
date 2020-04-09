const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
      type: String,
      trim: true,
      unique: true,
      required: "Username is Required"
    },
  
    email: {
      type: String,
      trim: true,
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
  
    password: {
      type: String,
      trim: true,
      required: "Password is Required",
      validate: [({ length }) => length >= 6, "Password should be longer."]
    },
  
    userCreated: {
      type: Date,
      default: Date.now
    }
  });

  const User = mongoose.model("User", UserSchema);

  module.exports = User;
