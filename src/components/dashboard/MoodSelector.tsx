import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Smile } from "lucide-react"

const moods = [
  { name: "Happy", icon: <Smile className="h-6 w-6" />, color: "bg-green-100 hover:bg-green-200 text-green-700" },
  { name: "Okay", icon: <Smile className="h-6 w-6" />, color: "bg-blue-100 hover:bg-blue-200 text-blue-700" },
  { name: "Sad", icon: <Smile className="h-6 w-6 rotate-180" />, color: "bg-purple-100 hover:bg-purple-200 text-purple-700" },
  { name: "Anxious", icon: <Smile className="h-6 w-6" />, color: "bg-yellow-100 hover:bg-yellow-200 text-yellow-700" },
  { name: "Angry", icon: <Smile className="h-6 w-6" />, color: "bg-red-100 hover:bg-red-200 text-red-700" },
]

export default function MoodSelector() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null)

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>How are you feeling today?</CardTitle>
        <CardDescription>Select your current mood</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-5 gap-2">
          {moods.map((mood) => (
            <Button
              key={mood.name}
              variant="outline"
              className={`flex flex-col items-center justify-center h-20 ${mood.color} ${selectedMood === mood.name ? "ring-2 ring-primary" : ""}`}
              onClick={() => handleMoodSelect(mood.name)}
            >
              {mood.icon}
              <span className="mt-1 text-xs">{mood.name}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
