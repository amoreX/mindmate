import { Button } from "@/components/ui/button"
import { SmilePlus, LogOut } from "lucide-react"
import MoodSelector from "@/components/dashboard/MoodSelector"
import JournalEntry from "./dashboard/JournalEntry"
import DailyTip from "./dashboard/DailyTip"
import Progress from "./dashboard/Progress"
import MoodInsights from "./dashboard/MoodInsights"

interface DashboardProps {
  onLogout: () => void
}

export default function Dashboard({ onLogout }: DashboardProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <SmilePlus className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">MindTrack</span>
          </div>
          <Button variant="ghost" size="sm" className="flex items-center gap-2" onClick={onLogout}>
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </header>
      <main className="container py-6 px-4">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <MoodSelector />
            <JournalEntry />
            <DailyTip />
          </div>
          <div className="space-y-6">
            <Progress />
            <MoodInsights />
          </div>
        </div>
      </main>
    </div>
  )
}
