export interface Problem {
  title: string
  id: string
  problemContent: string
  user: string
  date: number
  upvoteCount: number
  answerContent: string
  comentCount: number
}

export interface Comment {
  id: string
  user: string
  date: number
  content: string
  upvoteCount: number
}
