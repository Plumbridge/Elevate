export type Testimonial = {
  id: number
  name: string
  program: string
  university: string
  country: string
  avatar: string
  content: string
  rating: number
  featured?: boolean
  category: "applications" | "visa" | "accommodation" | "financial" | "cultural" | "career" | "general"
  year: number
  videoUrl?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Emma Johnson",
    program: "MSc in Computer Science",
    university: "ETH Zurich",
    country: "Switzerland",
    avatar: "/placeholder.svg?height=48&width=48",
    content:
      "Elevate guided me through every step of my application to ETH Zurich. Their personalized approach and attention to detail made a complex process feel manageable. The university application specialists helped me highlight my research experience effectively, which I believe was crucial to my acceptance.",
    rating: 5,
    featured: true,
    category: "applications",
    year: 2023,
  },
  {
    id: 2,
    name: "Miguel Sanchez",
    program: "MBA",
    university: "London Business School",
    country: "United Kingdom",
    avatar: "/placeholder.svg?height=48&width=48",
    content:
      "From GMAT preparation to interview coaching, Elevate's consultants were exceptional. Their financial planning service helped me secure a scholarship that made my MBA possible. I particularly appreciated their guidance on crafting a compelling personal statement that aligned with LBS's values.",
    rating: 5,
    featured: true,
    category: "financial",
    year: 2023,
  },
  {
    id: 3,
    name: "Aisha Patel",
    program: "BA in International Relations",
    university: "Sciences Po",
    country: "France",
    avatar: "/placeholder.svg?height=48&width=48",
    content:
      "The cultural preparation program was invaluable. Arriving in Paris, I felt confident and ready to embrace my new environment thanks to Elevate's comprehensive support. The language preparation and cultural orientation workshops helped me integrate quickly and make friends within my first month.",
    rating: 4,
    category: "cultural",
    year: 2022,
  },
  {
    id: 4,
    name: "Liu Wei",
    program: "PhD in Biotechnology",
    university: "UC Berkeley",
    country: "United States",
    avatar: "/placeholder.svg?height=48&width=48",
    content:
      "Navigating the US visa process seemed daunting until Elevate stepped in. Their visa specialists anticipated every requirement and prepared me thoroughly for my embassy interview. The mock interview sessions were particularly helpful in building my confidence.",
    rating: 5,
    category: "visa",
    year: 2023,
  },
  {
    id: 5,
    name: "Sarah Williams",
    program: "BEng in Aerospace Engineering",
    university: "University of Toronto",
    country: "Canada",
    avatar: "/placeholder.svg?height=48&width=48",
    content:
      "Elevate's accommodation service found me the perfect student housing near campus. Their virtual tour feature let me see my apartment before arriving in Canada. The neighborhood guide they provided helped me find all the essential services within my first week.",
    rating: 4,
    category: "accommodation",
    year: 2022,
  },
  {
    id: 6,
    name: "Raj Mehta",
    program: "MSc in Finance",
    university: "HEC Paris",
    country: "France",
    avatar: "/placeholder.svg?height=48&width=48",
    content:
      "The career support team at Elevate helped me land an internship during my studies. Their resume building workshop and interview preparation were game-changers. I'm now working full-time at a major investment bank thanks to the connections I made through their network.",
    rating: 5,
    featured: true,
    category: "career",
    year: 2022,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 7,
    name: "Sophia Chen",
    program: "MA in Digital Media",
    university: "King's College London",
    country: "United Kingdom",
    avatar: "/placeholder.svg?height=48&width=48",
    content:
      "Elevate's scholarship guidance was instrumental in securing funding for my studies. Their financial advisors helped me navigate complex application processes and prepare compelling statements of need. I received a full scholarship that covered both tuition and living expenses.",
    rating: 5,
    category: "financial",
    year: 2023,
  },
  {
    id: 8,
    name: "David Kim",
    program: "BSc in Computer Science",
    university: "University of Melbourne",
    country: "Australia",
    avatar: "/placeholder.svg?height=48&width=48",
    content:
      "The pre-departure orientation provided by Elevate made my transition to Australia seamless. From setting up a bank account to understanding the healthcare system, they covered everything I needed to know. Their 24/7 support during my first month was incredibly reassuring.",
    rating: 4,
    category: "cultural",
    year: 2022,
  },
  {
    id: 9,
    name: "Elena Petrova",
    program: "PhD in Neuroscience",
    university: "McGill University",
    country: "Canada",
    avatar: "/placeholder.svg?height=48&width=48",
    content:
      "Elevate's application specialists helped me craft a research proposal that perfectly aligned with my target professors' interests. Their guidance on academic CV preparation and interview coaching was invaluable. I received offers from all three universities I applied to.",
    rating: 5,
    category: "applications",
    year: 2023,
  },
  {
    id: 10,
    name: "James Wilson",
    program: "LLM in International Law",
    university: "National University of Singapore",
    country: "Singapore",
    avatar: "/placeholder.svg?height=48&width=48",
    content:
      "Finding accommodation in Singapore seemed impossible until I worked with Elevate. Their local housing experts negotiated an excellent rate for my apartment and helped me understand the lease terms. The location they found was perfect - just 15 minutes from campus.",
    rating: 5,
    category: "accommodation",
    year: 2023,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 11,
    name: "Fatima Al-Zahra",
    program: "MSc in Renewable Energy",
    university: "Technical University of Munich",
    country: "Germany",
    avatar: "/placeholder.svg?height=48&width=48",
    content:
      "The visa support team at Elevate made the German student visa process straightforward. They helped me prepare all necessary documentation and practiced interview questions specific to the German consulate. Their attention to detail ensured my application was approved on the first attempt.",
    rating: 5,
    category: "visa",
    year: 2022,
  },
  {
    id: 12,
    name: "Carlos Mendoza",
    program: "MSc in Data Science",
    university: "ETH Zurich",
    country: "Switzerland",
    avatar: "/placeholder.svg?height=48&width=48",
    content:
      "Elevate's career counselors connected me with alumni working in my field, which led to valuable mentorship opportunities. Their industry-specific interview preparation helped me secure a competitive internship that later converted to a full-time position.",
    rating: 4,
    category: "career",
    year: 2023,
  },
  {
    id: 13,
    name: "Priya Sharma",
    program: "MBA",
    university: "INSEAD",
    country: "France",
    avatar: "/placeholder.svg?height=48&width=48",
    content:
      "Working with Elevate transformed my application journey. Their consultants helped me articulate my career goals and personal story in a compelling way. The mock interviews were challenging but prepared me perfectly for the actual admissions interviews.",
    rating: 5,
    category: "applications",
    year: 2022,
  },
  {
    id: 14,
    name: "Thomas Müller",
    program: "MSc in Mechanical Engineering",
    university: "KTH Royal Institute of Technology",
    country: "Sweden",
    avatar: "/placeholder.svg?height=48&width=48",
    content:
      "Elevate's financial planning services helped me create a realistic budget for my studies in Stockholm. Their scholarship database and application support were instrumental in securing partial funding. Their guidance on part-time work regulations also helped me supplement my income while studying.",
    rating: 4,
    category: "financial",
    year: 2022,
  },
  {
    id: 15,
    name: "Yuki Tanaka",
    program: "BA in International Business",
    university: "University of British Columbia",
    country: "Canada",
    avatar: "/placeholder.svg?height=48&width=48",
    content:
      "The cultural adaptation workshops prepared me well for life in Vancouver. Elevate's language exchange program helped me improve my English skills before arrival, and their local buddy system connected me with current students who showed me around campus and the city.",
    rating: 5,
    category: "cultural",
    year: 2023,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
]

export const categories = [
  { id: "all", name: "All Testimonials" },
  { id: "applications", name: "University Applications" },
  { id: "visa", name: "Visa Support" },
  { id: "accommodation", name: "Accommodation" },
  { id: "financial", name: "Financial Planning" },
  { id: "cultural", name: "Cultural Preparation" },
  { id: "career", name: "Career Support" },
]

export const countries = [
  "All Countries",
  "Australia",
  "Canada",
  "France",
  "Germany",
  "Singapore",
  "Sweden",
  "Switzerland",
  "United Kingdom",
  "United States",
]
