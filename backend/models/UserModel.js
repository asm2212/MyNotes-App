const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const usrSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, 
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    collection: "users", 
  }
);


usrSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
  }
  next();
});

const UserModel = mongoose.model("User", usrSchema); 

module.exports = {
  UserModel,
};
