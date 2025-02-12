"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CountrySelector } from "@/components/country-selector"

const studyCountries = [
  { value: "uk", label: "United Kingdom" },
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "jp", label: "Japan" },
  { value: "sg", label: "Singapore" },
  { value: "nl", label: "Netherlands" },
  { value: "se", label: "Sweden" },
]

const nationalityCountries = [
  { value: "af", label: "Afghanistan" },
  { value: "al", label: "Albania" },
  { value: "dz", label: "Algeria" },
  { value: "ar", label: "Argentina" },
  { value: "am", label: "Armenia" },
  { value: "au", label: "Australia" },
  { value: "at", label: "Austria" },
  { value: "az", label: "Azerbaijan" },
  { value: "bh", label: "Bahrain" },
  { value: "bd", label: "Bangladesh" },
  { value: "by", label: "Belarus" },
  { value: "be", label: "Belgium" },
  { value: "br", label: "Brazil" },
  { value: "bg", label: "Bulgaria" },
  { value: "kh", label: "Cambodia" },
  { value: "cm", label: "Cameroon" },
  { value: "ca", label: "Canada" },
  { value: "cl", label: "Chile" },
  { value: "cn", label: "China" },
  { value: "co", label: "Colombia" },
  { value: "cr", label: "Costa Rica" },
  { value: "hr", label: "Croatia" },
  { value: "cu", label: "Cuba" },
  { value: "cy", label: "Cyprus" },
  { value: "cz", label: "Czech Republic" },
  { value: "dk", label: "Denmark" },
  { value: "do", label: "Dominican Republic" },
  { value: "ec", label: "Ecuador" },
  { value: "eg", label: "Egypt" },
  { value: "sv", label: "El Salvador" },
  { value: "ee", label: "Estonia" },
  { value: "et", label: "Ethiopia" },
  { value: "fi", label: "Finland" },
  { value: "fr", label: "France" },
  { value: "ge", label: "Georgia" },
  { value: "de", label: "Germany" },
  { value: "gh", label: "Ghana" },
  { value: "gr", label: "Greece" },
  { value: "gt", label: "Guatemala" },
  { value: "ht", label: "Haiti" },
  { value: "hn", label: "Honduras" },
  { value: "hk", label: "Hong Kong" },
  { value: "hu", label: "Hungary" },
  { value: "is", label: "Iceland" },
  { value: "in", label: "India" },
  { value: "id", label: "Indonesia" },
  { value: "ir", label: "Iran" },
  { value: "iq", label: "Iraq" },
  { value: "ie", label: "Ireland" },
  { value: "il", label: "Israel" },
  { value: "it", label: "Italy" },
  { value: "jm", label: "Jamaica" },
  { value: "jp", label: "Japan" },
  { value: "jo", label: "Jordan" },
  { value: "kz", label: "Kazakhstan" },
  { value: "ke", label: "Kenya" },
  { value: "kw", label: "Kuwait" },
  { value: "kg", label: "Kyrgyzstan" },
  { value: "la", label: "Laos" },
  { value: "lv", label: "Latvia" },
  { value: "lb", label: "Lebanon" },
  { value: "ly", label: "Libya" },
  { value: "lt", label: "Lithuania" },
  { value: "lu", label: "Luxembourg" },
  { value: "mo", label: "Macau" },
  { value: "mk", label: "Macedonia" },
  { value: "mg", label: "Madagascar" },
  { value: "my", label: "Malaysia" },
  { value: "mt", label: "Malta" },
  { value: "mx", label: "Mexico" },
  { value: "md", label: "Moldova" },
  { value: "mn", label: "Mongolia" },
  { value: "me", label: "Montenegro" },
  { value: "ma", label: "Morocco" },
  { value: "mm", label: "Myanmar" },
  { value: "np", label: "Nepal" },
  { value: "nl", label: "Netherlands" },
  { value: "nz", label: "New Zealand" },
  { value: "ni", label: "Nicaragua" },
  { value: "ng", label: "Nigeria" },
  { value: "kp", label: "North Korea" },
  { value: "no", label: "Norway" },
  { value: "om", label: "Oman" },
  { value: "pk", label: "Pakistan" },
  { value: "ps", label: "Palestine" },
  { value: "pa", label: "Panama" },
  { value: "py", label: "Paraguay" },
  { value: "pe", label: "Peru" },
  { value: "ph", label: "Philippines" },
  { value: "pl", label: "Poland" },
  { value: "pt", label: "Portugal" },
  { value: "pr", label: "Puerto Rico" },
  { value: "qa", label: "Qatar" },
  { value: "ro", label: "Romania" },
  { value: "ru", label: "Russia" },
  { value: "sa", label: "Saudi Arabia" },
  { value: "sn", label: "Senegal" },
  { value: "rs", label: "Serbia" },
  { value: "sg", label: "Singapore" },
  { value: "sk", label: "Slovakia" },
  { value: "si", label: "Slovenia" },
  { value: "so", label: "Somalia" },
  { value: "za", label: "South Africa" },
  { value: "kr", label: "South Korea" },
  { value: "es", label: "Spain" },
  { value: "lk", label: "Sri Lanka" },
  { value: "sd", label: "Sudan" },
  { value: "se", label: "Sweden" },
  { value: "ch", label: "Switzerland" },
  { value: "sy", label: "Syria" },
  { value: "tw", label: "Taiwan" },
  { value: "tj", label: "Tajikistan" },
  { value: "tz", label: "Tanzania" },
  { value: "th", label: "Thailand" },
  { value: "tt", label: "Trinidad and Tobago" },
  { value: "tn", label: "Tunisia" },
  { value: "tr", label: "Turkey" },
  { value: "tm", label: "Turkmenistan" },
  { value: "ug", label: "Uganda" },
  { value: "ua", label: "Ukraine" },
  { value: "ae", label: "United Arab Emirates" },
  { value: "gb", label: "United Kingdom" },
  { value: "us", label: "United States" },
  { value: "uy", label: "Uruguay" },
  { value: "uz", label: "Uzbekistan" },
  { value: "ve", label: "Venezuela" },
  { value: "vn", label: "Vietnam" },
  { value: "ye", label: "Yemen" },
  { value: "zm", label: "Zambia" },
  { value: "zw", label: "Zimbabwe" },
]

