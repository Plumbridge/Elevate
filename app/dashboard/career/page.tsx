import { Award, BookOpen, Briefcase, CheckCircle, Clock, FileText, GraduationCap, Users, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CareerSupportPage() {
  // Sample career resources
  const resources = [
    {
      id: 1,
      title: "Resume Building",
      description: "Create a standout resume for international employers",
      progress: 75,
      icon: FileText,
    },
    {
      id: 2,
      title: "Interview Preparation",
      description: "Practice for job interviews with AI feedback",
      progress: 40,
      icon: Users,
    },
    {
      id: 3,
      title: "Career Planning",
      description: "Map your career path and set goals",
      progress: 20,
      icon: Briefcase,
    },
  ]

  // Sample job opportunities
  const opportunities = [
    {
      id: 1,
      title: "Marketing Intern",
      company: "Global Tech Ltd",
      location: "London, UK",
      type: "Internship",
      match: "High Match",
      matchColor: "green",
    },
    {
      id: 2,
      title: "Research Assistant",
      company: "University Research Center",
      location: "Manchester, UK",
      type: "Part-time",
      match: "Medium Match",
      matchColor: "yellow",
    },
    {
      id: 3,
      title: "Student Ambassador",
      company: "International Student Office",
      location: "On Campus",
      type: "Part-time",
      match: "High Match",
      matchColor: "green",
    },
  ]

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Career Support</h1>
        <p className="text-muted-foreground">Develop your career skills and find opportunities</p>
      </div>

      {/* Career Development Progress */}
      <div className="rounded-xl glass p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <GraduationCap className="mr-2 h-5 w-5" /> Career Development
        </h2>

        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <h3 className="font-medium">Overall Progress</h3>
            <span className="text-sm">45%</span>
          </div>
          <div className="w-full bg-primary/10 h-2 rounded-full">
            <div
              className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <div key={resource.id} className="bg-primary/5 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <resource.icon className="h-5 w-5 mr-2 text-primary" />
                <h3 className="font-medium">{resource.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
              <div className="mb-2">
                <div className="w-full bg-primary/10 h-1.5 rounded-full">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-1.5 rounded-full"
                    style={{ width: `${resource.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>{resource.progress}% complete</span>
                  <Link href="#" className="text-primary hover:underline">
                    Continue
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Services */}
      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <div className="rounded-xl glass p-6">
          <h2 className="text-xl font-semibold mb-4">Career Services</h2>
          <div className="space-y-4">
            <Link
              href="#"
              className="flex items-center p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Resume Review</h3>
                <p className="text-sm text-muted-foreground">Get expert feedback on your resume</p>
              </div>
            </Link>

            <Link
              href="#"
              className="flex items-center p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Mock Interviews</h3>
                <p className="text-sm text-muted-foreground">Practice with career advisors</p>
              </div>
            </Link>

            <Link
              href="#"
              className="flex items-center p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Job Search Strategy</h3>
                <p className="text-sm text-muted-foreground">Develop an effective job search plan</p>
              </div>
            </Link>

            <Link
              href="#"
              className="flex items-center p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Skills Assessment</h3>
                <p className="text-sm text-muted-foreground">Identify your strengths and areas for growth</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="rounded-xl glass p-6">
          <h2 className="text-xl font-semibold mb-4">Career Checklist</h2>
          <div className="space-y-3">
            <div className="flex items-center p-3 rounded-lg bg-primary/5">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span>Create international resume/CV</span>
            </div>
            <div className="flex items-center p-3 rounded-lg bg-primary/5">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span>Complete career assessment</span>
            </div>
            <div className="flex items-center p-3 rounded-lg bg-primary/5">
              <Clock className="h-5 w-5 text-yellow-500 mr-3" />
              <span>Practice interview skills</span>
            </div>
            <div className="flex items-center p-3 rounded-lg bg-primary/5">
              <Clock className="h-5 w-5 text-yellow-500 mr-3" />
              <span>Research target companies</span>
            </div>
            <div className="flex items-center p-3 rounded-lg bg-primary/5">
              <Clock className="h-5 w-5 text-muted-foreground mr-3" />
              <span>Create LinkedIn profile</span>
            </div>
            <div className="flex items-center p-3 rounded-lg bg-primary/5">
              <Clock className="h-5 w-5 text-muted-foreground mr-3" />
              <span>Attend networking event</span>
            </div>
          </div>

          <div className="mt-4">
            <Link href="#" className="text-sm text-primary hover:underline">
              View complete career preparation guide →
            </Link>
          </div>
        </div>
      </div>

      {/* Job Opportunities */}
      <div className="rounded-xl glass p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Job Opportunities</h2>
          <Link href="#" className="text-sm text-primary hover:underline">
            View all
          </Link>
        </div>

        <div className="space-y-4">
          {opportunities.map((job) => (
            <div key={job.id} className="p-4 rounded-lg bg-primary/5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{job.title}</h3>
                  <p className="text-sm text-muted-foreground">{job.company}</p>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{job.location}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="px-2 py-1 rounded text-xs bg-primary/10 mb-2">{job.type}</span>
                  <span className={`px-2 py-1 rounded text-xs bg-${job.matchColor}-500/10 text-${job.matchColor}-500`}>
                    {job.match}
                  </span>
                </div>
              </div>
              <div className="mt-3 flex justify-end space-x-2">
                <button className="text-sm px-3 py-1 rounded border border-primary/20 text-primary">Save</button>
                <button className="text-sm px-3 py-1 rounded bg-primary text-white">Apply</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Resources */}
      <div className="rounded-xl glass p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <BookOpen className="mr-2 h-5 w-5" /> Career Resources
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href="#"
            className="block rounded-lg overflow-hidden bg-primary/5 hover:bg-primary/10 transition-colors"
          >
            <div className="relative h-40">
              <Image src="/placeholder.svg?height=200&width=300" alt="Resume Templates" fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-1">Resume Templates</h3>
              <p className="text-sm text-muted-foreground">International resume formats and examples</p>
            </div>
          </Link>

          <Link
            href="#"
            className="block rounded-lg overflow-hidden bg-primary/5 hover:bg-primary/10 transition-colors"
          >
            <div className="relative h-40">
              <Image src="/placeholder.svg?height=200&width=300" alt="Interview Guides" fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-1">Interview Guides</h3>
              <p className="text-sm text-muted-foreground">Prepare for different interview formats</p>
            </div>
          </Link>

          <Link
            href="#"
            className="block rounded-lg overflow-hidden bg-primary/5 hover:bg-primary/10 transition-colors"
          >
            <div className="relative h-40">
              <Image src="/placeholder.svg?height=200&width=300" alt="Networking Tips" fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-1">Networking Tips</h3>
              <p className="text-sm text-muted-foreground">Build professional connections abroad</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
