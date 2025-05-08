"use client"

import { useState, useEffect } from "react"
import { Search, Filter, ChevronDown, ArrowUpDown, Star, Globe, Award, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardFooter } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { qsUniversities, type QSUniversity } from "@/data/qs-rankings"

export default function RankingsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("All Regions")
  const [selectedCountry, setSelectedCountry] = useState("All Countries")
  const [currentRanking, setCurrentRanking] = useState("qs")
  const [filteredUniversities, setFilteredUniversities] = useState<University[]>([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Sort universities based on the selected ranking
  useEffect(() => {
    let filtered = [...universities]

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

    // Sort based on selected ranking
    filtered.sort((a, b) => {
      if (currentRanking === "qs") {
        return a.qsRank - b.qsRank
      } else if (currentRanking === "times") {
        return a.timesRank - b.timesRank
      } else {
        return a.shanghaiRank - b.shanghaiRank
      }
    })

    setFilteredUniversities(filtered)
  }, [searchTerm, selectedRegion, selectedCountry, currentRanking])

  const getRankDisplay = (uni: University) => {
    if (currentRanking === "qs") {
      return uni.qsRank
    } else if (currentRanking === "times") {
      return uni.timesRank
    } else {
      return uni.shanghaiRank
    }
  }

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen)
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
        {filteredUniversities.map((university) => (
          <Card
            key={university.id}
            className="overflow-hidden border border-border hover:border-primary/50 transition-all"
          >
            <div className="flex flex-col md:flex-row">
              <div className="p-6 flex items-center justify-center md:w-1/6 bg-muted/30">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <img
                    src={university.logo || "/placeholder.svg"}
                    alt={`${university.name} logo`}
                    className="rounded-full bg-background p-2"
                  />
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
                  <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      <span>QS: #{university.qsRank}</span>
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3" />
                      <span>THE: #{university.timesRank}</span>
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Award className="h-3 w-3" />
                      <span>Shanghai: #{university.shanghaiRank}</span>
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Research Output</p>
                    <p className="text-sm font-medium">{university.researchOutput}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">International Students</p>
                    <p className="text-sm font-medium">{university.internationalStudents}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Tuition Fee Range</p>
                    <p className="text-sm font-medium">{university.tuitionFeeRange}</p>
                  </div>
                </div>
              </div>
            </div>
            <CardFooter className="bg-muted/20 px-6 py-3 flex justify-between">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Acceptance Rate</p>
                  <p className="text-sm font-medium">{university.acceptanceRate}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Student Satisfaction</p>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${i < Math.floor(university.studentSatisfaction) ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                      />
                    ))}
                    <span className="text-xs ml-1">{university.studentSatisfaction.toFixed(1)}</span>
                  </div>
                </div>
              </div>
              <Button size="sm" variant="default">
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
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
