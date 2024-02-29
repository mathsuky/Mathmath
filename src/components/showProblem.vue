<template>
  <v-card
    :elevation="isShowDetail ? 0 : 2"
    :href="isShowDetail ? null : '/problems/' + problem.id"
    tag="a"
  >
    <v-card-title class="text-h5 font-weight-bold text-start mt-3 mx-3">{{
      problem.title
    }}</v-card-title>
    <v-divider class="mx-7"></v-divider>
    <v-card-text class="text-start px-4"
      ><MdPreview :modelValue="problem.problemContent" :previewTheme="previewTheme"
    /></v-card-text>
    <v-card-actions class="d-flex justify-space-between mx-4">
      <div class="d-flex">
        <div style="margin-right: -12px">
          <v-chip variant="text" color="grey">{{ problem.user }}</v-chip>
        </div>
        <div>
          <v-chip variant="text" color="grey"> {{ problem.date }} days ago</v-chip>
        </div>
      </div>
      <div>
        <v-layout row>
          <v-rating
            class="mr-2"
            readonly
            :length="5"
            :size="32"
            :model-value="3"
            active-color="primary"
          />
          <div style="margin-top: 4px">
            <v-layout row>
              <v-icon>mdi-thumb-up</v-icon>
              <div>{{ problem.upvoteCount }}</div>
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
import { Problem } from '../types/questionTypes'

const previewTheme = ref('github')

const props = defineProps({
  problem: {
    type: Object as () => Problem,
    required: true
  },
  isShowDetail: {
    type: Boolean,
    default: false
  }
})

const { problem, isShowDetail } = toRefs(props)
</script>
<style scoped>
.card-title-h2 {
  font-size: 2rem;
  font-weight: 400;
}
</style>
