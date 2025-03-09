"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SmilePlus } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { signIn,useSession } from "next-auth/react"
interface LoginProps {
  isLoading: boolean
  onGoogleLogin: () => void
}

export default function Login() {
  const[isLoading,setIsLoading]=useState(false);
  
  const handleLogin=()=>{
    setIsLoading(true);
    setTimeout(() => {
      signIn("google", { callbackUrl: "/routes/Dashboard" });
  }, 2000);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 p-4 animate-fade-in">
      <Card className="w-full max-w-md animate-slide-up">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 animate-bounce">
            <SmilePlus className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-2xl">MindMate</CardTitle>
          <CardDescription>Track your mental health journey with ease</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button
            variant="outline"
            className="flex items-center gap-2 animate-hover-bounce"
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            ) : (
              <></>
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
