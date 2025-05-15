"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SignupPage() {
  const searchParams = useSearchParams()
  const [selectedPackage, setSelectedPackage] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const packages = [
    { id: "freemium", name: "Freemium", price: "$0" },
    { id: "purePlay", name: "Pure Play", price: "$500" },
    { id: "basic", name: "Basic", price: "$1,500" },
    { id: "intermediate", name: "Intermediate", price: "$3,000" },
    { id: "advanced", name: "Advanced", price: "$5,000" },
  ]

  // Set the selected package from URL parameter
  useEffect(() => {
    const packageParam = searchParams.get("package")
    if (packageParam && packages.some((pkg) => pkg.id === packageParam)) {
      setSelectedPackage(packageParam)
    }
  }, [searchParams])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ ...formData, package: selectedPackage })
    // Handle form submission logic here
  }

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Create Your <span className="text-gradient">Account</span>
        </h1>
        <p className="text-muted-foreground mb-12">
          Join us today and get access to our comprehensive suite of services designed to help you succeed.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

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
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="package">Select Package</Label>
                <Select value={selectedPackage} onValueChange={setSelectedPackage}>
                  <SelectTrigger id="package" className="w-full">
                    <SelectValue placeholder="Choose your package" />
                  </SelectTrigger>
                  <SelectContent>
                    {packages.map((pkg) => (
                      <SelectItem key={pkg.id} value={pkg.id}>
                        <div className="flex justify-between items-center w-full">
                          <span>{pkg.name}</span>
                          <span className="font-semibold">{pkg.price}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedPackage && (
                <div className="bg-card/50 rounded-xl p-4 border border-border">
                  <h3 className="text-lg font-semibold mb-2">
                    {packages.find((pkg) => pkg.id === selectedPackage)?.name} Package
                  </h3>
                  <div className="flex justify-between items-center">
                    <p className="text-muted-foreground">
                      {selectedPackage === "freemium"
                        ? "Try our AI-powered guidance before you commit"
                        : selectedPackage === "purePlay"
                          ? "Direct and once-off specialized services"
                          : selectedPackage === "basic"
                            ? "Self-paced guidance with limited expert support"
                            : selectedPackage === "intermediate"
                              ? "Hybrid approach with weekly human mentorship"
                              : "Premium end-to-end application management"}
                    </p>
                    <p className="text-xl font-bold">{packages.find((pkg) => pkg.id === selectedPackage)?.price}</p>
                  </div>
                </div>
              )}

              <div className="pt-4">
                <Button variant="glow" size="lg" className="w-full" type="submit">
                  Create Account
                </Button>
              </div>

              <p className="text-center text-sm text-muted-foreground">
                By creating an account, you agree to our{" "}
                <a href="/terms" className="underline hover:text-primary">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="underline hover:text-primary">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <a href="/login" className="text-primary hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
