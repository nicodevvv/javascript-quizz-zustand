import { create } from 'zustand'
import { type Question } from '../types'
import confetti from 'canvas-confetti'
import { persist } from 'zustand/middleware'
import { getAllQuestions } from '../services/questions'

interface State {
  questions: Question[]
  currentQuestion: number
  fetchQuestions: (limit: number) => Promise<void>
  selectAnswer: (questionId: number, answerIndex: number) => void
  goNextQuestion: () => void
  goPreviousQuestion: () => void
  reset: () => void
}

export const useQuestionsStore = create<State>()(
  persist(
    (set, get) => ({
      questions: [],
      currentQuestion: 0,
      fetchQuestions: async (limit: number) => {
        const json = await getAllQuestions()
        console.log(json)

        // sort to get random questions and limit to the number requested
        const questions = json.sort(() => 0.5 - Math.random()).slice(0, limit)

        set({ questions })
      },
      selectAnswer: (questionId: number, answerIndex: number) => {
        const newQuestions = structuredClone(get().questions)
        const questionIndex = newQuestions.findIndex((q) => q.id === questionId)
        if (questionIndex === -1) return

        const question = newQuestions[questionIndex]
        question.userSelectedAnswer = answerIndex
        question.isCorrectUserAnswer = question.correctAnswer === answerIndex
        if (question.isCorrectUserAnswer) {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          })
        }

        newQuestions[questionIndex] = question

        set({ questions: newQuestions })
      },
      goNextQuestion: () => {
        const { currentQuestion, questions } = get()
        const nextQuestion = currentQuestion + 1

        if (nextQuestion >= questions.length) return
        set({ currentQuestion: nextQuestion })
      },
      goPreviousQuestion: () => {
        const { currentQuestion } = get()
        const previousQuestion = currentQuestion - 1

        if (previousQuestion < 0) return
        set({ currentQuestion: previousQuestion })
      },
      reset: () => {
        set({ questions: [], currentQuestion: 0 })
      }
    }),
    { name: 'questions' }
  )
)
