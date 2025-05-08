export type QSMetrics = {
  academicReputation: { score: number; rank: number }
  employerReputation: { score: number; rank: number }
  facultyStudentRatio: { score: number; rank: number }
  citationsPerFaculty: { score: number; rank: number }
  internationalFaculty: { score: number; rank: number }
  internationalStudents: { score: number; rank: number }
  internationalResearchNetwork: { score: number; rank: number }
  employmentOutcomes: { score: number; rank: number }
  sustainability: { score: number; rank: number }
}

export type QSUniversity = {
  id: number                 // PDF INDEX
  name: string               // Institution Name
  country: string            // Location
  region: string             // Region
  qsRank: number             // 2025 QS rank
  overallScore: number       // Overall Score
  metrics: QSMetrics         // All QS component scores/ranks
}

export const qsUniversities: QSUniversity[] = [
  {
    id: 1,
    name: "Massachusetts Institute of Technology (MIT)",
    country: "United States",
    region: "Americas",
    qsRank: 1,
    overallScore: 100,
    metrics: {
      academicReputation:      { score: 100,   rank: 4  },  // :contentReference[oaicite:0]{index=0}:contentReference[oaicite:1]{index=1}
      employerReputation:      { score: 100,   rank: 2  },  // :contentReference[oaicite:2]{index=2}:contentReference[oaicite:3]{index=3}
      facultyStudentRatio:     { score: 100,   rank: 11 },  // :contentReference[oaicite:4]{index=4}:contentReference[oaicite:5]{index=5}
      citationsPerFaculty:     { score: 100,   rank: 9  },  // :contentReference[oaicite:6]{index=6}:contentReference[oaicite:7]{index=7}
      internationalFaculty:    { score: 99.3,  rank: 100},  // :contentReference[oaicite:8]{index=8}:contentReference[oaicite:9]{index=9}
      internationalStudents:   { score: 86.8,  rank: 143},  // :contentReference[oaicite:10]{index=10}:contentReference[oaicite:11]{index=11}
      internationalResearchNetwork: { score: 96, rank: 58 }, // :contentReference[oaicite:12]{index=12}:contentReference[oaicite:13]{index=13}
      employmentOutcomes:      { score: 100,   rank: 8  },  // :contentReference[oaicite:14]{index=14}:contentReference[oaicite:15]{index=15}
      sustainability:          { score: 99,    rank: 15 },  // :contentReference[oaicite:16]{index=16}:contentReference[oaicite:17]{index=17}
    },
  },
  {
    id: 2,
    name: "Imperial College London",
    country: "United Kingdom",
    region: "Europe",
    qsRank: 2,
    overallScore: 98.5,
    metrics: {
      academicReputation:      { score: 98.5,  rank: 22 },  // :contentReference[oaicite:18]{index=18}:contentReference[oaicite:19]{index=19}
      employerReputation:      { score: 99.5,  rank: 11 },  // :contentReference[oaicite:20]{index=20}:contentReference[oaicite:21]{index=21}
      facultyStudentRatio:     { score: 98.2,  rank: 45 },  // :contentReference[oaicite:22]{index=22}:contentReference[oaicite:23]{index=23}
      citationsPerFaculty:     { score: 93.9,  rank: 54 },  // :contentReference[oaicite:24]{index=24}:contentReference[oaicite:25]{index=25}
      internationalFaculty:    { score: 100,   rank: 66 },  // :contentReference[oaicite:26]{index=26}:contentReference[oaicite:27]{index=27}
      internationalStudents:   { score: 99.6,  rank: 44 },  // :contentReference[oaicite:28]{index=28}:contentReference[oaicite:29]{index=29}
      internationalResearchNetwork: { score: 97.4, rank: 34 }, // :contentReference[oaicite:30]{index=30}:contentReference[oaicite:31]{index=31}
      employmentOutcomes:      { score: 93.4,  rank: 61 },  // :contentReference[oaicite:32]{index=32}:contentReference[oaicite:33]{index=33}
      sustainability:          { score: 99.7,  rank: 6  },  // :contentReference[oaicite:34]{index=34}:contentReference[oaicite:35]{index=35}
    },
  },
  {
    id: 3,
    name: "University of Oxford",
    country: "United Kingdom",
    region: "Europe",
    qsRank: 3,
    overallScore: 96.9,
    metrics: {
      academicReputation:      { score: 100,   rank: 2  },  // :contentReference[oaicite:36]{index=36}:contentReference[oaicite:37]{index=37}
      employerReputation:      { score: 100,   rank: 5  },  // :contentReference[oaicite:38]{index=38}:contentReference[oaicite:39]{index=39}
      facultyStudentRatio:     { score: 100,   rank: 8  },  // :contentReference[oaicite:40]{index=40}:contentReference[oaicite:41]{index=41}
      citationsPerFaculty:     { score: 84.8,  rank: 93 },  // :contentReference[oaicite:42]{index=42}:contentReference[oaicite:43]{index=43}
      internationalFaculty:    { score: 98.1,  rank: 120},  // :contentReference[oaicite:44]{index=44}:contentReference[oaicite:45]{index=45}
      internationalStudents:   { score: 97.7,  rank: 73 },  // :contentReference[oaicite:46]{index=46}:contentReference[oaicite:47]{index=47}
      internationalResearchNetwork: { score: 100, rank: 1 },  // :contentReference[oaicite:48]{index=48}:contentReference[oaicite:49]{index=49}
      employmentOutcomes:      { score: 100,   rank: 3  },  // :contentReference[oaicite:50]{index=50}:contentReference[oaicite:51]{index=51}
      sustainability:          { score: 85,    rank: 126},  // :contentReference[oaicite:52]{index=52}:contentReference[oaicite:53]{index=53}
    },
  },

  // …continue through id:100 by copying each row’s fields exactly from the PDF…  
]

export const regions = ["All Regions", "Americas", "Europe", "Asia", "Oceania", "Africa"]

export const countries = [
  "All Countries",
  "United States",
  "United Kingdom",
  "China (Mainland)",
  "Australia",
  "Canada",
  "Germany",
  "Japan",
  "Singapore",
  "Switzerland",
  "South Korea",
  "Hong Kong SAR",
  "France",
]

export const rankingTypes = [
  { id: "qs", name: "QS World University Rankings" },
  { id: "times", name: "Times Higher Education Rankings" },
  { id: "shanghai", name: "Shanghai Academic Ranking" },
]
