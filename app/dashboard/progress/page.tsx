import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle2,
  Clock,
  Award,
  TrendingUp,
  Calendar,
  BookOpen,
  GraduationCap,
  FileCheck,
  Briefcase,
  Globe,
} from "lucide-react"

export default function ProgressPage() {
  // Mock progress data
  const overallProgress = 68

  const applicationProgress = [
    {
      id: 1,
      name: "University of Toronto",
      progress: 100,
      status: "Accepted",
      deadline: "Completed",
      color: "bg-green-500",
    },
    {
      id: 2,
      name: "McGill University",
      progress: 85,
      status: "Under Review",
      deadline: "Oct 15, 2023",
      color: "bg-blue-500",
    },
    {
      id: 3,
      name: "University of British Columbia",
      progress: 60,
      status: "In Progress",
      deadline: "Nov 30, 2023",
      color: "bg-amber-500",
    },
  ]

  const visaProgress = {
    progress: 75,
    steps: [
      { id: 1, name: "Application Submitted", completed: true, date: "Aug 15, 2023" },
      { id: 2, name: "Documents Verified", completed: true, date: "Aug 25, 2023" },
      { id: 3, name: "Biometrics Completed", completed: true, date: "Sep 5, 2023" },
      { id: 4, name: "Interview Scheduled", completed: false, date: "Sep 20, 2023" },
      { id: 5, name: "Visa Decision", completed: false, date: "Expected Oct 2023" },
    ],
  }

  const accommodationProgress = {
    progress: 60,
    steps: [
      { id: 1, name: "Preferences Submitted", completed: true, date: "Aug 10, 2023" },
      { id: 2, name: "Options Reviewed", completed: true, date: "Aug 20, 2023" },
      { id: 3, name: "Housing Selected", completed: true, date: "Sep 1, 2023" },
      { id: 4, name: "Deposit Paid", completed: false, date: "Pending" },
      { id: 5, name: "Move-in Confirmed", completed: false, date: "Pending" },
    ],
  }

  const financialProgress = {
    progress: 50,
    steps: [
      { id: 1, name: "Budget Created", completed: true, date: "Jul 15, 2023" },
      { id: 2, name: "Funding Sources Identified", completed: true, date: "Jul 30, 2023" },
      { id: 3, name: "Scholarship Applications", completed: false, date: "In Progress" },
      { id: 4, name: "Financial Documents Prepared", completed: false, date: "Pending" },
    ],
  }

  const culturalProgress = {
    progress: 40,
    steps: [
      { id: 1, name: "Language Assessment", completed: true, date: "Aug 5, 2023" },
      { id: 2, name: "Cultural Training Started", completed: true, date: "Aug 25, 2023" },
      { id: 3, name: "Local Customs Research", completed: false, date: "In Progress" },
      { id: 4, name: "Networking Connections", completed: false, date: "Not Started" },
    ],
  }

  // Mock milestones
  const upcomingMilestones = [
    { id: 1, name: "Visa Interview", date: "Sep 20, 2023", icon: FileCheck, color: "text-purple-500" },
    { id: 2, name: "Housing Deposit Due", date: "Sep 30, 2023", icon: Calendar, color: "text-blue-500" },
    { id: 3, name: "Orientation Week", date: "Jan 3-7, 2024", icon: BookOpen, color: "text-green-500" },
    { id: 4, name: "Classes Begin", date: "Jan 10, 2024", icon: GraduationCap, color: "text-amber-500" },
  ]

  // Mock achievements
  const achievements = [
    {
      id: 1,
      name: "Application Submitted",
      description: "Successfully submitted university applications",
      date: "Jul 15, 2023",
      icon: CheckCircle2,
    },
    {
      id: 2,
      name: "First Acceptance",
      description: "Received acceptance from University of Toronto",
      date: "Aug 30, 2023",
      icon: Award,
    },
    {
      id: 3,
      name: "Visa Application",
      description: "Completed and submitted visa application",
      date: "Aug 15, 2023",
      icon: FileCheck,
    },
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Your Progress</h1>
        <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
          <Calendar className="mr-2 h-4 w-4" /> Download Progress Report
        </Button>
      </div>

      {/* Overall Progress Card */}
      <Card>
        <CardHeader className="bg-gradient-to-r from-purple-600/10 to-indigo-600/10">
          <CardTitle className="flex items-center">
            <TrendingUp className="mr-2 h-5 w-5 text-purple-600" />
            Overall Study Abroad Journey
          </CardTitle>
          <CardDescription>Your progress across all preparation areas</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Overall Completion</span>
              <span className="font-medium">{overallProgress}%</span>
            </div>
            <Progress value={overallProgress} className="h-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 flex flex-col items-center">
              <div className="rounded-full bg-purple-100 dark:bg-purple-800/30 p-3 mb-2">
                <GraduationCap className="h-6 w-6 text-purple-600" />
              </div>
              <Progress value={85} className="h-1.5 w-full mb-1" />
              <span className="text-sm font-medium">Applications</span>
              <span className="text-xs text-muted-foreground">85% Complete</span>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 flex flex-col items-center">
              <div className="rounded-full bg-blue-100 dark:bg-blue-800/30 p-3 mb-2">
                <FileCheck className="h-6 w-6 text-blue-600" />
              </div>
              <Progress value={75} className="h-1.5 w-full mb-1" />
              <span className="text-sm font-medium">Visa</span>
              <span className="text-xs text-muted-foreground">75% Complete</span>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 flex flex-col items-center">
              <div className="rounded-full bg-green-100 dark:bg-green-800/30 p-3 mb-2">
                <Briefcase className="h-6 w-6 text-green-600" />
              </div>
              <Progress value={60} className="h-1.5 w-full mb-1" />
              <span className="text-sm font-medium">Accommodation</span>
              <span className="text-xs text-muted-foreground">60% Complete</span>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4 flex flex-col items-center">
              <div className="rounded-full bg-amber-100 dark:bg-amber-800/30 p-3 mb-2">
                <Award className="h-6 w-6 text-amber-600" />
              </div>
              <Progress value={50} className="h-1.5 w-full mb-1" />
              <span className="text-sm font-medium">Financial</span>
              <span className="text-xs text-muted-foreground">50% Complete</span>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 flex flex-col items-center">
              <div className="rounded-full bg-indigo-100 dark:bg-indigo-800/30 p-3 mb-2">
                <Globe className="h-6 w-6 text-indigo-600" />
              </div>
              <Progress value={40} className="h-1.5 w-full mb-1" />
              <span className="text-sm font-medium">Cultural</span>
              <span className="text-xs text-muted-foreground">40% Complete</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="applications" className="w-full">
        <TabsList className="grid grid-cols-5 w-full max-w-3xl">
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="visa">Visa</TabsTrigger>
          <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="cultural">Cultural</TabsTrigger>
        </TabsList>

        <TabsContent value="applications" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>University Applications</CardTitle>
              <CardDescription>Track your application status for each university</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {applicationProgress.map((app) => (
                  <div key={app.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">{app.name}</h4>
                        <p className="text-sm text-muted-foreground">Status: {app.status}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{app.progress}%</p>
                        <p className="text-sm text-muted-foreground">Deadline: {app.deadline}</p>
                      </div>
                    </div>
                    <Progress value={app.progress} className={`h-2 ${app.color}`} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visa" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Visa Application Progress</CardTitle>
              <CardDescription>Track your visa application process</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="font-medium">Visa Process</span>
                  <span className="font-medium">{visaProgress.progress}%</span>
                </div>
                <Progress value={visaProgress.progress} className="h-2 bg-blue-200 dark:bg-blue-900/20" />
              </div>

              <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-3 mt-6">
                {visaProgress.steps.map((step) => (
                  <li key={step.id} className="mb-6 ml-6">
                    <span
                      className={`absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ${
                        step.completed
                          ? "bg-blue-100 dark:bg-blue-900/30 ring-8 ring-white dark:ring-gray-900"
                          : "bg-gray-100 dark:bg-gray-700 ring-8 ring-white dark:ring-gray-900"
                      }`}
                    >
                      {step.completed ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-300" />
                      ) : (
                        <Clock className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                      )}
                    </span>
                    <h3 className={`font-medium ${step.completed ? "" : "text-muted-foreground"}`}>{step.name}</h3>
                    <p className="text-sm text-muted-foreground">{step.date}</p>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="accommodation" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Accommodation Progress</CardTitle>
              <CardDescription>Track your housing arrangements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="font-medium">Housing Process</span>
                  <span className="font-medium">{accommodationProgress.progress}%</span>
                </div>
                <Progress value={accommodationProgress.progress} className="h-2 bg-green-200 dark:bg-green-900/20" />
              </div>

              <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-3 mt-6">
                {accommodationProgress.steps.map((step) => (
                  <li key={step.id} className="mb-6 ml-6">
                    <span
                      className={`absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ${
                        step.completed
                          ? "bg-green-100 dark:bg-green-900/30 ring-8 ring-white dark:ring-gray-900"
                          : "bg-gray-100 dark:bg-gray-700 ring-8 ring-white dark:ring-gray-900"
                      }`}
                    >
                      {step.completed ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600 dark:text-green-300" />
                      ) : (
                        <Clock className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                      )}
                    </span>
                    <h3 className={`font-medium ${step.completed ? "" : "text-muted-foreground"}`}>{step.name}</h3>
                    <p className="text-sm text-muted-foreground">{step.date}</p>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financial" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Financial Planning Progress</CardTitle>
              <CardDescription>Track your financial preparation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="font-medium">Financial Planning</span>
                  <span className="font-medium">{financialProgress.progress}%</span>
                </div>
                <Progress value={financialProgress.progress} className="h-2 bg-amber-200 dark:bg-amber-900/20" />
              </div>

              <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-3 mt-6">
                {financialProgress.steps.map((step) => (
                  <li key={step.id} className="mb-6 ml-6">
                    <span
                      className={`absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ${
                        step.completed
                          ? "bg-amber-100 dark:bg-amber-900/30 ring-8 ring-white dark:ring-gray-900"
                          : "bg-gray-100 dark:bg-gray-700 ring-8 ring-white dark:ring-gray-900"
                      }`}
                    >
                      {step.completed ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-300" />
                      ) : (
                        <Clock className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                      )}
                    </span>
                    <h3 className={`font-medium ${step.completed ? "" : "text-muted-foreground"}`}>{step.name}</h3>
                    <p className="text-sm text-muted-foreground">{step.date}</p>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cultural" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Cultural Preparation Progress</CardTitle>
              <CardDescription>Track your cultural and language preparation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="font-medium">Cultural Preparation</span>
                  <span className="font-medium">{culturalProgress.progress}%</span>
                </div>
                <Progress value={culturalProgress.progress} className="h-2 bg-indigo-200 dark:bg-indigo-900/20" />
              </div>

              <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-3 mt-6">
                {culturalProgress.steps.map((step) => (
                  <li key={step.id} className="mb-6 ml-6">
                    <span
                      className={`absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ${
                        step.completed
                          ? "bg-indigo-100 dark:bg-indigo-900/30 ring-8 ring-white dark:ring-gray-900"
                          : "bg-gray-100 dark:bg-gray-700 ring-8 ring-white dark:ring-gray-900"
                      }`}
                    >
                      {step.completed ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-300" />
                      ) : (
                        <Clock className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                      )}
                    </span>
                    <h3 className={`font-medium ${step.completed ? "" : "text-muted-foreground"}`}>{step.name}</h3>
                    <p className="text-sm text-muted-foreground">{step.date}</p>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Upcoming Milestones */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-purple-600" />
              Upcoming Milestones
            </CardTitle>
            <CardDescription>Important dates and deadlines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingMilestones.map((milestone) => (
                <div key={milestone.id} className="flex items-start gap-3">
                  <div
                    className={`rounded-full p-2 ${milestone.color.replace("text-", "bg-").replace("500", "100")} dark:bg-opacity-20`}
                  >
                    <milestone.icon className={`h-4 w-4 ${milestone.color}`} />
                  </div>
                  <div>
                    <h4 className="font-medium">{milestone.name}</h4>
                    <p className="text-sm text-muted-foreground">{milestone.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Milestones
            </Button>
          </CardFooter>
        </Card>

        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="mr-2 h-5 w-5 text-amber-600" />
              Your Achievements
            </CardTitle>
            <CardDescription>Milestones you've completed</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="flex items-start gap-3">
                  <div className="rounded-full bg-amber-100 dark:bg-amber-900/20 p-2">
                    <achievement.icon className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">{achievement.name}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    <p className="text-xs text-muted-foreground">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Achievements
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
