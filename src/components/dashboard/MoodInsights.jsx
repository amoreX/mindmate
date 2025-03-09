import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function MoodInsights() {
	const { data: session } = useSession();
	const [mood, setMood] = useState([]);
	const [mostCurr, setMostCurr] = useState("");
	const [averageMood, setAverageMood] = useState("");

	useEffect(() => {
		const fetchMoodData = async () => {
			if (session?.user?.email) {
				const res = await axios.post("/api/backend/fetchUser", {
					email: session.user.email,
				});
				const moodData = res?.data?.mood || [];
				setMood(moodData);
				calculateMostRecurringMood(moodData);
				calculateAverageMood(moodData);
			}
		};
		fetchMoodData();
	}, [session?.user?.email]);

	const calculateMostRecurringMood = (moodData) => {
		const last7Days = moodData.slice(-7);
		const moodCount = last7Days.reduce((acc, entry) => {
			acc[entry.mood] = (acc[entry.mood] || 0) + 1;
			return acc;
		}, {});

		const mostRecurringMood = Object.keys(moodCount).reduce((a, b) =>
			moodCount[a] > moodCount[b] ? a : b
		);
		setMostCurr(mostRecurringMood);
	};

	const calculateAverageMood = (moodData) => {
		const moodCount = moodData.reduce((acc, entry) => {
			acc[entry.mood] = (acc[entry.mood] || 0) + 1;
			return acc;
		}, {});

		const mostOccurringMood = Object.keys(moodCount).reduce((a, b) =>
			moodCount[a] > moodCount[b] ? a : b
		);
		setAverageMood(mostOccurringMood);
	};

	const getMoodMessage = (mood) => {
		switch (mood) {
			case "Happy":
				return "You have been feeling happy lately. Keep spreading the joy!";
			case "Okay":
				return "You have been feeling okay. Keep maintaining your balance!";
			case "Sad":
				return "You have been feeling sad. It's okay to feel this way, take care of yourself!";
			case "Anxious":
				return "You have been feeling anxious. Remember to take deep breaths and relax!";
			case "Angry":
				return "You have been feeling angry. Try to find ways to calm down and stay positive!";
			default:
				return "Not enough data";
		}
	};

	useEffect(() => {
		console.log(mostCurr);
		console.log(averageMood);
	}, [mostCurr, averageMood]);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Mood Insights</CardTitle>
				<CardDescription>Understanding your patterns</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-2">
					<div className="flex items-center justify-between">
						<span className="text-sm font-medium">Average mood:</span>
						<span className="font-semibold text-primary">{averageMood || "Not enough data"}</span>
					</div>
					<div className="flex items-center justify-between">
						<span className="text-sm font-medium">Most frequent mood:</span>
						<span className="font-semibold text-primary">{mostCurr || "Not enough data"}</span>
					</div>

					<div className="pt-2">
						<p className="text-sm text-muted-foreground">
							{averageMood && mostCurr ? getMoodMessage(averageMood) : "Not enough data"}
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
