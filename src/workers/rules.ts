import { isWithinLimit } from './isWithinLimit'

const rules = {
  problemTitle: [
    (v: string) => !!v || 'タイトルは必須です',
    (v: string) => isWithinLimit(v, 50) || 'タイトルは50文字までです'
  ],
  problemDescription: [(v: string) => isWithinLimit(v, 50) || '説明は200文字までです'],
  problemText: [
    (v: string) => !!v || '問題文は必須です',
    (v: string) => isWithinLimit(v, 50) || '問題文は1000文字までです'
  ],
  answerExplanation: [
    (v: string) => !!v || '解答解説は必須です',
    (v: string) => isWithinLimit(v, 50) || '解答解説は1000文字までです'
  ]
}

export default rules
