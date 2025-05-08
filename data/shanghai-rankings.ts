// This is a placeholder for Shanghai Academic rankings
// You can fill this with actual data later

export type ShanghaiMetrics = {
  alumni: { score: number; rank: number }
  award: { score: number; rank: number }
  hiCi: { score: number; rank: number }
  nAndS: { score: number; rank: number }
  pub: { score: number; rank: number }
  pcp: { score: number; rank: number }
}

export type ShanghaiUniversity = {
  id: number
  name: string
  country: string
  region: string
  shanghaiRank: number
  totalScore: number
  metrics: ShanghaiMetrics
}

export const shanghaiUniversities: ShanghaiUniversity[] = []

export const shanghaiMetrics = [
  { id: "alumni", name: "Alumni", icon: "Users" },
  { id: "award", name: "Award", icon: "Award" },
  { id: "hiCi", name: "HiCi", icon: "Star" },
  { id: "nAndS", name: "N&S", icon: "FileText" },
  { id: "pub", name: "PUB", icon: "BookOpen" },
  { id: "pcp", name: "PCP", icon: "TrendingUp" },
]
