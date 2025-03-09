import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

export default function JournalEntry() {
  const [journalEntry, setJournalEntry] = useState("")
  const [selectedMood, setSelectedMood] = useState<string | null>(null)

  const handleJournalChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJournalEntry(e.target.value)
  }

  const handleSaveEntry = () => {
    // In a real app, this would save to a database
    alert("Entry saved successfully!")
    setJournalEntry("")
    setSelectedMood(null)
  }

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
        <Button onClick={handleSaveEntry} disabled={!selectedMood || !journalEntry.trim()}>
          Save Entry
        </Button>
      </CardContent>
    </Card>
  )
}
