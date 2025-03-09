import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	mood: [
		{
			mood: String,
			journal: String,
		},
	],
});

export const userModel = mongoose.models.Users || mongoose.model("Users", userSchema);
