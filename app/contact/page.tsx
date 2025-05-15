"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus("success")
      // Reset form after successful submission
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
    }
  }

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Get in <span className="text-gradient">Touch</span>
        </h1>
        <p className="text-muted-foreground">
          Have questions about our services or need personalized guidance? We're here to help you navigate your
          international education journey.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="glass p-8 rounded-xl border border-primary/10">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">info@elevateed.com</p>
                  <p className="text-muted-foreground">support@elevateed.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-muted-foreground">+44 20 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Office Locations</h3>
                  <p className="text-muted-foreground">123 Education Ave, New York, NY 10001</p>
                  <p className="text-muted-foreground">456 Learning St, London, UK SW1A 1AA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-xl border border-primary/10">
            <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass p-8 rounded-xl border border-primary/10">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

          {submitStatus === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 text-center"
            >
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
              <p className="text-muted-foreground">
                Thank you for reaching out. We'll get back to you as soon as possible.
              </p>
            </motion.div>
          ) : submitStatus === "error" ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 text-center"
            >
              <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Something went wrong!</h3>
              <p className="text-muted-foreground">Please try again or contact us directly via email or phone.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell us about your inquiry..."
                  required
                  className="w-full min-h-[150px]"
                />
              </div>

              <Button
                type="submit"
                variant="glow"
                className="w-full flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
