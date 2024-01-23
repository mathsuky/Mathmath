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
              <v-text-field
                :counter="200"
                :rules="rules.description"
                label="説明"
                placeholder="補足説明があれば入力"
                required
                class="mb-3"
                v-model="description"
              ></v-text-field>
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
              <div class="summaryItemCaption">説明</div>
              <div class="summaryItemContent">
                <div style="color: darkred" v-if="!description">説明は入力されていません。</div>
                <div style="color: darkred" v-else-if="!isWithinLimit(description, 500)">
                  説明は500文字以内で入力してください。
                </div>
                <div v-else>
                  {{ description }}
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
const description = ref('')
const problemText = ref('# 問題文を入力')
const answerExplanation = ref('# 解答解説を入力')
const language = ref('en-US')
const previewTheme = ref('github')

const isFormValid = computed(
  () =>
    problemTitle.value &&
    problemText.value &&
    description.value &&
    answerExplanation.value &&
    isWithinLimit(problemTitle.value, 50) &&
    isWithinLimit(problemText.value, 10000) &&
    isWithinLimit(description.value, 200) &&
    isWithinLimit(answerExplanation.value, 10000)
)

const clearForm = () => {
  problemTitle.value = ''
  description.value = ''
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

/* MarkdownのCSSを上書きする */
body {
  background-color: #ffffff;
  color: black;
}
code {
  font-family: 'Meiryo', Menlo, Monaco, Consolas, 'Droid Sans Mono', 'Courier New', monospace,
    'Droid Sans Fallback';
}
pre {
  font-family: 'Meiryo', Menlo, Monaco, Consolas, 'Droid Sans Mono', 'Courier New', monospace,
    'Droid Sans Fallback';
}
blockquote {
  border-color: #ea5219;
}
h1,
h2 {
  color: black;
  font-weight: bold;
  padding-bottom: 12px;
  padding-top: 12px;
}

h3 {
  color: black;
  padding-bottom: 12px;
  padding-top: 12px;
}
h4 {
  color: black;
  padding-bottom: 12px;
  padding-top: 12px;
}
h5 {
  color: black;
  padding-bottom: 12px;
  padding-top: 12px;
}
table thead th {
  background: #fff;
  font-weight: bold;
  vertical-align: top;
  color: black;
}

table th,
table td {
  padding: 6px 13px;
  border: 1px solid #ddd;
}
table tr {
  background-color: #fff;
  border-top: 1px solid #ccc;
}
table tr:nth-child(2n) {
  background-color: #f8f8f8;
}
hr {
  background-color: #fff;
  margin: 24px 0px;
}
ul li {
  padding: 0px;
  margin: 0px;
}
ul li {
  list-style-type: none !important;
  list-style-image: none !important;
  margin: 5px 0px 5px 0px !important;
}
ul li {
  position: relative;
  padding-left: 20px;
}
ul li:after {
  content: '';
  display: block;
  position: absolute;
  background: #000;
  width: 9px;
  height: 9px;
  top: 5px;
  left: 5px;
}
ol {
  counter-reset: li;
  padding: 0;
  list-style: none;
}
ol li {
  position: relative;
  margin: 0 0 8px 0;
  padding: 2px 8px;
}
ol li:before {
  content: counter(li);
  counter-increment: li;
  position: relative;
  top: 0;
  left: -1em;
  width: 1em;
  padding: 0;
  color: #000;
  background: transparent;
  text-align: right;
}
a {
  color: #4078c0;
  text-decoration: none;
}
</style>
