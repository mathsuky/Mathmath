<template>
  <h1>This is an about page.</h1>
  <p>{{ text }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { SampleApiFactory, Configuration } from '@/api/generated'

const title = ref('Title')
const question = ref('Question')
const answer = ref('Answer')
const showAnswer = ref(false)

const text = ref('')

const sampleApi = SampleApiFactory(
  new Configuration({ basePath: 'http://localhost:4010' }),
  undefined,
  axios.create()
)

const getSample = async () => {
  const response = await sampleApi.getSample()
  text.value = response.data.text
}
getSample()
</script>