export default function VisaPage() {
  const [selectedStudyCountry, setSelectedStudyCountry] = useState("")
  const [selectedNationality, setSelectedNationality] = useState("")

  const renderVisaInfo = () => {
    if (!selectedStudyCountry || !selectedNationality) {
      return null
    }

    // In a real application, you would fetch this information from a database or API
    // This is just a placeholder
    return (
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Visa Information</CardTitle>
          <CardDescription>
            For {nationalityCountries.find((c) => c.value === selectedNationality)?.label} students studying in{" "}
            {studyCountries.find((c) => c.value === selectedStudyCountry)?.label}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold mb-2">Visa Requirements:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Valid passport</li>
            <li>Acceptance letter from a recognized institution</li>
            <li>Proof of sufficient funds</li>
            <li>English language proficiency test results</li>
            <li>Health insurance</li>
          </ul>
          <h3 className="text-lg font-semibold mt-4 mb-2">Application Process:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Complete the online visa application form</li>
            <li>Pay the visa application fee</li>
            <li>Schedule and attend a visa interview at the nearest embassy or consulate</li>
            <li>Submit biometrics (if required)</li>
            <li>Wait for visa processing (typically 2-3 weeks)</li>
          </ol>
        </CardContent>
        <CardFooter>
          <Button>Start Visa Application</Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Visa Application Guide</h1>
      <p className="text-xl text-muted-foreground mb-12">
        Select the country where you'll be studying and your nationality to get specific visa information.
      </p>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <CountrySelector
          countries={studyCountries}
          selectedCountry={selectedStudyCountry}
          onSelectCountry={setSelectedStudyCountry}
          placeholder="Select study country"
        />
        <CountrySelector
          countries={nationalityCountries}
          selectedCountry={selectedNationality}
          onSelectCountry={setSelectedNationality}
          placeholder="Select your nationality"
        />
      </div>
      {renderVisaInfo()}
    </div>
  )
}

