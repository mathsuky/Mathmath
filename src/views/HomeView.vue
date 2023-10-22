<template>
  <div class="titlebox">
    <div class="maintitle">
      <h1>Welcome to MathBox</h1>
    </div>
    <div class="content">
      <p>このWebアプリでは様々な魅力的な問題に出会うことができます。\\frac{a_i}{1+x}</p>
      <!-- <div v-katex="'\\frac{a_i}{1+x} \\begin{equation}\\end{equation}'"></div> -->
    </div>
  </div>
  <div class="container">
    <div class="grey">
      <div class="title">
        <h2>最近投稿された問題</h2>
      </div>
      <div>
        <v-container>
          <v-row>
            <v-col v-for="(NewProblem, index) in Newproblems" :key="index">
              <v-hover v-slot="{ isHovering, props }">
                <v-card
                  :elevation="isHovering ? 12 : 2"
                  :class="{ 'on-hover': isHovering }"
                  v-bind="props"
                >
                  <v-img
                    src="https://cdn.vuetifyjs.com/docs/images/cards/hands.jpg"
                    height="225px"
                  ></v-img>
                  <v-card-title>{{ NewProblem.title }}</v-card-title>
                  <v-btn :to="'/problem/' + NewProblem.id">この問題を見る</v-btn>
                </v-card></v-hover
              >
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="white">
      <div class="title">
        <h2>人気のある問題</h2>
      </div>
      <div>
        <v-container>
          <v-row>
            <v-col v-for="(RecommendProblem, index) in RecommendProblems" :key="index">
              <v-hover v-slot="{ isHovering, props }">
                <v-card
                  :elevation="isHovering ? 12 : 2"
                  :class="{ 'on-hover': isHovering }"
                  v-bind="props"
                >
                  <v-img
                    src="https://cdn.vuetifyjs.com/docs/images/cards/singer.jpg"
                    height="225px"
                  ></v-img>
                  <v-card-title>{{ RecommendProblem.title }}</v-card-title>
                  <v-btn :to="'/problem/' + RecommendProblem.id">この問題を見る</v-btn>
                </v-card></v-hover
              >
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      // image_src: require('../assets/target.jpg'),
      Newproblems: [
        {
          title: '問題1',
          id: 1,
          img: 'https://cdn.vuetifyjs.com/docs/images/cards/hands.jpg'
        },
        {
          title: '問題2',
          id: 2,
          img: 'mdi-numeric-1-circle-outline'
        },
        {
          title: '問題3',
          id: 3,
          img: 'mdi-numeric-1-circle-outline'
        }
      ],
      RecommendProblems: [
        {
          title: '問題4',
          id: 4,
          img: 'https://cdn.vuetifyjs.com/docs/images/cards/hands.jpg'
        },
        {
          title: '問題5',
          id: 5,
          img: 'mdi-numeric-1-circle-outline'
        },
        {
          title: '問題6',
          id: 6,
          img: 'mdi-numeric-1-circle-outline'
        }
      ]
    }
  },
  mounted() {
    // const script = document.createElement('script')
    // script.type = 'text/javascript'
    // script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-MML-AM_CHTML'
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
.titlebox {
  display: flex;
  text-align: center;
  flex-direction: column;
  margin-bottom: 50px;
}
.maintitle {
  text-align: center;
  margin-top: 100px;
}
.title {
  text-align: center;
  margin-top: 10px;
}
.container {
  display: flex;
  text-align: center;
  flex-direction: column;
  margin-bottom: 50px;
}

.white {
  background-color: white;
}

.grey {
  background-color: #f2f2f2;
}

.content {
  margin: 0 auto;
  width: 80%;
  padding: 20px;
}
</style>
