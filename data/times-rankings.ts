// Times Higher Education rankings data
export type TimesMetrics = {
  teaching: { score: number; rank: number }
  research: { score: number; rank: number }
  citations: { score: number; rank: number }
  industryIncome: { score: number; rank: number }
  internationalOutlook: { score: number; rank: number }
}

export type TimesUniversity = {
  id: number
  name: string
  country: string
  region: string
  timesRank: number
  overallScore: number
  metrics: TimesMetrics
}

export const timesUniversities: TimesUniversity[] = [
  {
    id: 1,
    name: "University of Oxford",
    country: "United Kingdom",
    region: "Europe",
    timesRank: 1,
    overallScore: 96.4,
    metrics: {
      teaching: { score: 91.8, rank: 2 },
      research: { score: 99.7, rank: 1 },
      citations: { score: 99.0, rank: 4 },
      industryIncome: { score: 74.9, rank: 52 },
      internationalOutlook: { score: 96.7, rank: 29 }
    }
  },
  {
    id: 2,
    name: "Stanford University",
    country: "United States",
    region: "North America",
    timesRank: 2,
    overallScore: 95.2,
    metrics: {
      teaching: { score: 94.2, rank: 1 },
      research: { score: 96.6, rank: 2 },
      citations: { score: 99.8, rank: 2 },
      industryIncome: { score: 65.0, rank: 79 },
      internationalOutlook: { score: 79.8, rank: 152 }
    }
  },
  {
    id: 3,
    name: "Massachusetts Institute of Technology",
    country: "United States",
    region: "North America",
    timesRank: 3,
    overallScore: 94.8,
    metrics: {
      teaching: { score: 90.7, rank: 3 },
      research: { score: 93.6, rank: 3 },
      citations: { score: 99.8, rank: 3 },
      industryIncome: { score: 89.1, rank: 11 },
      internationalOutlook: { score: 89.4, rank: 81 }
    }
  },
  {
    id: 4,
    name: "Harvard University",
    country: "United States",
    region: "North America",
    timesRank: 4,
    overallScore: 94.0,
    metrics: {
      teaching: { score: 89.9, rank: 4 },
      research: { score: 92.8, rank: 4 },
      citations: { score: 99.2, rank: 12 },
      industryIncome: { score: 52.4, rank: 220 },
      internationalOutlook: { score: 81.4, rank: 139 }
    }
  },
  {
    id: 5,
    name: "University of Cambridge",
    country: "United Kingdom",
    region: "Europe",
    timesRank: 5,
    overallScore: 93.6,
    metrics: {
      teaching: { score: 89.3, rank: 5 },
      research: { score: 92.4, rank: 5 },
      citations: { score: 97.4, rank: 18 },
      industryIncome: { score: 64.8, rank: 80 },
      internationalOutlook: { score: 95.8, rank: 41 }
    }
  },
  {
    id: 6,
    name: "Princeton University",
    country: "United States",
    region: "North America",
    timesRank: 6,
    overallScore: 92.4,
    metrics: {
      teaching: { score: 87.6, rank: 7 },
      research: { score: 89.2, rank: 9 },
      citations: { score: 99.1, rank: 13 },
      industryIncome: { score: 62.3, rank: 94 },
      internationalOutlook: { score: 80.1, rank: 149 }
    }
  },
  {
    id: 7,
    name: "California Institute of Technology",
    country: "United States",
    region: "North America",
    timesRank: 7,
    overallScore: 91.4,
    metrics: {
      teaching: { score: 88.7, rank: 6 },
      research: { score: 91.2, rank: 6 },
      citations: { score: 97.8, rank: 16 },
      industryIncome: { score: 87.6, rank: 13 },
      internationalOutlook: { score: 79.3, rank: 155 }
    }
  },
  {
    id: 8,
    name: "Imperial College London",
    country: "United Kingdom",
    region: "Europe",
    timesRank: 8,
    overallScore: 90.4,
    metrics: {
      teaching: { score: 82.8, rank: 12 },
      research: { score: 87.5, rank: 11 },
      citations: { score: 97.9, rank: 15 },
      industryIncome: { score: 79.8, rank: 27 },
      internationalOutlook: { score: 97.5, rank: 17 }
    }
  },
  {
    id: 9,
    name: "University of California, Berkeley",
    country: "United States",
    region: "North America",
    timesRank: 9,
    overallScore: 90.1,
    metrics: {
      teaching: { score: 84.3, rank: 10 },
      research: { score: 90.4, rank: 7 },
      citations: { score: 98.7, rank: 7 },
      industryIncome: { score: 72.9, rank: 58 },
      internationalOutlook: { score: 76.1, rank: 183 }
    }
  },
  {
    id: 10,
    name: "Yale University",
    country: "United States",
    region: "North America",
    timesRank: 10,
    overallScore: 89.4,
    metrics: {
      teaching: { score: 86.3, rank: 8 },
      research: { score: 87.0, rank: 12 },
      citations: { score: 97.6, rank: 17 },
      industryIncome: { score: 55.8, rank: 184 },
      internationalOutlook: { score: 77.4, rank: 171 }
    }
  },
  {
    id: 11,
    name: "ETH Zurich",
    country: "Switzerland",
    region: "Europe",
    timesRank: 11,
    overallScore: 89.1,
    metrics: {
      teaching: { score: 82.9, rank: 11 },
      research: { score: 89.8, rank: 8 },
      citations: { score: 93.6, rank: 27 },
      industryIncome: { score: 76.5, rank: 41 },
      internationalOutlook: { score: 97.8, rank: 15 }
    }
  },
  {
    id: 12,
    name: "University of Chicago",
    country: "United States",
    region: "North America",
    timesRank: 12,
    overallScore: 88.9,
    metrics: {
      teaching: { score: 85.9, rank: 9 },
      research: { score: 85.9, rank: 13 },
      citations: { score: 95.3, rank: 22 },
      industryIncome: { score: 55.3, rank: 189 },
      internationalOutlook: { score: 80.5, rank: 147 }
    }
  },
  {
    id: 13,
    name: "Johns Hopkins University",
    country: "United States",
    region: "North America",
    timesRank: 13,
    overallScore: 88.4,
    metrics: {
      teaching: { score: 80.6, rank: 16 },
      research: { score: 84.9, rank: 15 },
      citations: { score: 98.5, rank: 8 },
      industryIncome: { score: 87.4, rank: 14 },
      internationalOutlook: { score: 78.4, rank: 162 }
    }
  },
  {
    id: 14,
    name: "University of Pennsylvania",
    country: "United States",
    region: "North America",
    timesRank: 14,
    overallScore: 88.1,
    metrics: {
      teaching: { score: 82.1, rank: 13 },
      research: { score: 84.7, rank: 16 },
      citations: { score: 97.3, rank: 19 },
      industryIncome: { score: 75.8, rank: 43 },
      internationalOutlook: { score: 76.1, rank: 183 }
    }
  },
  {
    id: 15,
    name: "Tsinghua University",
    country: "China",
    region: "Asia",
    timesRank: 15,
    overallScore: 87.7,
    metrics: {
      teaching: { score: 81.2, rank: 15 },
      research: { score: 88.6, rank: 10 },
      citations: { score: 92.8, rank: 32 },
      industryIncome: { score: 100.0, rank: 1 },
      internationalOutlook: { score: 64.8, rank: 253 }
    }
  },
  {
    id: 16,
    name: "Columbia University",
    country: "United States",
    region: "North America",
    timesRank: 16,
    overallScore: 86.9,
    metrics: {
      teaching: { score: 81.9, rank: 14 },
      research: { score: 85.4, rank: 14 },
      citations: { score: 94.2, rank: 24 },
      industryIncome: { score: 44.9, rank: 298 },
      internationalOutlook: { score: 83.6, rank: 120 }
    }
  },
  {
    id: 17,
    name: "University of California, Los Angeles",
    country: "United States",
    region: "North America",
    timesRank: 17,
    overallScore: 86.4,
    metrics: {
      teaching: { score: 79.5, rank: 18 },
      research: { score: 84.4, rank: 17 },
      citations: { score: 97.0, rank: 20 },
      industryIncome: { score: 73.4, rank: 56 },
      internationalOutlook: { score: 72.8, rank: 198 }
    }
  },
  {
    id: 18,
    name: "University of Toronto",
    country: "Canada",
    region: "North America",
    timesRank: 18,
    overallScore: 85.7,
    metrics: {
      teaching: { score: 78.8, rank: 19 },
      research: { score: 84.3, rank: 18 },
      citations: { score: 93.0, rank: 29 },
      industryIncome: { score: 62.5, rank: 93 },
      internationalOutlook: { score: 89.0, rank: 83 }
    }
  },
  {
    id: 19,
    name: "Cornell University",
    country: "United States",
    region: "North America",
    timesRank: 19,
    overallScore: 85.0,
    metrics: {
      teaching: { score: 79.7, rank: 17 },
      research: { score: 83.6, rank: 19 },
      citations: { score: 92.7, rank: 33 },
      industryIncome: { score: 52.1, rank: 223 },
      internationalOutlook: { score: 77.5, rank: 170 }
    }
  },
  {
    id: 20,
    name: "University of California, San Diego",
    country: "United States",
    region: "North America",
    timesRank: 20,
    overallScore: 84.7,
    metrics: {
      teaching: { score: 76.5, rank: 23 },
      research: { score: 82.2, rank: 22 },
      citations: { score: 98.4, rank: 10 },
      industryIncome: { score: 75.4, rank: 45 },
      internationalOutlook: { score: 65.7, rank: 242 }
    }
  },
  {
    id: 21,
    name: "Peking University",
    country: "China",
    region: "Asia",
    timesRank: 21,
    overallScore: 84.5,
    metrics: {
      teaching: { score: 77.9, rank: 20 },
      research: { score: 83.2, rank: 20 },
      citations: { score: 89.5, rank: 43 },
      industryIncome: { score: 83.7, rank: 19 },
      internationalOutlook: { score: 73.5, rank: 195 }
    }
  },
  {
    id: 22,
    name: "National University of Singapore",
    country: "Singapore",
    region: "Asia",
    timesRank: 22,
    overallScore: 84.3,
    metrics: {
      teaching: { score: 75.8, rank: 24 },
      research: { score: 82.7, rank: 21 },
      citations: { score: 92.2, rank: 35 },
      industryIncome: { score: 70.9, rank: 66 },
      internationalOutlook: { score: 92.2, rank: 64 }
    }
  },
  {
    id: 23,
    name: "University College London",
    country: "United Kingdom",
    region: "Europe",
    timesRank: 23,
    overallScore: 84.0,
    metrics: {
      teaching: { score: 76.7, rank: 22 },
      research: { score: 81.8, rank: 23 },
      citations: { score: 92.9, rank: 30 },
      industryIncome: { score: 47.9, rank: 269 },
      internationalOutlook: { score: 96.5, rank: 31 }
    }
  },
  {
    id: 24,
    name: "University of Michigan-Ann Arbor",
    country: "United States",
    region: "North America",
    timesRank: 24,
    overallScore: 83.9,
    metrics: {
      teaching: { score: 77.1, rank: 21 },
      research: { score: 81.6, rank: 24 },
      citations: { score: 94.1, rank: 25 },
      industryIncome: { score: 75.8, rank: 43 },
      internationalOutlook: { score: 67.9, rank: 227 }
    }
  },
  {
    id: 25,
    name: "Carnegie Mellon University",
    country: "United States",
    region: "North America",
    timesRank: 25,
    overallScore: 83.5,
    metrics: {
      teaching: { score: 74.8, rank: 27 },
      research: { score: 78.5, rank: 30 },
      citations: { score: 93.9, rank: 26 },
      industryIncome: { score: 79.2, rank: 30 },
      internationalOutlook: { score: 86.9, rank: 97 }
    }
  },
  {
    id: 26,
    name: "University of Washington",
    country: "United States",
    region: "North America",
    timesRank: 26,
    overallScore: 83.0,
    metrics: {
      teaching: { score: 73.2, rank: 34 },
      research: { score: 80.6, rank: 25 },
      citations: { score: 98.4, rank: 9 },
      industryIncome: { score: 53.7, rank: 208 },
      internationalOutlook: { score: 65.3, rank: 245 }
    }
  },
  {
    id: 27,
    name: "New York University",
    country: "United States",
    region: "North America",
    timesRank: 27,
    overallScore: 82.8,
    metrics: {
      teaching: { score: 76.3, rank: 25 },
      research: { score: 77.6, rank: 33 },
      citations: { score: 94.8, rank: 23 },
      industryIncome: { score: 47.9, rank: 269 },
      internationalOutlook: { score: 77.5, rank: 170 }
    }
  },
  {
    id: 28,
    name: "Northwestern University",
    country: "United States",
    region: "North America",
    timesRank: 28,
    overallScore: 82.3,
    metrics: {
      teaching: { score: 74.6, rank: 28 },
      research: { score: 74.5, rank: 43 },
      citations: { score: 98.8, rank: 6 },
      industryIncome: { score: 56.9, rank: 173 },
      internationalOutlook: { score: 70.2, rank: 210 }
    }
  },
  {
    id: 29,
    name: "London School of Economics and Political Science",
    country: "United Kingdom",
    region: "Europe",
    timesRank: 29,
    overallScore: 82.1,
    metrics: {
      teaching: { score: 72.4, rank: 36 },
      research: { score: 80.3, rank: 26 },
      citations: { score: 90.1, rank: 42 },
      industryIncome: { score: 36.4, rank: 419 },
      internationalOutlook: { score: 94.8, rank: 48 }
    }
  },
  {
    id: 30,
    name: "University of Edinburgh",
    country: "United Kingdom",
    region: "Europe",
    timesRank: 30,
    overallScore: 81.7,
    metrics: {
      teaching: { score: 71.9, rank: 38 },
      research: { score: 79.5, rank: 27 },
      citations: { score: 92.2, rank: 35 },
      industryIncome: { score: 43.5, rank: 316 },
      internationalOutlook: { score: 95.5, rank: 43 }
    }
  },
  {
    id: 31,
    name: "King's College London",
    country: "United Kingdom",
    region: "Europe",
    timesRank: 31,
    overallScore: 81.5,
    metrics: {
      teaching: { score: 67.7, rank: 51 },
      research: { score: 75.7, rank: 40 },
      citations: { score: 98.2, rank: 11 },
      industryIncome: { score: 41.2, rank: 348 },
      internationalOutlook: { score: 93.2, rank: 58 }
    }
  },
  {
    id: 32,
    name: "Technical University of Munich",
    country: "Germany",
    region: "Europe",
    timesRank: 32,
    overallScore: 81.3,
    metrics: {
      teaching: { score: 74.5, rank: 29 },
      research: { score: 76.5, rank: 38 },
      citations: { score: 88.1, rank: 50 },
      industryIncome: { score: 79.5, rank: 29 },
      internationalOutlook: { score: 83.1, rank: 125 }
    }
  },
  {
    id: 33,
    name: "Duke University",
    country: "United States",
    region: "North America",
    timesRank: 33,
    overallScore: 81.1,
    metrics: {
      teaching: { score: 75.9, rank: 24 },
      research: { score: 77.9, rank: 32 },
      citations: { score: 91.0, rank: 40 },
      industryIncome: { score: 99.7, rank: 2 },
      internationalOutlook: { score: 59.1, rank: 291 }
    }
  },
  {
    id: 34,
    name: "University of Melbourne",
    country: "Australia",
    region: "Oceania",
    timesRank: 34,
    overallScore: 81.0,
    metrics: {
      teaching: { score: 73.0, rank: 35 },
      research: { score: 78.8, rank: 29 },
      citations: { score: 88.4, rank: 48 },
      industryIncome: { score: 63.9, rank: 87 },
      internationalOutlook: { score: 93.7, rank: 55 }
    }
  },
  {
    id: 35,
    name: "LMU Munich",
    country: "Germany",
    region: "Europe",
    timesRank: 35,
    overallScore: 80.7,
    metrics: {
      teaching: { score: 71.0, rank: 41 },
      research: { score: 78.3, rank: 31 },
      citations: { score: 92.3, rank: 34 },
      industryIncome: { score: 55.6, rank: 186 },
      internationalOutlook: { score: 75.2, rank: 186 }
    }
  },
  {
    id: 36,
    name: "EPFL",
    country: "Switzerland",
    region: "Europe",
    timesRank: 36,
    overallScore: 80.5,
    metrics: {
      teaching: { score: 73.6, rank: 32 },
      research: { score: 79.0, rank: 28 },
      citations: { score: 87.5, rank: 52 },
      industryIncome: { score: 77.5, rank: 36 },
      internationalOutlook: { score: 98.5, rank: 7 }
    }
  },
  {
    id: 37,
    name: "University of British Columbia",
    country: "Canada",
    region: "North America",
    timesRank: 37,
    overallScore: 80.1,
    metrics: {
      teaching: { score: 70.9, rank: 42 },
      research: { score: 77.1, rank: 35 },
      citations: { score: 89.3, rank: 44 },
      industryIncome: { score: 66.2, rank: 76 },
      internationalOutlook: { score: 92.2, rank: 64 }
    }
  },
  {
    id: 38,
    name: "KU Leuven",
    country: "Belgium",
    region: "Europe",
    timesRank: 38,
    overallScore: 80.0,
    metrics: {
      teaching: { score: 74.0, rank: 30 },
      research: { score: 78.2, rank: 32 },
      citations: { score: 86.2, rank: 58 },
      industryIncome: { score: 97.9, rank: 5 },
      internationalOutlook: { score: 68.4, rank: 224 }
    }
  },
  {
    id: 39,
    name: "University of Texas at Austin",
    country: "United States",
    region: "North America",
    timesRank: 39,
    overallScore: 79.8,
    metrics: {
      teaching: { score: 73.4, rank: 33 },
      research: { score: 76.9, rank: 36 },
      citations: { score: 90.0, rank: 41 },
      industryIncome: { score: 78.5, rank: 32 },
      internationalOutlook: { score: 58.9, rank: 292 }
    }
  },
  {
    id: 40,
    name: "Hong Kong University of Science and Technology",
    country: "Hong Kong",
    region: "Asia",
    timesRank: 40,
    overallScore: 79.6,
    metrics: {
      teaching: { score: 64.7, rank: 66 },
      research: { score: 72.0, rank: 51 },
      citations: { score: 96.5, rank: 21 },
      industryIncome: { score: 59.8, rank: 141 },
      internationalOutlook: { score: 93.1, rank: 59 }
    }
  },
  {
    id: 41,
    name: "Paris Sciences et Lettres – PSL Research University",
    country: "France",
    region: "Europe",
    timesRank: 41,
    overallScore: 79.4,
    metrics: {
      teaching: { score: 74.1, rank: 30 },
      research: { score: 70.8, rank: 56 },
      citations: { score: 89.2, rank: 45 },
      industryIncome: { score: 54.5, rank: 198 },
      internationalOutlook: { score: 82.9, rank: 126 }
    }
  },
  {
    id: 42,
    name: "University of Illinois at Urbana-Champaign",
    country: "United States",
    region: "North America",
    timesRank: 42,
    overallScore: 79.2,
    metrics: {
      teaching: { score: 73.7, rank: 31 },
      research: { score: 76.6, rank: 37 },
      citations: { score: 85.5, rank: 62 },
      industryIncome: { score: 79.1, rank: 31 },
      internationalOutlook: { score: 77.1, rank: 174 }
    }
  },
  {
    id: 43,
    name: "Nanyang Technological University, Singapore",
    country: "Singapore",
    region: "Asia",
    timesRank: 43,
    overallScore: 79.0,
    metrics: {
      teaching: { score: 67.0, rank: 55 },
      research: { score: 75.8, rank: 39 },
      citations: { score: 88.2, rank: 49 },
      industryIncome: { score: 74.6, rank: 53 },
      internationalOutlook: { score: 94.7, rank: 49 }
    }
  },
  {
    id: 44,
    name: "Wageningen University & Research",
    country: "Netherlands",
    region: "Europe",
    timesRank: 44,
    overallScore: 78.8,
    metrics: {
      teaching: { score: 62.2, rank: 75 },
      research: { score: 77.2, rank: 34 },
      citations: { score: 93.2, rank: 28 },
      industryIncome: { score: 76.1, rank: 42 },
      internationalOutlook: { score: 83.3, rank: 122 }
    }
  },
  {
    id: 45,
    name: "McGill University",
    country: "Canada",
    region: "North America",
    timesRank: 45,
    overallScore: 78.5,
    metrics: {
      teaching: { score: 68.9, rank: 46 },
      research: { score: 73.6, rank: 45 },
      citations: { score: 88.8, rank: 47 },
      industryIncome: { score: 51.9, rank: 226 },
      internationalOutlook: { score: 94.2, rank: 52 }
    }
  },
  {
    id: 46,
    name: "Georgia Institute of Technology",
    country: "United States",
    region: "North America",
    timesRank: 46,
    overallScore: 78.3,
    metrics: {
      teaching: { score: 65.2, rank: 64 },
      research: { score: 71.3, rank: 54 },
      citations: { score: 93.9, rank: 26 },
      industryIncome: { score: 89.5, rank: 9 },
      internationalOutlook: { score: 71.2, rank: 207 }
    }
  },
  {
    id: 47,
    name: "Seoul National University",
    country: "South Korea",
    region: "Asia",
    timesRank: 47,
    overallScore: 78.1,
    metrics: {
      teaching: { score: 71.7, rank: 39 },
      research: { score: 76.1, rank: 37 },
      citations: { score: 83.4, rank: 78 },
      industryIncome: { score: 87.7, rank: 12 },
      internationalOutlook: { score: 63.9, rank: 259 }
    }
  },
  {
    id: 48,
    name: "University of Wisconsin-Madison",
    country: "United States",
    region: "North America",
    timesRank: 48,
    overallScore: 77.9,
    metrics: {
      teaching: { score: 71.5, rank: 40 },
      research: { score: 74.9, rank: 42 },
      citations: { score: 87.9, rank: 51 },
      industryIncome: { score: 59.1, rank: 147 },
      internationalOutlook: { score: 61.5, rank: 275 }
    }
  },
  {
    id: 49,
    name: "University of Tokyo",
    country: "Japan",
    region: "Asia",
    timesRank: 49,
    overallScore: 77.8,
    metrics: {
      teaching: { score: 84.0, rank: 11 },
      research: { score: 81.6, rank: 24 },
      citations: { score: 70.9, rank: 156 },
      industryIncome: { score: 86.8, rank: 15 },
      internationalOutlook: { score: 60.3, rank: 281 }
    }
  },
  {
    id: 50,
    name: "University of Manchester",
    country: "United Kingdom",
    region: "Europe",
    timesRank: 50,
    overallScore: 77.6,
    metrics: {
      teaching: { score: 64.5, rank: 67 },
      research: { score: 72.8, rank: 49 },
      citations: { score: 93.7, rank: 27 },
      industryIncome: { score: 50.3, rank: 240 },
      internationalOutlook: { score: 92.3, rank: 63 }
    }
  }
]

export const timesMetrics = [
  { id: "teaching", name: "Teaching", icon: "BookOpen" },
  { id: "research", name: "Research", icon: "FileText" },
  { id: "citations", name: "Citations", icon: "FileText" },
  { id: "industryIncome", name: "Industry Income", icon: "TrendingUp" },
  { id: "internationalOutlook", name: "International Outlook", icon: "Globe" },
]
