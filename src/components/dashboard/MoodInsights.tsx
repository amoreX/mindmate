import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function MoodInsights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mood Insights</CardTitle>
        <CardDescription>Understanding your patterns</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Average mood this week:</span>
            <span className="font-semibold text-primary">3.7/5</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Most frequent mood:</span>
            <span className="font-semibold text-primary">Happy</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Streak:</span>
            <span className="font-semibold text-primary">7 days</span>
          </div>
          <div className="pt-2">
            <p className="text-sm text-muted-foreground">
              Your mood has been improving over the past week. Keep up the good work!
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
