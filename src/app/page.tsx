"use client"

import { useState } from "react"
import Login from "@/components/Login"
import Dashboard from "../components/Dashboard"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleGoogleLogin = async () => {
    setIsLoading(true)
    // Simulate login
    setTimeout(() => {
      setIsLoggedIn(true)
      setIsLoading(false)
    }, 1500)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  if (!isLoggedIn) {
    return <Login isLoading={isLoading} onGoogleLogin={handleGoogleLogin} />
  }

  return <Dashboard onLogout={handleLogout} />
}

