const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    firstName: { type: String, required: true },

    LastName: { type: String, required: false },

    email: { type: String, required: true, unique: true },
    contactNo: { type: Number, required: false },
    password: { type: String, required: true },

    role: {
        type: String,
        enum: ["User", "Admin"],
        default: "User",
    },
    img: { type: String, required: false, default: "https://gooogle.com/150" },
    follower: { type: Number, required: false, default: 0 },
    following: { type: Number, required: false, default: 0 }
},
{
    versionKey: false,
    timestamps: true
});

const User = mongoose.model("user", UserSchema);

module.exports = User;