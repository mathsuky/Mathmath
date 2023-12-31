<template>
  <!-- <div>
    <div class="problem-title">
      <h1>Enjoy the Challenge!</h1>
    </div>
  </div> -->
  <v-container>
    <v-card>
      <div class="centerize">
        <v-card-title class="add-space"
          ><h1>{{ title }}</h1></v-card-title
        >
      </div>

      <v-card-text class="add-space"
        ><div class="preview" v-html="compiledMarkdown(problemText)"></div
      ></v-card-text>
      <v-card-actions class="add-space">
        <v-btn color="primary" @click="showAnswer = !showAnswer">
          {{ showAnswer ? 'Hide' : 'Show' }} Answer
        </v-btn>
      </v-card-actions>
      <v-slide-y-transition>
        <v-card-text class="add-space" v-show="showAnswer"
          ><div class="preview" v-html="compiledMarkdown(answerExplanation)"></div
        ></v-card-text>
      </v-slide-y-transition>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import MarkdownIt from 'markdown-it'
import markdownItTexmath from 'markdown-it-texmath'
import katex from 'katex'
import 'katex/dist/katex.min.css'

const title = ref('Title')
const problemText = ref('二次方程式 $ax^2+bx+c$ ですわよ。 $$\\frac{1}{2}$$')
const answerExplanation = ref('## sdf')
const showAnswer = ref(false)

const route = useRoute()
const id = route.params.id || 'default ID'
title.value = `This is a Problem ${id}.`

const compiledMarkdown = (markdownText: string) => {
  const md = new MarkdownIt()
  md.use(markdownItTexmath, { engine: katex })
  return md.render(markdownText)
}

onMounted(() => {
  if (window.MathJax) {
    window.MathJax.Hub.Config({
      TeX: { equationNumbers: { autoNumber: 'AMS' } },
      tex2jax: {
        inlineMath: [
          ['$', '$'],
          ['\\(', '\\)']
        ],
        displayMath: [
          ['$$', '$$'],
          ['\\[', '\\]']
        ],
        processEscapes: true
      },
      'HTML-CSS': { matchFontHeight: false },
      displayAlign: 'center',
      displayIndent: '2em'
    })
    window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub])
  }
})
</script>

<style scoped>
.add-space {
  margin: 20px;
}
.centerize {
  display: flex;
  justify-content: center; /* 水平方向の中央寄せ */
}
.problem-title {
  text-align: center;
}
</style>
