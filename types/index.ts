export interface Repository {
  id: number
  name: string
  full_name: string
  description: string | null
  private: boolean
  html_url: string
  created_at: string
  updated_at: string
  pushed_at: string
  clone_url: string
  size: number
  stargazers_count: number
  watchers_count: number
  language: string | null
  forks_count: number
  open_issues_count: number
  default_branch: string
  owner: {
    login: string
    id: number
    avatar_url: string
    html_url: string
  }
}

export interface ReviewResult {
  repository: Repository
  codeQuality: {
    score: number
    issues: ReviewIssue[]
  }
  security: {
    vulnerabilities: SecurityVulnerability[]
    score: number
  }
  documentation: {
    score: number
    coverage: number
    suggestions: string[]
  }
  testing: {
    coverage: number
    frameworks: string[]
    suggestions: string[]
  }
  overall: {
    score: number
    grade: 'A' | 'B' | 'C' | 'D' | 'F'
  }
}

export interface ReviewIssue {
  id: string
  type: 'error' | 'warning' | 'info'
  severity: 'critical' | 'high' | 'medium' | 'low'
  title: string
  description: string
  file?: string
  line?: number
  suggestions: string[]
}

export interface SecurityVulnerability {
  id: string
  severity: 'critical' | 'high' | 'medium' | 'low'
  title: string
  description: string
  package?: string
  version?: string
  fixedIn?: string
}

export interface GitHubUser {
  id: number
  login: string
  name: string
  email: string
  avatar_url: string
  html_url: string
}

export interface ReviewSession {
  id: string
  repositoryId: number
  userId: string
  status: 'pending' | 'in_progress' | 'completed' | 'failed'
  createdAt: Date
  completedAt?: Date
  result?: ReviewResult
}