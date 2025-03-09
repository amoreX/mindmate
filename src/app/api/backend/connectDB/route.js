import mongoose from "mongoose";
import { connectDB } from "../../../../lib/utils/connectdb";

export const GET = () => {
	connectDB();
	return Response.json({ message: "Connected to MongoDB" });
};
