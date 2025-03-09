import mongoose from "mongoose";

export async function connectdb() {
	await mongoose.connect(
		"mongodb+srv://nihal:mdnihalrahman@2005@mindmate.llti2.mongodb.net/?retryWrites=true&w=majority&appName=mindmate"
	);
	const db = mongoose.connection;
	db.on("error", console.error.bind(console, "connection error:"));
	db.once("open", function () {
		console.log("Connected to MongoDB");
	});
}

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
