<template>
  <div class="container">
    <v-container>
      <v-container>
        <v-stepper :items="['入力', '確認']">
          <template v-slot:item>
            <v-text-field
              :counter="30"
              label="タイトル"
              placeholder="問題のタイトルを入力"
              required
              class="mb-3"
              v-model="problemTitle"
            ></v-text-field>
            <v-textarea
              label="問題文"
              placeholder="# Markdown+LaTeXで書けます"
              v-model="questionText"
            ></v-textarea>
            <v-card title="問題文のプレビュー" variant="outlined" class="mb-6"
              ><div class="preview" v-html="compiledMarkdown(questionText)"></div
            ></v-card>
            <v-text-field
              :counter="100"
              label="説明"
              placeholder="補足説明があれば入力"
              required
              class="mb-3"
              v-model="description"
            ></v-text-field>
            <v-textarea
              label="解答や解説"
              placeholder="# Markdown+LaTeXで書けます"
              v-model="answerExplanation"
            ></v-textarea>
            <v-card title="解答解説のプレビュー" variant="outlined" class="mb-6"
              ><div class="preview" v-html="compiledMarkdown(answerExplanation)"></div
            ></v-card>
          </template>
          <template v-slot:item2>
            <div class="summaryItemCaption">タイトル</div>
            <div class="summaryItemContent" v-if="problemTitle">{{ problemTitle }}</div>
            <div class="summaryItemContent" style="color: gray" v-else>
              タイトルは入力されていません
            </div>
            <div class="summaryItemCaption">問題文</div>
            <div
              class="summaryItemContent"
              v-if="questionText"
              v-html="compiledMarkdown(questionText)"
            ></div>
            <div class="summaryItemContent" style="color: gray" v-else>
              問題文は入力されていません
            </div>
            <div class="summaryItemCaption">説明</div>
            <div class="summaryItemContent" v-if="description">{{ description }}</div>
            <div class="summaryItemContent" style="color: gray" v-else>
              説明は入力されていません
            </div>
            <div class="summaryItemCaption">解答解説</div>
            <div
              class="summaryItemContent"
              v-if="answerExplanation"
              v-html="compiledMarkdown(answerExplanation)"
            ></div>
            <div class="summaryItemContent" style="color: gray" v-else>
              解答解説は入力されていません
            </div>
          </template>
        </v-stepper>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import markdownItTexmath from 'markdown-it-texmath'
import katex from 'katex'
import 'katex/dist/katex.min.css'

export default {
  data() {
    return {
      problemTitle: '',
      description: '',
      questionText: '',
      answerExplanation: ''
    }
  },
  methods: {
    compiledMarkdown(markdownText) {
      const md = new MarkdownIt()
      md.use(markdownItTexmath, { engine: katex })
      return md.render(markdownText)
    }
  },
  mounted() {
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
  }
}
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
