import mongoose, { connect } from "mongoose";
import { connectDB } from "../../../../lib/utils/connectdb";

import { userModel } from "../model/user.model";

export const POST = async (req, res) => {
	const { email } = await req.json(); // Correctly parse the request body
	await connectDB();
	try {
		const checkingUser = await userModel.findOne({ email: email });

		if (checkingUser) {
			// User exists, return the mood list
			return new Response(JSON.stringify({ mood: checkingUser.mood }), {
				status: 200,
				headers: { "Content-Type": "application/json" },
			});
		} else {
			return new Response(JSON.stringify({ message: "User not found" }), {
				status: 404,
				headers: { "Content-Type": "application/json" },
			});
		}
	} catch (err) {
		console.log(err);
		return new Response(JSON.stringify({ message: "User auth failed" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
};
