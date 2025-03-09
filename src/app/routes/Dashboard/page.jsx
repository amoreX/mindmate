"use client";

import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { SmilePlus, LogOut } from "lucide-react";
import MoodSelector from "@/components/dashboard/MoodSelector";
import JournalEntry from "@/components/dashboard/JournalEntry";
import DailyTip from "@/components/dashboard/DailyTip";
import Progress from "@/components/dashboard/Progress";
import MoodInsights from "@/components/dashboard/MoodInsights";

import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import "react-toastify/dist/ReactToastify.css";

export default function Dashboard() {
	const { data: session } = useSession();
	const [mood, setMood] = useState(null);
	const [journal, setJournal] = useState("");
	console.log(session?.user);

	useEffect(() => {
		const register = async () => {
			await axios.get("/api/backend/connectDB");
			const res = await axios.post("/api/backend/authUser", { email: session?.user?.email });
			console.log(res);
		};
		if (session?.user?.email) {
			register();
		}
	}, [session?.user?.email]);

	const handleSaveEntry = async () => {
		if (session?.user?.email && mood && journal) {
			const res = await axios.post("/api/backend/addMood", {
				email: session.user.email,
				happy: mood,
				journal: journal,
			});
			console.log(res);
			setMood(null);
			toast("Mood updated successfully");
		}
	};

	return (
		<>
			<div className="min-h-screen bg-background">
				<header className="sticky top-0 z-10 border-b bg-white">
					<div className=" flex h-16 bg-white items-center justify-between px-4">
						<div className="flex items-center gap-2">
							<SmilePlus className="h-6 w-6 text-primary" />
							<span className="text-lg font-semibold">MindMate</span>
						</div>
						<Button
							variant="ghost"
							size="sm"
							className="flex items-center gap-2"
							onClick={() => signOut({ callbackUrl: "/" })}
						>
							<LogOut className="h-4 w-4" />
							<span className="hidden sm:inline">Logout</span>
						</Button>
					</div>
				</header>
				<main className=" py-6 px-4 h-96">
					<div className="grid gap-4 md:grid-cols-2">
						<div className="space-y-6">
							<MoodSelector setMood={setMood} curr={mood} />
							<JournalEntry setJournal={setJournal} onSave={handleSaveEntry} />
							<DailyTip />
						</div>
						<div className="space-y-5">
							<Progress />
							<MoodInsights />
						</div>
					</div>
				</main>
			</div>
			<Toaster />
		</>
	);
}
