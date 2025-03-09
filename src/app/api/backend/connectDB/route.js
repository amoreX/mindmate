import mongoose from "mongoose";

const connectDB = async () => {
	try {
		await mongoose.connect(
			"mongodb+srv://nihal:mdnihalrahman@mindmate.llti2.mongodb.net/?retryWrites=true&w=majority&appName=mindmate"
		);
		console.log("Connected to MongoDB");
	} catch (err) {
		console.log(err);
	}
};

export const GET = () => {
	connectDB();
	return Response.json({ message: "Connected to MongoDB" });
};

export { connectDB as connecting };
