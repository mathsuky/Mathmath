<template>
  <v-container>
    <h1 class="text-center">This is an AllQuestions Page.</h1>
    <v-col v-for="(problem, index) in sliceProblems[currentPage - 1]" :key="index">
      <showProblem :problem="problem" :isShowDetail="false" /></v-col
    ><v-pagination v-model="currentPage" :length="itemsPerPage"></v-pagination>
  </v-container>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import showProblem from '@/components/showProblem.vue'
import { Problem } from '@/types/questionTypes'

const currentPage = ref(1)
const itemsPerPage = ref(2)

const allProblems = ref<Problem[]>([
  {
    title: '問題1',
    id: '1',
    problemContent: 'こんにちは！\n$$\\frac{1}{2}$$',
    user: 'masky5',
    date: 14,
    upvoteCount: 100,
    answerContent: '解答解説です！\n$$\\frac{1}{2}$$',
    comentCount: 10
  },
  {
    title: '問題2',
    id: '2',
    problemContent: 'こんにちは！\n$$\\frac{1}{2}$$',
    user: 'masky5859',
    date: 14,
    upvoteCount: 0,
    answerContent: '解答解説です！\n$$\\frac{1}{2}$$',
    comentCount: 10
  },
  {
    title: '問題3',
    id: '3',
    problemContent: 'こんにちは！\n$$\\frac{1}{2}$$',
    user: 'masky5859',
    date: 14,
    upvoteCount: 100,
    answerContent: '解答解説です！\n$$\\frac{1}{2}$$',
    comentCount: 10
  }
])

const sliceProblems = ref<Problem[][]>([])
const slice = (itemsPerPage: number) => {
  const lengthOfsliceProblem = Math.ceil(allProblems.value.length / itemsPerPage)
  for (let i = 0; i < lengthOfsliceProblem; i++) {
    sliceProblems.value.push(allProblems.value.slice(i * itemsPerPage, (i + 1) * itemsPerPage))
  }
}
slice(itemsPerPage.value)
console.log(sliceProblems.value)
</script>
