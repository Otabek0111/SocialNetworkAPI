const { Schema, model } = require("mongoose"); // import Schema and model from mongoose

// create the user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [this],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
// get total count of friends on retrieval
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});
// create the User model using the UserSchema
const User = model("User", userSchema);

module.exports = User;
