<template>
  <v-textarea v-model="markdownText"></v-textarea>
  <div class="content"><Markdown :source="markdownText" /></div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import Markdown from 'vue3-markdown-it'
// import sanitizer from 'markdown-it-sanitizer'

export default {
  components: {
    Markdown
  },
  data() {
    return {
      markdownText: '# Hello, world!'
    }
  },
  computed: {
    compiledMarkdown() {
      const md = new MarkdownIt()
      return md.render(this.markdownText)
    }
  }
}
</script>

<style>
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
  margin: 0 0 8px 0; /* 左側のマージンを0に変更 */
  padding: 2px 8px;
}
ol li:before {
  content: counter(li);
  counter-increment: li;
  position: relative; /* 絶対位置指定を相対位置指定に変更 */
  top: 0; /* 上側の位置を0に変更 */
  left: -1em; /* 左側の位置を-1emに変更 */
  width: 1em; /* 幅を1emに変更 */
  padding: 0; /* パディングを0に変更 */
  color: #000; /* 文字色を黒に変更 */
  background: transparent; /* 背景色を透明に変更 */
  text-align: right; /* テキストを右寄せに変更 */
}
a {
  color: #4078c0;
  text-decoration: none;
}
/* a:hover,
a:active {
  text-decoration: underline;
} */
</style>
