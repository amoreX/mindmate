import mongoose from "mongoose";

export async function connectDB() {
	try {
		await mongoose.connect(
			"mongodb+srv://nihal:mdnihalrahman@mindmate.llti2.mongodb.net/?retryWrites=true&w=majority&appName=mindmate"
		);
		console.log("Connected to MongoDB");
	} catch (err) {
		console.log(err);
	}
}

export default connectDB;
