const mongoose = require("mongoose");

//
mongoose.connect(`mongodb://127.0.0.1:27017/mongoPractice`);

//user data need to add using the schema
const userSchema = mongoose.Schema({
  name: String,
  userName: String,
  email: String,
});

//model

module.exports = mongoose.model("user", userSchema);
