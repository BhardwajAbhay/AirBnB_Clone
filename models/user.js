//For the Authorization and Authentication

const { types, required } = require("joi");
const mongoose = require("mongoose");
const passportlocalmongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    types: String,
    required: true,
  },
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);
