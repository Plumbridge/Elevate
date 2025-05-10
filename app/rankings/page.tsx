"use client"

import { useState, useEffect } from "react"
import {
  Search,
  Filter,
  ChevronDown,
  ArrowUpDown,
  Star,
  Globe,
  Award,
  BookOpen,
  Briefcase,
  Users,
  FileText,
  GraduationCap,
  Network,
  TrendingUp,
  Leaf,
  School,
  Lightbulb,
  BarChart,
  Building,
  Plane,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardFooter } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Import from separate ranking files
import { qsUniversities, qsMetrics, type QSUniversity } from "@/data/qs-rankings"
import { timesUniversities, timesMetrics, type TimesUniversity } from "@/data/times-rankings"
import { regions, countries, rankingTypes } from "@/data/rankings-common"

// This will be a union type as we add more ranking systems
type University = QSUniversity | TimesUniversity // | ShanghaiUniversity

export default function RankingsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("All Regions")
  const [selectedCountry, setSelectedCountry] = useState("All Countries")
  const [currentRanking, setCurrentRanking] = useState("qs")
  const [filteredUniversities, setFilteredUniversities] = useState<University[]>([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Get the appropriate university list based on the selected ranking
  const getUniversityList = () => {
    switch (currentRanking) {
      case "qs":
        return qsUniversities
      case "times":
        return timesUniversities
      case "shanghai":
        // return shanghaiUniversities when available
        return []
      default:
        return qsUniversities
    }
  }

  // Sort universities based on the selected ranking
  useEffect(() => {
    let filtered = [...getUniversityList()] as University[]

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (uni) =>
          uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          uni.country.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Apply region filter
    if (selectedRegion !== "All Regions") {
      filtered = filtered.filter((uni) => uni.region === selectedRegion)
    }

    // Apply country filter
    if (selectedCountry !== "All Countries") {
      filtered = filtered.filter((uni) => uni.country === selectedCountry)
    }

    // Sort based on rank (all ranking types have a rank field)
    if (currentRanking === "qs") {
      filtered.sort((a, b) => (a as QSUniversity).qsRank - (b as QSUniversity).qsRank)
    } else if (currentRanking === "times") {
      filtered.sort((a, b) => (a as TimesUniversity).timesRank - (b as TimesUniversity).timesRank)
    }
    // Add sorting for other ranking types when available

    setFilteredUniversities(filtered)
  }, [searchTerm, selectedRegion, selectedCountry, currentRanking])

  const getRankDisplay = (uni: University) => {
    if (currentRanking === "qs") {
      return (uni as QSUniversity).qsRank
    } else if (currentRanking === "times") {
      return (uni as TimesUniversity).timesRank
    }
    // Add handling for other ranking types when available
    return 0
  }

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  // Helper function to get the appropriate icon for a metric
  const getMetricIcon = (metricId: string) => {
    // QS metrics
    switch (metricId) {
      // QS metrics
      case "academicReputation":
        return <BookOpen className="h-4 w-4" />
      case "employerReputation":
        return <Briefcase className="h-4 w-4" />
      case "facultyStudentRatio":
        return <Users className="h-4 w-4" />
      case "citationsPerFaculty":
        return <FileText className="h-4 w-4" />
      case "internationalFaculty":
        return <Globe className="h-4 w-4" />
      case "internationalStudents":
        return <GraduationCap className="h-4 w-4" />
      case "internationalResearchNetwork":
        return <Network className="h-4 w-4" />
      case "employmentOutcomes":
        return <TrendingUp className="h-4 w-4" />
      case "sustainability":
        return <Leaf className="h-4 w-4" />

      // Times metrics
      case "teaching":
        return <School className="h-4 w-4" />
      case "research":
        return <Lightbulb className="h-4 w-4" />
      case "citations":
        return <BarChart className="h-4 w-4" />
      case "industryIncome":
        return <Building className="h-4 w-4" />
      case "internationalOutlook":
        return <Plane className="h-4 w-4" />

      default:
        return <Star className="h-4 w-4" />
    }
  }

  // Helper function to get a color for each metric
  const getMetricColor = (metricId: string) => {
    // QS metrics
    switch (metricId) {
      // QS metrics
      case "academicReputation":
        return "bg-blue-500"
      case "employerReputation":
        return "bg-purple-500"
      case "facultyStudentRatio":
        return "bg-green-500"
      case "citationsPerFaculty":
        return "bg-amber-500"
      case "internationalFaculty":
        return "bg-red-500"
      case "internationalStudents":
        return "bg-teal-500"
      case "internationalResearchNetwork":
        return "bg-indigo-500"
      case "employmentOutcomes":
        return "bg-pink-500"
      case "sustainability":
        return "bg-emerald-500"

      // Times metrics
      case "teaching":
        return "bg-orange-500"
      case "research":
        return "bg-cyan-500"
      case "citations":
        return "bg-violet-500"
      case "industryIncome":
        return "bg-rose-500"
      case "internationalOutlook":
        return "bg-lime-500"

      default:
        return "bg-primary"
    }
  }

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          University <span className="text-gradient">Rankings</span>
        </h1>
        <p className="text-muted-foreground">
          Compare top universities worldwide across different ranking systems to find the perfect match for your
          academic journey.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search universities..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2" onClick={toggleFilter}>
            <Filter className="h-4 w-4" />
            <span>Filters</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${isFilterOpen ? "rotate-180" : ""}`} />
          </Button>
        </div>

        {/* Filter Options */}
        {isFilterOpen && (
          <div className="bg-card rounded-lg p-4 mb-4 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Region</label>
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    {regions.map((region) => (
                      <SelectItem key={region} value={region}>
                        {region}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Country</label>
                <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Ranking System</label>
                <Select value={currentRanking} onValueChange={setCurrentRanking}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select ranking system" />
                  </SelectTrigger>
                  <SelectContent>
                    {rankingTypes.map((type) => (
                      <SelectItem key={type.id} value={type.id}>
                        {type.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}

        {/* Ranking System Tabs */}
        <Tabs defaultValue="qs" value={currentRanking} onValueChange={setCurrentRanking} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="qs" className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span>QS Rankings</span>
            </TabsTrigger>
            <TabsTrigger value="times" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Times Higher Ed</span>
            </TabsTrigger>
            <TabsTrigger value="shanghai" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>Shanghai Rankings</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Results Count */}
      <div className="mb-6 flex justify-between items-center">
        <p className="text-muted-foreground">Showing {filteredUniversities.length} universities</p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ArrowUpDown className="h-4 w-4" />
              <span>Sort</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setCurrentRanking("qs")}>QS Ranking</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setCurrentRanking("times")}>Times Higher Education</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setCurrentRanking("shanghai")}>Shanghai Ranking</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* University Rankings List */}
      <div className="grid grid-cols-1 gap-6">
        {filteredUniversities.map((university) => {
          // Handle different university types based on current ranking
          const isQS = currentRanking === "qs"
          const isTimes = currentRanking === "times"

          return (
            <Card
              key={university.id}
              className="overflow-hidden border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex flex-col md:flex-row">
                <div className="p-6 flex items-center justify-center md:w-1/6 bg-muted/30">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center text-xl font-bold">
                      {university.id}
                    </div>
                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {getRankDisplay(university)}
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{university.name}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground text-sm">
                          {university.country}, {university.region}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <div className="flex flex-col items-end">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium">Overall Score:</span>
                          <span className="text-lg font-bold">{university.overallScore.toFixed(1)}</span>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-500" />
                            <span>
                              QS: #{isQS ? (university as QSUniversity).qsRank : (university as any).qsRank || "N/A"}
                            </span>
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <BookOpen className="h-3 w-3 text-blue-500" />
                            <span>
                              THE: #
                              {isTimes
                                ? (university as TimesUniversity).timesRank
                                : (university as any).timesRank || "N/A"}
                            </span>
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Award className="h-3 w-3 text-red-500" />
                            <span>Shanghai: #{(university as any).shanghaiRank || "N/A"}</span>
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* QS Metrics Section */}
                  {isQS && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-3">QS Ranking Metrics</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {qsMetrics.map((metric) => {
                          const qsUni = university as QSUniversity
                          const metricData = qsUni.metrics[metric.id as keyof typeof qsUni.metrics]
                          const colorClass = getMetricColor(metric.id)

                          return (
                            <div key={metric.id} className="flex flex-col">
                              <div className="flex items-center gap-2 mb-1">
                                {getMetricIcon(metric.id)}
                                <span className="text-xs text-muted-foreground">{metric.name}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="relative flex-1 h-2 overflow-hidden rounded-full bg-gray-200">
                                  <div
                                    className={`h-full ${colorClass} transition-all`}
                                    style={{ width: `${metricData?.score || 0}%` }}
                                  />
                                </div>
                                <span className="text-xs font-medium">{metricData?.score.toFixed(1) || "N/A"}</span>
                                <span className="text-xs text-muted-foreground">(#{metricData?.rank || "N/A"})</span>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {/* Times Higher Education Metrics Section */}
                  {isTimes && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-3">Times Higher Education Metrics</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {timesMetrics.map((metric) => {
                          const timesUni = university as TimesUniversity
                          const metricData = timesUni.metrics[metric.id as keyof typeof timesUni.metrics]
                          const colorClass = getMetricColor(metric.id)

                          return (
                            <div key={metric.id} className="flex flex-col">
                              <div className="flex items-center gap-2 mb-1">
                                {getMetricIcon(metric.id)}
                                <span className="text-xs text-muted-foreground">{metric.name}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="relative flex-1 h-2 overflow-hidden rounded-full bg-gray-200">
                                  <div
                                    className={`h-full ${colorClass} transition-all`}
                                    style={{ width: `${metricData?.score || 0}%` }}
                                  />
                                </div>
                                <span className="text-xs font-medium">{metricData?.score.toFixed(1) || "N/A"}</span>
                                <span className="text-xs text-muted-foreground">(#{metricData?.rank || "N/A"})</span>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {/* Placeholder for Shanghai ranking metrics */}
                  {currentRanking === "shanghai" && (
                    <div className="mt-4">
                      <p className="text-center text-muted-foreground">Shanghai Academic Ranking metrics coming soon</p>
                    </div>
                  )}
                </div>
              </div>
              <CardFooter className="bg-muted/20 px-6 py-3 flex justify-between">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Rank</p>
                    <p className="text-sm font-medium">#{getRankDisplay(university)}</p>
                  </div>
                </div>
                <Button size="sm" variant="default">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>

      {filteredUniversities.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No universities found matching your criteria.</p>
          <Button
            variant="link"
            onClick={() => {
              setSearchTerm("")
              setSelectedRegion("All Regions")
              setSelectedCountry("All Countries")
            }}
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  )
}
