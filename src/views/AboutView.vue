<template>
  <v-container>
    <v-card>
      <v-card-title class="headline">{{ title }}</v-card-title>
      <v-card-text>{{ question }}</v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="showAnswer = !showAnswer">
          {{ showAnswer ? 'Hide' : 'Show' }} Answer
        </v-btn>
      </v-card-actions>
      <v-slide-y-transition>
        <v-card-text v-show="showAnswer">{{ answer }}</v-card-text>
      </v-slide-y-transition>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: 'Title',
    question: 'Question',
    answer: 'Answer',
    showAnswer: false
  })
}
</script>
