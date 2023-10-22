<template>
  <div>
    <div class="problem-title">
      <h1>This is a Problem{{ id }} Page.</h1>
    </div>
    <div class="problem-text">
      <h2>問題</h2>
      <p>
        二次方程式 $ax^2+bx+c$ ですわよ。 二次方程式 \(ax^{2}+bx+c=0\) の解は \[ x =
        \frac{-b\pm\sqrt{b^{2}-4ac}}{2a} \tag{1} \] です。
      </p>
    </div>
    <div class="problem-answer"><h2>解説</h2></div>
  </div>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  mounted() {
    // const script = document.createElement('script')
    // script.type = 'text/javascript'
    // script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'
    // script.text = `
    //   MathJax = {
    //     tex: {
    //       inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
    //       displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']],
    //       processEscapes: true,
    //       processEnvironments: true,
    //       packages: ['base', 'ams']
    //     },
    //     svg: {
    //       fontCache: 'global'
    //     }
    //   };
    // `
    // document.getElementsByTagName('head')[0].appendChild(script)
  }
}
</script>

<style>
.problem-title {
  text-align: center;
}
</style>
