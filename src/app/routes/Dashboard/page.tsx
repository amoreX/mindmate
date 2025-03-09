"use client"

import { useSession, signOut } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { SmilePlus, LogOut } from "lucide-react";
import MoodSelector from "@/components/dashboard/MoodSelector";
import JournalEntry from "@/components/dashboard/JournalEntry";
import DailyTip from "@/components/dashboard/DailyTip";
import Progress from "@/components/dashboard/Progress";
import MoodInsights from "@/components/dashboard/MoodInsights";

export default function Dashboard() {
	const { data: session } = useSession();
	console.log(session?.user);
	return (
		<div className="min-h-screen bg-background">
			<header className="sticky top-0 z-10 border-b bg-background">
				<div className=" flex h-16 items-center justify-between px-4">
					<div className="flex items-center gap-2">
						<SmilePlus className="h-6 w-6 text-primary" />
						<span className="text-lg font-semibold">MindMate</span>
					</div>
					<Button variant="ghost" size="sm" className="flex items-center gap-2" onClick={() => signOut({ callbackUrl: "/" })}>
						<LogOut className="h-4 w-4" />
						<span className="hidden sm:inline">Logout</span>
					</Button>
				</div>
			</header>
			<main className=" py-6 px-4">
				<div className="grid gap-4 md:grid-cols-2">
					<div className="space-y-6">
						<MoodSelector />
						<JournalEntry />
						<DailyTip />
					</div>
					<div className="space-y-5">
						<Progress />
						<MoodInsights />
					</div>
				</div>
			</main>
		</div>
	);
}
