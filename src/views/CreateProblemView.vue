<template>
  <div class="container">
    <v-container>
      <v-container>
        <v-form ref="testForm">
          <v-stepper :items="['入力', '確認']">
            <template v-slot:item.1>
              <v-text-field
                :counter="50"
                :rules="rules.problemTitle"
                label="タイトル"
                placeholder="問題のタイトルを入力"
                required
                class="mb-3"
                v-model="problemTitle"
              ></v-text-field>
              <div class="mb-8">
                <div class="markdown-body">
                  <MdEditor
                    v-model="problemText"
                    :language="language"
                    :previewTheme="previewTheme"
                  />
                </div>
                <div class="error-message" v-if="problemTextError">{{ problemTextError }}</div>
              </div>
              <MdEditor
                v-model="answerExplanation"
                :language="language"
                :previewTheme="previewTheme"
              />
              <div class="error-message" v-if="answerExplanationError">
                {{ answerExplanationError }}
              </div>
            </template>
            <template v-slot:item.2>
              <div class="summaryItemCaption">タイトル</div>
              <div class="summaryItemContent">
                <div style="color: darkred" v-if="!problemTitle">
                  タイトルは入力されていません。この項目は必須です。
                </div>
                <div style="color: darkred" v-else-if="!isWithinLimit(problemTitle, 50)">
                  タイトルは50文字以内で入力してください。
                </div>
                <div v-else>
                  {{ problemTitle }}
                </div>
              </div>
              <div class="summaryItemCaption">問題文</div>
              <div class="summaryItemContent">
                <div style="color: darkred" v-if="!problemText">
                  問題文は入力されていません。この項目は必須です。
                </div>
                <div style="color: darkred" v-else-if="!isWithinLimit(problemText, 500)">
                  問題文は500文字以内で入力してください。
                </div>
                <div v-else>
                  <MdPreview :modelValue="problemText" :previewTheme="previewTheme" />
                </div>
              </div>
              <div class="summaryItemCaption">解答解説</div>
              <div class="summaryItemContent">
                <div style="color: darkred" v-if="!answerExplanation">
                  解答解説は入力されていません。この項目は必須です。
                </div>
                <div style="color: darkred" v-else-if="!isWithinLimit(answerExplanation, 500)">
                  解答解説は500文字以内で入力してください。
                </div>
                <div v-else>
                  <MdPreview :modelValue="answerExplanation" :previewTheme="previewTheme" />
                </div>
              </div>
              <v-btn @click="showMessage" color="success">submit</v-btn>
            </template>
          </v-stepper>
        </v-form>
      </v-container>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { MdEditor, MdPreview } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import { isWithinLimit } from '@/workers/isWithinLimit'
import rules from '@/workers/rules'

const problemTitle = ref('')
const problemText = ref('# 問題文を入力')
const answerExplanation = ref('# 解答解説を入力')
const language = ref('en-US')
const previewTheme = ref('github')

const isFormValid = computed(
  () =>
    problemTitle.value &&
    problemText.value &&
    answerExplanation.value &&
    isWithinLimit(problemTitle.value, 50) &&
    isWithinLimit(problemText.value, 10000) &&
    isWithinLimit(answerExplanation.value, 10000)
)

const clearForm = () => {
  problemTitle.value = ''
  problemText.value = ''
  answerExplanation.value = ''
}

const router = useRouter()

const showMessage = () => {
  if (isFormValid.value) {
    alert('正しく送信されました。')
    clearForm()
    router.push('/')
  } else alert('入力に不備があります。')
}

const problemTextError = computed(() => {
  for (const rule of rules.problemText) {
    const result = rule(problemText.value)
    if (result !== true) {
      return result
    }
  }
  return ''
})

const answerExplanationError = computed(() => {
  for (const rule of rules.answerExplanation) {
    const result = rule(answerExplanation.value)
    if (result !== true) {
      return result
    }
  }
  return ''
})
</script>

<style>
.centerlize {
  text-align: center;
}
.container {
  margin: 12px;
}
.content ul {
  margin-left: 20px;
}
.content ul ul {
  margin-left: 40px;
}
.content ol {
  margin-left: 60px;
}
.content ol ol {
  margin-left: 80px;
}
.content {
  margin-left: 50px;
}

.preview {
  width: 80%;
  padding: 15px;
}

.summaryItemCaption {
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
}

.summaryItemContent {
  margin-bottom: 20px;
  margin-left: 5px;
}

.error-message {
  color: darkred;
  margin-top: 4px;
  margin-left: 20px;
  font-size: 12px;
}
</style>
