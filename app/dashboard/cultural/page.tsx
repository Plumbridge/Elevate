import { Calendar } from "@/components/ui/calendar"
import { BookOpen, CheckCircle, Clock, Globe, Languages, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CulturalPreparationPage() {
  // Sample cultural resources
  const resources = [
    {
      id: 1,
      title: "Language Learning",
      description: "Interactive language courses to help you prepare",
      progress: 35,
      icon: Languages,
    },
    {
      id: 2,
      title: "Cultural Norms",
      description: "Learn about social customs and etiquette",
      progress: 60,
      icon: Globe,
    },
    {
      id: 3,
      title: "Local Navigation",
      description: "Transportation systems and getting around",
      progress: 20,
      icon: MapPin,
    },
  ]

  // Sample events
  const events = [
    {
      id: 1,
      title: "Pre-Departure Orientation",
      date: "May 15, 2023",
      time: "10:00 AM - 12:00 PM",
      location: "Online (Zoom)",
      type: "Webinar",
    },
    {
      id: 2,
      title: "Cultural Exchange Meetup",
      date: "May 22, 2023",
      time: "3:00 PM - 5:00 PM",
      location: "Student Center",
      type: "In-person",
    },
    {
      id: 3,
      title: "Alumni Q&A Session",
      date: "June 5, 2023",
      time: "6:00 PM - 7:30 PM",
      location: "Online (Zoom)",
      type: "Webinar",
    },
  ]

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Cultural Preparation</h1>
        <p className="text-muted-foreground">Prepare for your study abroad experience</p>
      </div>

      {/* Cultural Preparation Progress */}
      <div className="rounded-xl glass p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Globe className="mr-2 h-5 w-5" /> Your Cultural Preparation
        </h2>

        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <h3 className="font-medium">Overall Progress</h3>
            <span className="text-sm">40%</span>
          </div>
          <div className="w-full bg-primary/10 h-2 rounded-full">
            <div
              className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
              style={{ width: "40%" }}
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

      {/* Country Information */}
      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <div className="rounded-xl glass p-6">
          <h2 className="text-xl font-semibold mb-4">Country Information</h2>
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-lg">United Kingdom</h3>
              <p className="text-sm text-muted-foreground">Your destination country</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-primary/5">
              <span>Capital</span>
              <span>London</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-primary/5">
              <span>Language</span>
              <span>English</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-primary/5">
              <span>Currency</span>
              <span>British Pound (£)</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-primary/5">
              <span>Time Zone</span>
              <span>GMT/BST</span>
            </div>
          </div>

          <div className="mt-4">
            <Link href="#" className="text-sm text-primary hover:underline">
              View detailed country guide →
            </Link>
          </div>
        </div>

        <div className="rounded-xl glass p-6">
          <h2 className="text-xl font-semibold mb-4">Cultural Checklist</h2>
          <div className="space-y-3">
            <div className="flex items-center p-3 rounded-lg bg-primary/5">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span>Complete cultural orientation module</span>
            </div>
            <div className="flex items-center p-3 rounded-lg bg-primary/5">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span>Research local customs and etiquette</span>
            </div>
            <div className="flex items-center p-3 rounded-lg bg-primary/5">
              <Clock className="h-5 w-5 text-yellow-500 mr-3" />
              <span>Learn basic local phrases</span>
            </div>
            <div className="flex items-center p-3 rounded-lg bg-primary/5">
              <Clock className="h-5 w-5 text-yellow-500 mr-3" />
              <span>Research local transportation options</span>
            </div>
            <div className="flex items-center p-3 rounded-lg bg-primary/5">
              <Clock className="h-5 w-5 text-muted-foreground mr-3" />
              <span>Understand academic expectations</span>
            </div>
            <div className="flex items-center p-3 rounded-lg bg-primary/5">
              <Clock className="h-5 w-5 text-muted-foreground mr-3" />
              <span>Research local healthcare system</span>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="rounded-xl glass p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Upcoming Events</h2>
          <Link href="#" className="text-sm text-primary hover:underline">
            View all
          </Link>
        </div>

        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="p-4 rounded-lg bg-primary/5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{event.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>
                      {event.date} • {event.time}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="px-2 py-1 rounded text-xs bg-primary/10 mb-2">{event.type}</span>
                  <button className="text-sm px-3 py-1 rounded bg-primary text-white">Register</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cultural Resources */}
      <div className="rounded-xl glass p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <BookOpen className="mr-2 h-5 w-5" /> Cultural Resources
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href="#"
            className="block rounded-lg overflow-hidden bg-primary/5 hover:bg-primary/10 transition-colors"
          >
            <div className="relative h-40">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Language Learning"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-1">Language Learning Resources</h3>
              <p className="text-sm text-muted-foreground">Interactive courses and practice materials</p>
            </div>
          </Link>

          <Link
            href="#"
            className="block rounded-lg overflow-hidden bg-primary/5 hover:bg-primary/10 transition-colors"
          >
            <div className="relative h-40">
              <Image src="/placeholder.svg?height=200&width=300" alt="Cultural Guides" fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-1">Cultural Guides</h3>
              <p className="text-sm text-muted-foreground">Comprehensive guides to local customs</p>
            </div>
          </Link>

          <Link
            href="#"
            className="block rounded-lg overflow-hidden bg-primary/5 hover:bg-primary/10 transition-colors"
          >
            <div className="relative h-40">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Student Experiences"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-1">Student Experiences</h3>
              <p className="text-sm text-muted-foreground">Stories and advice from past students</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
