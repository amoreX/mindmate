import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
export default function JournalEntry({ setJournal, onSave }) {
	const [journalEntry, setJournalEntry] = useState("");

	const handleJournalChange = (e) => {
		setJournalEntry(e.target.value);
		setJournal(e.target.value);
	};

	const handleSaveEntry = () => {
		// In a real app, this would save to a database
		setJournalEntry("");
		onSave();
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Journal Entry</CardTitle>
				<CardDescription>Write down your thoughts</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4">
				<Textarea
					placeholder="How are you feeling today? What's on your mind?"
					className="min-h-[150px]"
					value={journalEntry}
					onChange={handleJournalChange}
				/>
				<Button
          
					onClick={handleSaveEntry}
					className="transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-black hover:text-white"
				>
					Save Entry
				</Button>
			</CardContent>
		</Card>
	);
}
