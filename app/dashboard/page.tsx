"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { getCurrentUser } from "@/lib/auth"
import {
  BookOpen,
  Building,
  Calendar,
  CheckCircle2,
  Clock,
  CreditCard,
  FileText,
  GraduationCap,
  Luggage,
  MessageSquare,
  Plane,
  Plus,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

export default function DashboardPage() {
  const [progress, setProgress] = useState(68)
  const [userName, setUserName] = useState("John Doe")

  useEffect(() => {
    async function fetchUser() {
      const user = await getCurrentUser()
      if (user && user.profile && user.profile.full_name) {
        setUserName(user.profile.full_name)
      } else if (user && user.email) {
        setUserName(user.email.split('@')[0]) // Fallback to part of email if full_name is not available
      }
    }
    fetchUser()
  }, [])

  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="border-b border-primary/10">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-sm text-muted-foreground">{`Welcome back, ${userName}`}</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Calendar className="h-4 w-4" />
                <span>Schedule Call</span>
              </Button>
              <Button variant="glow" size="sm" className="gap-2">
                <MessageSquare className="h-4 w-4" />
                <span>Message Advisor</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="container py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Journey Progress Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="col-span-full lg:col-span-2"
          >
            <Card className="border-primary/10 glass">
              <CardHeader className="pb-2">
                <CardTitle>Your Study Abroad Journey</CardTitle>
                <CardDescription>Track your progress towards studying abroad</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Overall Progress</span>
                    <span className="text-sm font-medium">{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="flex items-center gap-3 rounded-lg border border-primary/10 p-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500/10">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">University Selection</p>
                      <p className="text-xs text-muted-foreground">Completed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-primary/10 p-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-500/10">
                      <Clock className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Visa Application</p>
                      <p className="text-xs text-muted-foreground">In Progress</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-primary/10 p-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/10">
                      <Clock className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Accommodation</p>
                      <p className="text-xs text-muted-foreground">In Progress</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  View Detailed Progress
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Upcoming Tasks Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Card className="border-primary/10 glass">
              <CardHeader className="pb-2">
                <CardTitle>Upcoming Tasks</CardTitle>
                <CardDescription>Tasks that need your attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <FileText className="h-3 w-3" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Submit Passport Copy</p>
                      <p className="text-xs text-muted-foreground">Due in 2 days</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <CreditCard className="h-3 w-3" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Pay Application Fee</p>
                      <p className="text-xs text-muted-foreground">Due in 5 days</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <Calendar className="h-3 w-3" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Visa Interview Prep</p>
                      <p className="text-xs text-muted-foreground">Due in 1 week</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full gap-1">
                  <Plus className="h-3 w-3" />
                  <span>Add Task</span>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Upcoming Appointments Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Card className="border-primary/10 glass">
              <CardHeader className="pb-2">
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>Your scheduled meetings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-col items-center justify-center rounded-lg bg-primary/10">
                      <span className="text-xs font-medium">MAY</span>
                      <span className="text-lg font-bold">15</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Visa Consultation</p>
                      <p className="text-xs text-muted-foreground">10:00 AM - 11:00 AM</p>
                      <p className="text-xs text-muted-foreground">with Sarah Johnson</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-col items-center justify-center rounded-lg bg-primary/10">
                      <span className="text-xs font-medium">MAY</span>
                      <span className="text-lg font-bold">18</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Financial Planning</p>
                      <p className="text-xs text-muted-foreground">2:00 PM - 3:00 PM</p>
                      <p className="text-xs text-muted-foreground">with Michael Brown</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  View All Appointments
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>

        {/* Services Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Your Services</h2>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Services</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-0">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <ServiceCard
                  icon={<GraduationCap className="h-5 w-5" />}
                  title="University Applications"
                  status="In Progress"
                  progress={75}
                  href="/dashboard/applications"
                />
                <ServiceCard
                  icon={<Plane className="h-5 w-5" />}
                  title="Visa Support"
                  status="In Progress"
                  progress={40}
                  href="/dashboard/visa"
                />
                <ServiceCard
                  icon={<Building className="h-5 w-5" />}
                  title="Accommodation"
                  status="Not Started"
                  progress={0}
                  href="/dashboard/accommodation"
                />
                <ServiceCard
                  icon={<CreditCard className="h-5 w-5" />}
                  title="Financial Planning"
                  status="In Progress"
                  progress={30}
                  href="/dashboard/financial"
                />
                <ServiceCard
                  icon={<Luggage className="h-5 w-5" />}
                  title="Cultural Preparation"
                  status="Not Started"
                  progress={0}
                  href="/dashboard/cultural"
                />
                <ServiceCard
                  icon={<BookOpen className="h-5 w-5" />}
                  title="Career Support"
                  status="Not Started"
                  progress={0}
                  href="/dashboard/career"
                />
              </div>
            </TabsContent>
            <TabsContent value="active" className="mt-0">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <ServiceCard
                  icon={<GraduationCap className="h-5 w-5" />}
                  title="University Applications"
                  status="In Progress"
                  progress={75}
                  href="/dashboard/applications"
                />
                <ServiceCard
                  icon={<Plane className="h-5 w-5" />}
                  title="Visa Support"
                  status="In Progress"
                  progress={40}
                  href="/dashboard/visa"
                />
                <ServiceCard
                  icon={<CreditCard className="h-5 w-5" />}
                  title="Financial Planning"
                  status="In Progress"
                  progress={30}
                  href="/dashboard/financial"
                />
              </div>
            </TabsContent>
            <TabsContent value="completed" className="mt-0">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium mb-2">No Completed Services Yet</h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  As you progress through your study abroad journey, completed services will appear here.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="upcoming" className="mt-0">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <ServiceCard
                  icon={<Building className="h-5 w-5" />}
                  title="Accommodation"
                  status="Not Started"
                  progress={0}
                  href="/dashboard/accommodation"
                />
                <ServiceCard
                  icon={<Luggage className="h-5 w-5" />}
                  title="Cultural Preparation"
                  status="Not Started"
                  progress={0}
                  href="/dashboard/cultural"
                />
                <ServiceCard
                  icon={<BookOpen className="h-5 w-5" />}
                  title="Career Support"
                  status="Not Started"
                  progress={0}
                  href="/dashboard/career"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <Card className="border-primary/10 glass">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Document Uploaded</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                    <p className="text-sm text-muted-foreground">You uploaded your academic transcript.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">New Message</p>
                      <p className="text-xs text-muted-foreground">Yesterday</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Sarah Johnson sent you a message about your visa application.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Appointment Scheduled</p>
                      <p className="text-xs text-muted-foreground">2 days ago</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      You scheduled a financial planning appointment with Michael Brown.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                View All Activity
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  status: "Not Started" | "In Progress" | "Completed"
  progress: number
  href: string
}

function ServiceCard({ icon, title, status, progress, href }: ServiceCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-green-500"
      case "In Progress":
        return "text-yellow-500"
      default:
        return "text-muted-foreground"
    }
  }

  return (
    <Link href={href}>
      <Card className="border-primary/10 glass h-full transition-all hover:shadow-md hover:-translate-y-1">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">{icon}</div>
            <div>
              <h3 className="font-medium">{title}</h3>
              <p className={`text-xs ${getStatusColor(status)}`}>{status}</p>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground">Progress</span>
              <span className="text-xs font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-1.5" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
