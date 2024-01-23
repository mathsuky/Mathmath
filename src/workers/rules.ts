import { isWithinLimit } from './isWithinLimit'

const rules = {
  problemTitle: [
    (v: string) => !!v || 'タイトルは必須です',
    (v: string) => isWithinLimit(v, 50) || 'タイトルは50文字までです'
  ],
  problemDescription: [(v: string) => isWithinLimit(v, 200) || '説明は200文字までです'],
  problemText: [
    (v: string) => !!v || '問題文は必須です',
    (v: string) => isWithinLimit(v, 10000) || '問題文は10000文字までです'
  ],
  answerExplanation: [
    (v: string) => !!v || '解答解説は必須です',
    (v: string) => isWithinLimit(v, 10000) || '解答解説は10000文字までです'
  ],
  description: [
    (v: string) => !!v || '説明は必須です',
    (v: string) => isWithinLimit(v, 200) || '説明は200文字までです'
  ]
}

export default rules
