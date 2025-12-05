import { Button } from '@mui/material'
import { useQuestionsData } from './hooks/useQuestionData'
import { useQuestionsStore } from './store/questions'

export const Footer = () => {
  const { correct, incorrect, unanswered } = useQuestionsData()
  const reset = useQuestionsStore((state) => state.reset)
  return (
    <footer style={{ marginTop: '16px' }}>
      <strong>{`✅ ${correct} - ❌ ${incorrect} - ❓ ${unanswered}`}</strong>
      <div style={{ marginTop: '16px' }}></div>
      <Button onClick={() => reset()}>Reset</Button>
      <p>© 2025 NicoDevvv. All rights reserved.</p>
    </footer>
  )
}
