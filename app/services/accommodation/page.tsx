import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  ChevronRight,
  Home,
  Building,
  Users,
  Bed,
  MapPin,
  Clock,
  Wallet,
  Shield,
  Star,
  CheckCircle,
} from "lucide-react"

export default function AccommodationPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section with Split Design */}
      <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
        <div>
          <Badge className="mb-4 px-3 py-1 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100 rounded-full">
            Student Housing
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Find Your Perfect{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              Home Away From Home
            </span>
          </h1>
          <p className="text-muted-foreground mb-8">
            At Elevate, we understand that the right accommodation is crucial for your study abroad experience. Let us
            guide you to a living space that feels like home and supports your academic journey.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white gap-2"
          >
            <span>Start Your Accommodation Search</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-100 dark:bg-amber-900/30 rounded-full z-0"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-100 dark:bg-orange-900/30 rounded-full z-0"></div>
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-lg shadow-sm h-48 flex flex-col justify-center">
              <Home className="h-8 w-8 text-amber-500 mb-3" />
              <h3 className="font-semibold mb-1">University Dorms</h3>
              <p className="text-sm text-muted-foreground">Convenient on-campus living with built-in community</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-lg shadow-sm h-48 flex flex-col justify-center mt-8">
              <Building className="h-8 w-8 text-amber-500 mb-3" />
              <h3 className="font-semibold mb-1">Private Apartments</h3>
              <p className="text-sm text-muted-foreground">Independent living with privacy and freedom</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-lg shadow-sm h-48 flex flex-col justify-center">
              <Users className="h-8 w-8 text-amber-500 mb-3" />
              <h3 className="font-semibold mb-1">Shared Housing</h3>
              <p className="text-sm text-muted-foreground">Cost-effective with social opportunities</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-lg shadow-sm h-48 flex flex-col justify-center mt-8">
              <Bed className="h-8 w-8 text-amber-500 mb-3" />
              <h3 className="font-semibold mb-1">Homestays</h3>
              <p className="text-sm text-muted-foreground">Cultural immersion with local families</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Why Choose Our{" "}
          <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
            Accommodation Services
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative overflow-hidden rounded-xl border border-amber-100 dark:border-amber-900/30 p-8">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-600"></div>
            <MapPin className="h-10 w-10 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold mb-3">Local Expertise, Global Reach</h3>
            <p className="text-muted-foreground">
              Our extensive network of housing partners spans across major study destinations worldwide. We combine this
              global reach with in-depth local knowledge to ensure you have access to the best housing options in your
              chosen city.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-amber-100 dark:border-amber-900/30 p-8">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-600"></div>
            <Wallet className="h-10 w-10 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold mb-3">Options for Every Budget</h3>
            <p className="text-muted-foreground">
              We understand student budgets vary widely. Our diverse portfolio includes options ranging from economical
              shared housing to premium private accommodations, ensuring we can match you with a home that fits your
              financial plan.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-amber-100 dark:border-amber-900/30 p-8">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-600"></div>
            <Shield className="h-10 w-10 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold mb-3">Safety & Security First</h3>
            <p className="text-muted-foreground">
              Your safety is our priority. We personally vet all accommodations in our network, ensuring they meet our
              strict security standards, have proper safety measures in place, and are located in secure neighborhoods.
            </p>
          </div>
        </div>
      </div>

      {/* Accommodation Types Tabs */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Find Your{" "}
          <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
            Ideal Living Space
          </span>
        </h2>

        <Tabs defaultValue="dorms" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="dorms">University Dorms</TabsTrigger>
            <TabsTrigger value="apartments">Private Apartments</TabsTrigger>
            <TabsTrigger value="shared">Shared Housing</TabsTrigger>
            <TabsTrigger value="homestays">Homestays</TabsTrigger>
          </TabsList>

          <TabsContent
            value="dorms"
            className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 p-8 rounded-xl"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">University Dormitories</h3>
                <p className="mb-6 text-muted-foreground">
                  University dormitories offer the quintessential college experience with easy access to campus
                  facilities, built-in social networks, and typically all-inclusive pricing. Ideal for first-year
                  students or those wanting maximum integration into campus life.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Convenient Location</span>
                      <p className="text-sm text-muted-foreground">Typically located on or very near campus</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Built-in Community</span>
                      <p className="text-sm text-muted-foreground">Easy to meet other students and make friends</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">All-Inclusive Pricing</span>
                      <p className="text-sm text-muted-foreground">
                        Utilities, internet, and sometimes meal plans included
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Security</span>
                      <p className="text-sm text-muted-foreground">24/7 security and resident advisors</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Star className="h-5 w-5 text-amber-500 mr-2" />
                    Student Testimonial
                  </h4>
                  <p className="italic text-muted-foreground mb-4">
                    "Living in the university dorms made my transition to college so much easier. I was worried about
                    making friends in a new country, but the community events and shared spaces made it simple to
                    connect with other students."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-amber-100 mr-3"></div>
                    <div>
                      <p className="font-medium text-sm">Maria C.</p>
                      <p className="text-xs text-muted-foreground">University of Manchester</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold mb-3">Average Cost Range</h4>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Budget</span>
                    <span className="text-sm">Premium</span>
                  </div>
                  <div className="h-2 bg-amber-100 rounded-full mb-4">
                    <div className="h-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full w-3/4"></div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    University dorms typically range from $600-$1,500 per month depending on the location, room type
                    (shared vs. private), and included amenities.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="apartments"
            className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 p-8 rounded-xl"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Private Apartments</h3>
                <p className="mb-6 text-muted-foreground">
                  Private apartments offer independence and privacy, allowing you to create your own living environment.
                  Ideal for mature students, those with partners, or anyone who values personal space and autonomy in
                  their daily routine.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Complete Privacy</span>
                      <p className="text-sm text-muted-foreground">Your own space without shared common areas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Personalization</span>
                      <p className="text-sm text-muted-foreground">Freedom to decorate and make the space your own</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Flexible Lifestyle</span>
                      <p className="text-sm text-muted-foreground">No restrictions on guests or quiet hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Location Options</span>
                      <p className="text-sm text-muted-foreground">Choose neighborhoods that match your preferences</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Star className="h-5 w-5 text-amber-500 mr-2" />
                    Student Testimonial
                  </h4>
                  <p className="italic text-muted-foreground mb-4">
                    "After my first year in dorms, I wanted more independence. Elevate helped me find a perfect studio
                    apartment near campus that gave me the quiet space I needed for my studies while still being close
                    to university life."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-amber-100 mr-3"></div>
                    <div>
                      <p className="font-medium text-sm">James T.</p>
                      <p className="text-xs text-muted-foreground">NYU</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold mb-3">Average Cost Range</h4>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Budget</span>
                    <span className="text-sm">Premium</span>
                  </div>
                  <div className="h-2 bg-amber-100 rounded-full mb-4">
                    <div className="h-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full w-5/6"></div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Private apartments typically range from $800-$2,500+ per month depending on the city, neighborhood,
                    size, and amenities. Remember to factor in utilities and internet costs.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="shared"
            className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 p-8 rounded-xl"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Shared Housing</h3>
                <p className="mb-6 text-muted-foreground">
                  Shared housing offers the perfect balance between affordability and independence. Live with other
                  students or young professionals in a house or apartment, sharing common spaces while having your own
                  private bedroom.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Cost-Effective</span>
                      <p className="text-sm text-muted-foreground">Split rent and utilities with housemates</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Social Environment</span>
                      <p className="text-sm text-muted-foreground">
                        Built-in social circle with potential for friendships
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Larger Living Spaces</span>
                      <p className="text-sm text-muted-foreground">
                        Access to full kitchens, living rooms, and sometimes outdoor areas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Flexibility</span>
                      <p className="text-sm text-muted-foreground">More housing options in various neighborhoods</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Star className="h-5 w-5 text-amber-500 mr-2" />
                    Student Testimonial
                  </h4>
                  <p className="italic text-muted-foreground mb-4">
                    "Sharing an apartment with other international students has been the highlight of my study abroad
                    experience. We cook together, explore the city together, and I've made friends from around the world
                    while keeping my housing costs manageable."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-amber-100 mr-3"></div>
                    <div>
                      <p className="font-medium text-sm">Aisha K.</p>
                      <p className="text-xs text-muted-foreground">University of Toronto</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold mb-3">Average Cost Range</h4>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Budget</span>
                    <span className="text-sm">Premium</span>
                  </div>
                  <div className="h-2 bg-amber-100 rounded-full mb-4">
                    <div className="h-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full w-1/2"></div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Shared housing typically ranges from $400-$1,200 per month per room depending on the location,
                    quality of accommodation, and number of housemates.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="homestays"
            className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 p-8 rounded-xl"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Homestays</h3>
                <p className="mb-6 text-muted-foreground">
                  Homestays offer a unique cultural immersion experience by living with a local host family. This option
                  provides support, cultural exchange, and often includes meals and amenities in a family environment.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Cultural Immersion</span>
                      <p className="text-sm text-muted-foreground">
                        Experience local customs, traditions, and daily life
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Language Practice</span>
                      <p className="text-sm text-muted-foreground">
                        Improve language skills through daily conversation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Home-Cooked Meals</span>
                      <p className="text-sm text-muted-foreground">Many homestays include meals in the arrangement</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Local Support System</span>
                      <p className="text-sm text-muted-foreground">
                        Host families can provide guidance and help with adjustment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Star className="h-5 w-5 text-amber-500 mr-2" />
                    Student Testimonial
                  </h4>
                  <p className="italic text-muted-foreground mb-4">
                    "My homestay experience in Barcelona was incredible. My host family treated me like their own
                    daughter, helped me practice Spanish, and introduced me to authentic Catalan cuisine. I gained so
                    much more than just a place to stay."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-amber-100 mr-3"></div>
                    <div>
                      <p className="font-medium text-sm">Emily W.</p>
                      <p className="text-xs text-muted-foreground">Universitat de Barcelona</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold mb-3">Average Cost Range</h4>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Budget</span>
                    <span className="text-sm">Premium</span>
                  </div>
                  <div className="h-2 bg-amber-100 rounded-full mb-4">
                    <div className="h-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full w-2/3"></div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Homestays typically range from $500-$1,300 per month depending on the location, included meals, and
                    amenities. Most include utilities and internet in the price.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Our Process Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our{" "}
          <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
            Comprehensive
          </span>{" "}
          Accommodation Support
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold">
              1
            </div>
            <Clock className="h-8 w-8 text-amber-500 mb-4" />
            <h3 className="text-lg font-bold mb-2">Personalized Consultation</h3>
            <p className="text-sm text-muted-foreground">
              We start by understanding your specific needs, preferences, and budget. Our housing experts will discuss
              various options, from university dormitories to shared apartments or homestays, helping you make an
              informed decision.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold">
              2
            </div>
            <Home className="h-8 w-8 text-amber-500 mb-4" />
            <h3 className="text-lg font-bold mb-2">Curated Housing Options</h3>
            <p className="text-sm text-muted-foreground">
              Based on your preferences, we present a carefully selected list of accommodation options. Each suggestion
              comes with detailed information about amenities, proximity to your institution, transportation links, and
              neighborhood highlights.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold">
              3
            </div>
            <MapPin className="h-8 w-8 text-amber-500 mb-4" />
            <h3 className="text-lg font-bold mb-2">Virtual Tours</h3>
            <p className="text-sm text-muted-foreground">
              Can't visit in person? No problem. We arrange virtual tours of potential accommodations, allowing you to
              explore your future home from afar. Our team is available to answer questions and provide real-time
              assistance during these virtual visits.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold">
              4
            </div>
            <Shield className="h-8 w-8 text-amber-500 mb-4" />
            <h3 className="text-lg font-bold mb-2">Lease Negotiation</h3>
            <p className="text-sm text-muted-foreground">
              Navigating rental agreements in a foreign country can be daunting. Our experts review lease terms, explain
              your rights and responsibilities, and can even negotiate on your behalf to ensure fair terms and
              conditions.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold">
              5
            </div>
            <Users className="h-8 w-8 text-amber-500 mb-4" />
            <h3 className="text-lg font-bold mb-2">Move-In Support</h3>
            <p className="text-sm text-muted-foreground">
              We coordinate with property managers to ensure a smooth move-in process. From arranging key collection to
              helping you understand local utilities and services, we ensure you're fully prepared for your arrival.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Students Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="italic mb-6">
                "Elevate found me the perfect apartment just 10 minutes from campus. Their team negotiated with the
                landlord to include utilities in my rent and even helped me set up internet before I arrived. The whole
                process was seamless!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 mr-3"></div>
                <div>
                  <p className="font-medium">David L.</p>
                  <p className="text-xs opacity-75">London School of Economics</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="italic mb-6">
                "As a parent, I was worried about my daughter's accommodation abroad. Elevate's team took the time to
                understand our concerns and found a safe, well-managed student residence with 24/7 security. Their
                attention to detail gave us peace of mind."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 mr-3"></div>
                <div>
                  <p className="font-medium">Susan R.</p>
                  <p className="text-xs opacity-75">Parent of UCLA Student</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="italic mb-6">
                "I was struggling to find affordable housing in Sydney until I contacted Elevate. They connected me with
                two other students looking for a roommate, and we found a great apartment together. Their team handled
                all the paperwork and made the process stress-free."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 mr-3"></div>
                <div>
                  <p className="font-medium">Min-Jun K.</p>
                  <p className="text-xs opacity-75">University of Sydney</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Student Home?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Schedule a free consultation to discuss your accommodation needs and preferences. Our housing experts are
          ready to help you find the perfect place to call home during your studies.
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white gap-2"
        >
          <span>Start Your Accommodation Search</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
