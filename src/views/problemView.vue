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
    <div class="problem-answer">
      <h2>解説</h2>
      <p>二次方程式の解の公式ですわよー</p>
    </div>
  </div>
</template>

<script>
export default {
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

<style scoped>
.problem-title {
  text-align: center;
}
</style>
