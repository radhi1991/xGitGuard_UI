"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function EnvVariableForm() {
  const [token, setToken] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this to your backend to save as an env variable
    console.log("Saving token:", token)
    // For demonstration, we'll just log it. In a real app, you'd want to securely store this.
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="github-token">GitHub Enterprise API Token</Label>
        <Input
          id="github-token"
          type="password"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Enter your GitHub Enterprise API Token"
        />
      </div>
      <Button type="submit">Save Token</Button>
    </form>
  )
}

