import {
  Card,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography
} from '@mui/material'
import { useQuestionsStore } from './store/questions'
import { type Question } from './types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import { Footer } from './Footer'

const getBackgroundColor = (info: Question, index: number) => {
  const { userSelectedAnswer, correctAnswer } = info
  // if user has not selected an answer yet
  if (userSelectedAnswer == null) return 'transparent'

  // if this is not the selected answer
  if (index !== correctAnswer && index !== userSelectedAnswer)
    return 'transparent'

  // if this is the correct answer
  if (index === correctAnswer) return 'green'
  // if this is not the selected answer and its the selected answer
  if (index === userSelectedAnswer) return 'red'
  // if none of the above

  return 'transparent'
}

const Question = ({ info }: { info: Question }) => {
  const selectAnswer = useQuestionsStore((state) => state.selectAnswer)

  const handleClick = (answerIndex: number) => {
    selectAnswer(info.id, answerIndex)
  }

  return (
    <Card
      variant="outlined"
      sx={{ textAlign: 'left', bgcolor: '#222', p: 2, marginTop: 4 }}
    >
      <Typography variant="h5">{info.question}</Typography>

      <SyntaxHighlighter
        language="javascript"
        style={gradientDark}
        wrapLines={true}
        showLineNumbers={true}
      >
        {info.code ?? ''}
      </SyntaxHighlighter>

      <List sx={{ bgcolor: '#333' }} disablePadding>
        {info.answers.map((answer, index) => (
          <ListItemButton
            disabled={info.userSelectedAnswer != null}
            key={index}
            divider
            onClick={() => handleClick(index)}
            sx={{ bgcolor: getBackgroundColor(info, index) }}
          >
            <ListItemText sx={{ textAlign: 'center' }}>{answer}</ListItemText>
          </ListItemButton>
        ))}
      </List>
    </Card>
  )
}

export function Game() {
  const questions = useQuestionsStore((state) => state.questions)
  const currentQuestionIndex = useQuestionsStore(
    (state) => state.currentQuestion
  )
  const goNextQuestion = useQuestionsStore((state) => state.goNextQuestion)
  const goPreviousQuestion = useQuestionsStore(
    (state) => state.goPreviousQuestion
  )

  return (
    <>
      <Stack
        direction={'row'}
        gap={2}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <IconButton
          onClick={goPreviousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          <ArrowBackIos />
        </IconButton>

        {`Question ${currentQuestionIndex + 1} of ${questions.length}`}

        <IconButton
          onClick={goNextQuestion}
          disabled={currentQuestionIndex === questions.length - 1}
        >
          <ArrowForwardIos />
        </IconButton>
      </Stack>
      <Question info={questions[currentQuestionIndex]} />
      <Footer />
    </>
  )
}
