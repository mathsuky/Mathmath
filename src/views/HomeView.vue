<template>
  <div class="titlebox">
    <div class="maintitle">
      <h1>Welcome to MathBox</h1>
    </div>
    <div class="content">
      <p>このWebアプリでは様々な魅力的な問題に出会うことができます</p>
    </div>
  </div>
  <div class="container">
    <div class="grey">
      <div class="title">
        <h2>最近投稿された問題</h2>
      </div>
      <div>
        <v-container>
          <v-row>
            <v-col v-for="(NewProblem, index) in Newproblems" :key="index">
              <showQuestion :problem="NewProblem" :isShowDetail="false" />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="white">
      <div class="title">
        <h2>人気のある問題</h2>
      </div>
      <div>
        <v-container>
          <v-row>
            <v-col v-for="(RecommendProblem, index) in RecommendProblems" :key="index">
              <showQuestion :problem="RecommendProblem" />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import showQuestion from '@/components/showQuestion.vue'
import { Problem } from '@/types/questionTypes'

const Newproblems = ref<Problem[]>([
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

const RecommendProblems = ref([
  {
    title: '問題4',
    id: '4',
    problemContent: 'こんにちは！\n$$\\frac{1}{2}$$',
    user: 'masky5859',
    date: 14,
    upvoteCount: 100,
    answerContent: '解答解説です！\n$$\\frac{1}{2}$$',
    comentCount: 10
  },
  {
    title: '問題5',
    id: '5',
    problemContent: 'こんにちは！\n$$\\frac{1}{2}$$',
    user: 'masky5859',
    date: 14,
    upvoteCount: 100,
    answerContent: '解答解説です！\n$$\\frac{1}{2}$$',
    comentCount: 10
  },
  {
    title: '問題6',
    id: '6',
    problemContent: 'こんにちは！\n$$\\frac{1}{2}$$',
    user: 'masky5859',
    date: 14,
    upvoteCount: 100,
    answerContent: '解答解説です！\n$$\\frac{1}{2}$$',
    comentCount: 10
  }
])
</script>

<style scoped>
.titlebox {
  display: flex;
  text-align: center;
  flex-direction: column;
  margin-bottom: 50px;
}
.maintitle {
  text-align: center;
  margin-top: 100px;
}
.title {
  text-align: center;
  margin-top: 10px;
}
.container {
  display: flex;
  text-align: center;
  flex-direction: column;
  margin-bottom: 50px;
}

.white {
  background-color: white;
}

.grey {
  background-color: #f2f2f2;
}

.content {
  margin: 0 auto;
  width: 80%;
  padding: 20px;
}
</style>
