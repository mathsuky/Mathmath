<template>
  <v-card elevation="0">
    <v-card-text class="text-start px-4"
      ><MdPreview :modelValue="comment.content" :previewTheme="previewTheme"
    /></v-card-text>
    <v-card-actions class="d-flex justify-space-between mx-4">
      <div class="d-flex">
        <div style="margin-right: -12px">
          <v-chip variant="text" color="grey">{{ comment.user }}</v-chip>
        </div>
        <div>
          <v-chip variant="text" color="grey"> {{ comment.date }} days ago</v-chip>
        </div>
      </div>
      <div>
        <v-layout row>
          <div style="margin-top: 4px">
            <v-layout row>
              <v-icon>mdi-thumb-up</v-icon>
              <div>{{ comment.upvoteCount }}</div>
            </v-layout>
          </div>
        </v-layout>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { MdPreview } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import { Comment } from '../types/questionTypes'

const previewTheme = ref('github')

const props = defineProps({
  comment: {
    type: Object as () => Comment,
    required: true
  }
})

const { comment } = toRefs(props)
</script>
<style scoped></style>
