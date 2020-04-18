const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
mongoose.Promise = Promise;

// definte userSchema
const UserSchema = new Schema({
    username: {
      type: String,
      trim: true,
      unique: true,
      required: "Username is Required",
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
  
    password: {
      type: String,
      trim: true,
      required: "Password is Required",
      validate: [({ length }) => length >= 6, "Password should be longer."]
    },

    routes: [{ type: Schema.Types.ObjectId, ref: "Route" }]
  });

  // Define schema methods
UserSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  }, 
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
}

// Define hooks for pre-saving
UserSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/user.js hashPassword in pre save');
		
		this.password = this.hashPassword(this.password)
		next();
	}
})

const User = mongoose.model("User", UserSchema);

module.exports = User;
