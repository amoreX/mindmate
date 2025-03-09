import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookHeart } from "lucide-react"

const tips = [
  "Take a 10-minute walk outside to boost your mood",
  "Practice deep breathing for 5 minutes when feeling stressed",
  "Stay hydrated throughout the day for better mental clarity",
  "Try to get 7-8 hours of sleep each night",
  "Connect with a friend or family member today",
]

export default function DailyTip() {
  const [randomTip, setRandomTip] = useState(tips[Math.floor(Math.random() * tips.length)])

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Daily Tip</CardTitle>
          <CardDescription>Mental health suggestion</CardDescription>
        </div>
        <BookHeart className="h-5 w-5 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="bg-primary/10 p-4 rounded-lg">
          <p className="text-sm">{randomTip}</p>
        </div>
      </CardContent>
    </Card>
  )
}
