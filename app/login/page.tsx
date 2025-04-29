"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("") // Clear any errors when user makes changes
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    
    try {
      // Call the API endpoint
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || "Invalid email or password")
      }
      
      // Redirect to dashboard on success
      router.push("/dashboard")
      
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Sign In to <span className="text-gradient">Your Account</span>
        </h1>
        <p className="text-muted-foreground mb-12">
          Welcome back to Elevate Ed. Please sign in to access your dashboard.
        </p>
      </div>

      <div className="max-w-md mx-auto">
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  disabled={loading}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <a href="/forgot-password" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  disabled={loading}
                />
              </div>

              <div className="pt-4">
                <Button 
                  variant="glow" 
                  size="lg" 
                  className="w-full" 
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Signing In..." : "Sign In"}
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Don't have an account?{" "}
            <a href="/signup" className="text-primary hover:underline">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
