export interface Question {
  id: number
  question: string
  code: string | null
  answers: string[]
  correctAnswer: number
  userSelectedAnswer?: number
  isCorrectUserAnswer?: boolean
}
