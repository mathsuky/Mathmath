<template>
  <v-container>
    <showQuestion :problem="problem" :isShowDetail="true" />
    <v-divider class="mt-5 mb-2"></v-divider>
    <v-btn
      class="mx-7 mb-4"
      :append-icon="showAnswer ? 'mdi-chevron-up' : 'mdi-chevron-down'"
      variant="plain"
      @click="showAnswer = !showAnswer"
      >{{ showAnswer ? '解答とコメントを非表示にする' : '解答とコメントを表示する' }}</v-btn
    >
    <div v-if="showAnswer">
      <div class="text-h5 font-weight-bold ml-7">解答解説</div>
      <v-divider class="mx-7 my-2"></v-divider>
      <div class="px-4">
        <MdPreview :modelValue="problem.problemContent" :previewTheme="previewTheme" />
      </div>
      <div class="text-h5 font-weight-bold ml-7">{{ comments.length }}件のコメント</div>
      <v-btn
        class="mx-7 mt-2"
        append-icon="mdi-comment"
        variant="tonal"
        color="blue"
        @click="showModal = true"
        >コメントする</v-btn
      >
      <v-dialog v-model="showModal" max-width="80%">
        <v-card>
          <v-card-title>
            <span class="headline">コメントを投稿する</span>
          </v-card-title>
          <v-card-text>
            <MdEditor v-model="newComment" :language="language" :previewTheme="previewTheme" />
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" @click="showModal = false">キャンセル</v-btn>
            <v-btn color="blue darken-1">投稿</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-divider class="mx-7 my-2"></v-divider>
      <div class="px-4">
        <div v-for="comment in comments" :key="comment.id">
          <showComment :comment="comment" />
          <div class="mb-2"></div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { MdEditor, MdPreview } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import showQuestion from '@/components/showQuestion.vue'
import showComment from '@/components/showComment.vue'
import { Problem, Comment } from '@/types/questionTypes'

const title = ref('Title')
const problem: Problem = {
  title: '問題ex',
  id: '1',
  problemContent: '二次方程式 $ax^2+bx+c$ ですわよ。\n$$\\frac{1}{2}$$',
  user: 'masky5',
  date: 14,
  upvoteCount: 100,
  answerContent: '解答解説です！\n$$\\frac{1}{2}$$',
  comentCount: 10
}
const comments = ref<Comment[]>([
  {
    id: '1',
    user: 'masky5',
    date: 14,
    content: 'コメントです！\n$$\\frac{1}{2}$$',
    upvoteCount: 100
  },
  {
    id: '2',
    user: 'masky5',
    date: 14,
    content: 'お前はバカだ！\n$$\\frac{1}{2}$$',
    upvoteCount: 100
  }
])
const newComment = ref('')
const showAnswer = ref(false)
const showModal = ref(false)
const previewTheme = ref('github')
const language = ref('en-US')
const route = useRoute()
const id = route.params.id || 'default ID'
title.value = `This is a Problem ${id}.`
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
