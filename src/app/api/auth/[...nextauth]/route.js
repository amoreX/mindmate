import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: "424995493364-497v6rqq8ekfv0hc7biqlju7pi9c0bor.apps.googleusercontent.com",
			clientSecret: "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",
		}),
	],
});

export { handler as GET, handler as POST };
