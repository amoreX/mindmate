import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SmilePlus } from "lucide-react"
import Image from "next/image"

interface LoginProps {
  isLoading: boolean
  onGoogleLogin: () => void
}

export default function Login({ isLoading, onGoogleLogin }: LoginProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <SmilePlus className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-2xl">MindTrack</CardTitle>
          <CardDescription>Track your mental health journey with ease</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={onGoogleLogin}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            ) : (
              <Image
                src="/placeholder.svg?height=16&width=16"
                alt="Google Logo"
                width={16}
                height={16}
                className="h-4 w-4"
              />
            )}
            {isLoading ? "Signing in..." : "Sign in with Google"}
          </Button>
          <div className="text-center text-sm text-muted-foreground">
            <p>Your data is private and secure</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
