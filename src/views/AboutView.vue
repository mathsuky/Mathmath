<template>
  <h1>This is an about page.</h1>
  <p>{{ text }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { SampleApiFactory, Configuration } from '@/api/generated'
import HelloWorld from './components/HelloWorld.vue'

const text = ref('')

const sampleApi = SampleApiFactory(
  new Configuration({ basePath: import.meta.env.VITE_API_BASE_URL }),
  undefined,
  axios.create()
)

const getSample = async () => {
  const response = await sampleApi.getSample()
  text.value = response.data.text
}
getSample()
</script>
