import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
export default function Progress() {
	const { data: session } = useSession();
	const [mood, setMood] = useState([]);

	useEffect(() => {
		const fetchMoodData = async () => {
			if (session?.user?.email) {
				const res = await axios.post("/api/backend/fetchUser", {
					email: session.user.email,
				});
				const moodData = res?.data?.mood || [];
				setMood(moodData);
			}
		};
		fetchMoodData();
	}, [session?.user?.email]);
	return (
		<Card>
			<CardHeader>
				<CardTitle>Your History</CardTitle>
				<CardDescription>Track your mood over time</CardDescription>
			</CardHeader>
			<CardContent>
				{mood.length > 0 ? (
					<div className="space-y-2">
						{mood.map((entry, index) => (
							<div key={index} className="flex items-center justify-center gap-2">
								<span className="font-semibold text-primary">{entry.mood}</span>
								<span className="text-sm">{entry.journal}</span>
							</div>
						))}
					</div>
				) : (
					<p className="text-sm text-muted-foreground">No mood data available</p>
				)}
			</CardContent>
		</Card>
	);
}
