// This is a placeholder for Times Higher Education rankings
// You can fill this with actual data later

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

export const timesUniversities: TimesUniversity[] = []

export const timesMetrics = [
  { id: "teaching", name: "Teaching", icon: "BookOpen" },
  { id: "research", name: "Research", icon: "FileText" },
  { id: "citations", name: "Citations", icon: "FileText" },
  { id: "industryIncome", name: "Industry Income", icon: "TrendingUp" },
  { id: "internationalOutlook", name: "International Outlook", icon: "Globe" },
]
