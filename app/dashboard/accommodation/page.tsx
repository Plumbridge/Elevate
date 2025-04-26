import { Building, Clock, MapPin, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AccommodationPage() {
  // Sample accommodation options
  const accommodations = [
    {
      id: 1,
      name: "University Residence Hall",
      type: "On-campus",
      location: "North Campus",
      distance: "5 min walk to classes",
      price: "$800/month",
      amenities: ["Furnished", "Utilities included", "Meal plan", "Study rooms"],
      image: "/placeholder.svg?height=200&width=300",
      availability: "Available",
    },
    {
      id: 2,
      name: "Student Apartments",
      type: "Off-campus",
      location: "University District",
      distance: "15 min walk to campus",
      price: "$650/month",
      amenities: ["Furnished", "Utilities included", "Shared kitchen", "Laundry"],
      image: "/placeholder.svg?height=200&width=300",
      availability: "Limited",
    },
    {
      id: 3,
      name: "Homestay Program",
      type: "Homestay",
      location: "Various locations",
      distance: "20-30 min by bus",
      price: "$700/month",
      amenities: ["Private room", "Meals included", "Family environment", "Cultural immersion"],
      image: "/placeholder.svg?height=200&width=300",
      availability: "Available",
    },
  ]

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Accommodation</h1>
        <p className="text-muted-foreground">Find and manage your student housing options</p>
      </div>

      {/* Accommodation Status */}
      <div className="rounded-xl glass p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Building className="mr-2 h-5 w-5" /> Your Accommodation Status
        </h2>

        <div className="bg-primary/5 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Application Status</h3>
              <p className="text-sm text-muted-foreground">University Residence Hall application in progress</p>
            </div>
            <div className="bg-yellow-500/20 text-yellow-500 px-3 py-1 rounded text-sm">In Progress</div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-primary/10 h-2 rounded-full">
              <div
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                style={{ width: "40%" }}
              ></div>
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span>Application</span>
              <span>Processing</span>
              <span>Approval</span>
              <span>Confirmation</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-medium">Next Steps</h3>
            <div className="flex items-start">
              <Clock className="h-5 w-5 mr-3 text-yellow-500" />
              <div>
                <p className="font-medium">Wait for Application Review</p>
                <p className="text-sm text-muted-foreground">Expected by April 15, 2023</p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="h-5 w-5 mr-3 text-muted-foreground" />
              <div>
                <p className="font-medium">Make Deposit Payment</p>
                <p className="text-sm text-muted-foreground">Due after approval</p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="h-5 w-5 mr-3 text-muted-foreground" />
              <div>
                <p className="font-medium">Sign Housing Agreement</p>
                <p className="text-sm text-muted-foreground">Due after approval</p>
              </div>
            </div>
          </div>
          <div className="bg-primary/5 rounded-lg p-4">
            <h3 className="font-medium mb-3">Your Accommodation Advisor</h3>
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-lg font-bold">ML</span>
              </div>
              <div>
                <p className="font-medium">Michael Lee</p>
                <p className="text-sm text-muted-foreground">Housing Specialist</p>
                <Link href="/dashboard/messages" className="text-xs text-primary hover:underline">
                  Send message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accommodation Search */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Find Accommodation</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search accommodations..."
              className="rounded-full bg-primary/5 pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accommodations.map((accommodation) => (
            <div key={accommodation.id} className="rounded-xl glass overflow-hidden">
              <div className="relative h-40">
                <Image
                  src={accommodation.image || "/placeholder.svg"}
                  alt={accommodation.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                  {accommodation.availability}
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{accommodation.name}</h3>
                  <span className="text-sm font-semibold text-primary">{accommodation.price}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>
                    {accommodation.location} • {accommodation.distance}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {accommodation.amenities.slice(0, 3).map((amenity, index) => (
                    <span key={index} className="text-xs bg-primary/10 px-2 py-1 rounded">
                      {amenity}
                    </span>
                  ))}
                  {accommodation.amenities.length > 3 && (
                    <span className="text-xs bg-primary/10 px-2 py-1 rounded">
                      +{accommodation.amenities.length - 3} more
                    </span>
                  )}
                </div>
                <button className="w-full text-sm py-2 rounded bg-primary text-white">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accommodation Resources */}
      <div className="rounded-xl glass p-6">
        <h2 className="text-xl font-semibold mb-4">Accommodation Resources</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="#" className="block p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
            <h3 className="font-medium mb-1">Housing Guide</h3>
            <p className="text-sm text-muted-foreground">Tips for finding the right accommodation</p>
          </Link>
          <Link href="#" className="block p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
            <h3 className="font-medium mb-1">Neighborhood Guide</h3>
            <p className="text-sm text-muted-foreground">Explore different areas around campus</p>
          </Link>
          <Link href="#" className="block p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
            <h3 className="font-medium mb-1">Roommate Finder</h3>
            <p className="text-sm text-muted-foreground">Find compatible roommates for shared housing</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
