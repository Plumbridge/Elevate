"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, Clock, Download, FileText, GraduationCap, Plus, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

export default function ApplicationsPage() {
  const [progress, setProgress] = useState(75)

  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="border-b border-primary/10">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">University Applications</h1>
              <p className="text-sm text-muted-foreground">Manage your university applications</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Upload className="h-4 w-4" />
                <span>Upload Document</span>
              </Button>
              <Button variant="glow" size="sm" className="gap-2">
                <Plus className="h-4 w-4" />
                <span>New Application</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="container py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Application Progress Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="col-span-full lg:col-span-2"
          >
            <Card className="border-primary/10 glass">
              <CardHeader className="pb-2">
                <CardTitle>Application Progress</CardTitle>
                <CardDescription>Track your university application progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Overall Progress</span>
                    <span className="text-sm font-medium">{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
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
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500/10">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Document Preparation</p>
                      <p className="text-xs text-muted-foreground">Completed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-primary/10 p-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-500/10">
                      <Clock className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Application Submission</p>
                      <p className="text-xs text-muted-foreground">In Progress</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-primary/10 p-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted/50">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Decision</p>
                      <p className="text-xs text-muted-foreground">Pending</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  View Application Timeline
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Application Tasks Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Card className="border-primary/10 glass">
              <CardHeader className="pb-2">
                <CardTitle>Application Tasks</CardTitle>
                <CardDescription>Tasks that need your attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <FileText className="h-3 w-3" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Submit Statement of Purpose</p>
                      <p className="text-xs text-muted-foreground">Due in 3 days</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <FileText className="h-3 w-3" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Submit Recommendation Letter</p>
                      <p className="text-xs text-muted-foreground">Due in 5 days</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <FileText className="h-3 w-3" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Pay Application Fee</p>
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
        </div>

        {/* Applications Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Your Applications</h2>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Applications</TabsTrigger>
              <TabsTrigger value="submitted">Submitted</TabsTrigger>
              <TabsTrigger value="draft">Draft</TabsTrigger>
              <TabsTrigger value="accepted">Accepted</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-0">
              <div className="grid gap-4">
                <ApplicationCard
                  university="University of Oxford"
                  program="MSc in Computer Science"
                  deadline="June 15, 2023"
                  status="Submitted"
                  lastUpdated="2 days ago"
                />
                <ApplicationCard
                  university="Imperial College London"
                  program="MSc in Artificial Intelligence"
                  deadline="July 1, 2023"
                  status="In Progress"
                  lastUpdated="1 week ago"
                />
                <ApplicationCard
                  university="University of Cambridge"
                  program="MSc in Data Science"
                  deadline="July 15, 2023"
                  status="Draft"
                  lastUpdated="2 weeks ago"
                />
              </div>
            </TabsContent>
            <TabsContent value="submitted" className="mt-0">
              <div className="grid gap-4">
                <ApplicationCard
                  university="University of Oxford"
                  program="MSc in Computer Science"
                  deadline="June 15, 2023"
                  status="Submitted"
                  lastUpdated="2 days ago"
                />
              </div>
            </TabsContent>
            <TabsContent value="draft" className="mt-0">
              <div className="grid gap-4">
                <ApplicationCard
                  university="University of Cambridge"
                  program="MSc in Data Science"
                  deadline="July 15, 2023"
                  status="Draft"
                  lastUpdated="2 weeks ago"
                />
              </div>
            </TabsContent>
            <TabsContent value="accepted" className="mt-0">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium mb-2">No Accepted Applications Yet</h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  Your accepted applications will appear here once universities make their decisions.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Documents Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Application Documents</h2>
          <Card className="border-primary/10 glass">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg border border-primary/10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Academic Transcript</p>
                      <p className="text-xs text-muted-foreground">Uploaded 2 weeks ago</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border border-primary/10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">CV/Resume</p>
                      <p className="text-xs text-muted-foreground">Uploaded 2 weeks ago</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border border-primary/10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Passport Copy</p>
                      <p className="text-xs text-muted-foreground">Uploaded 1 week ago</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full gap-1">
                <Upload className="h-4 w-4" />
                <span>Upload New Document</span>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

interface ApplicationCardProps {
  university: string
  program: string
  deadline: string
  status: "Draft" | "In Progress" | "Submitted" | "Accepted" | "Rejected"
  lastUpdated: string
}

function ApplicationCard({ university, program, deadline, status, lastUpdated }: ApplicationCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Accepted":
        return "text-green-500"
      case "Submitted":
        return "text-blue-500"
      case "In Progress":
        return "text-yellow-500"
      case "Rejected":
        return "text-red-500"
      default:
        return "text-muted-foreground"
    }
  }

  return (
    <Card className="border-primary/10 glass">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="font-medium">{university}</h3>
            <p className="text-sm text-muted-foreground">{program}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className={`text-xs font-medium ${getStatusColor(status)}`}>{status}</span>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-xs text-muted-foreground">Last updated {lastUpdated}</span>
            </div>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <div className="text-sm">
              <span className="text-muted-foreground">Deadline: </span>
              <span>{deadline}</span>
            </div>
            <Button variant="outline" size="sm" className="gap-1">
              <span>View Details</span>
              <ArrowRight className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
