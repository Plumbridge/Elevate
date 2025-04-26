import { Calendar, CheckCircle, Clock, FileText, Plane } from "lucide-react"
import Link from "next/link"

export default function VisaSupportPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Visa Support</h1>
        <p className="text-muted-foreground">Track and manage your visa application process</p>
      </div>

      {/* Visa Status Card */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <div className="col-span-2 rounded-xl glass p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Plane className="mr-2 h-5 w-5" /> Student Visa Status
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Application Submitted</span>
              </div>
              <span className="text-sm text-muted-foreground">March 15, 2023</span>
            </div>

            <div className="w-full bg-primary/10 h-2 rounded-full">
              <div
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>

            <div className="grid grid-cols-5 text-xs">
              <div className="text-green-500">Submitted</div>
              <div className="text-green-500">Processing</div>
              <div className="text-green-500">Interview</div>
              <div className="text-muted-foreground">Decision</div>
              <div className="text-muted-foreground">Received</div>
            </div>

            <div className="bg-primary/5 rounded-lg p-4 mt-4">
              <h3 className="font-medium mb-2 flex items-center">
                <Clock className="h-4 w-4 mr-2" /> Next Steps
              </h3>
              <p className="text-sm text-muted-foreground">
                Your visa interview is scheduled for April 10, 2023. Make sure to prepare all required documents.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl glass p-6">
          <h2 className="text-xl font-semibold mb-4">Important Dates</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <Calendar className="h-5 w-5 mr-3 text-primary" />
              <div>
                <p className="font-medium">Visa Interview</p>
                <p className="text-sm text-muted-foreground">April 10, 2023 - 10:30 AM</p>
              </div>
            </div>
            <div className="flex items-start">
              <Calendar className="h-5 w-5 mr-3 text-primary" />
              <div>
                <p className="font-medium">Expected Decision Date</p>
                <p className="text-sm text-muted-foreground">April 25, 2023</p>
              </div>
            </div>
            <div className="flex items-start">
              <Calendar className="h-5 w-5 mr-3 text-primary" />
              <div>
                <p className="font-medium">University Term Start</p>
                <p className="text-sm text-muted-foreground">September 5, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Required Documents */}
      <div className="rounded-xl glass p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <FileText className="mr-2 h-5 w-5" /> Required Documents
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-primary/5">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Passport (Valid for 6+ months)</span>
              </div>
              <span className="text-xs bg-green-500/20 text-green-500 px-2 py-1 rounded">Uploaded</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-primary/5">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>University Acceptance Letter</span>
              </div>
              <span className="text-xs bg-green-500/20 text-green-500 px-2 py-1 rounded">Uploaded</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-primary/5">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Financial Statements</span>
              </div>
              <span className="text-xs bg-green-500/20 text-green-500 px-2 py-1 rounded">Uploaded</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-primary/5">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Visa Application Form</span>
              </div>
              <span className="text-xs bg-green-500/20 text-green-500 px-2 py-1 rounded">Uploaded</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-primary/5">
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-yellow-500 mr-2" />
                <span>Health Insurance Proof</span>
              </div>
              <span className="text-xs bg-yellow-500/20 text-yellow-500 px-2 py-1 rounded">Pending</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-primary/5">
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-yellow-500 mr-2" />
                <span>Accommodation Proof</span>
              </div>
              <span className="text-xs bg-yellow-500/20 text-yellow-500 px-2 py-1 rounded">Pending</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Link href="/dashboard/documents" className="text-sm text-primary hover:underline">
            Upload missing documents →
          </Link>
        </div>
      </div>

      {/* Visa Support Team */}
      <div className="rounded-xl glass p-6">
        <h2 className="text-xl font-semibold mb-4">Your Visa Support Team</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-lg font-bold">SJ</span>
            </div>
            <div>
              <p className="font-medium">Sarah Johnson</p>
              <p className="text-sm text-muted-foreground">Visa Specialist</p>
              <Link href="/dashboard/messages" className="text-xs text-primary hover:underline">
                Send message
              </Link>
            </div>
          </div>
          <div className="bg-primary/5 rounded-lg p-4">
            <h3 className="font-medium mb-2">Next Consultation</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2" />
              <span>March 30, 2023 - 2:00 PM</span>
            </div>
            <div className="mt-3 flex space-x-2">
              <button className="text-xs px-3 py-1 rounded bg-primary text-white">Join Call</button>
              <button className="text-xs px-3 py-1 rounded border border-primary/20 text-primary">Reschedule</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
