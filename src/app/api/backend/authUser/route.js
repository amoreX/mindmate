import mongoose from "mongoose";
// import { connecting } from "../connectDB/route";
import { connectDB } from "../../../../lib/utils/connectdb";
import { userModel } from "../model/user.model";

export const POST = async (req, res) => {
	const { email } = await req.json(); // Correctly parse the request body
	await connectDB();
	try {
		const checkingUser = await userModel.findOne({ email: email });

		if (checkingUser) {
			return new Response(JSON.stringify({ message: "User exists" }), {
				status: 200,
				headers: { "Content-Type": "application/json" },
			});
		} else {
			const userInfo = {
				email: email,
				mood: [],
			};
			const newUser = new userModel(userInfo);
			await newUser.save();
			return new Response(JSON.stringify({ message: "User created" }), {
				status: 200,
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
