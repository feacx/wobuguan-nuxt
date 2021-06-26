<template>
  <div class="main">
    <a-layout id="components-layout-demo-top" class="layout">
      <Navbar />
      <nuxt/>
      <a-layout-footer style="text-align: center">
        丐中丐 @2020 如非迫不得已，谁愿颠沛流离
      </a-layout-footer>
    </a-layout>
    <!-- <Preloader /> -->
  </div>
</template>

<script>
  import Preloader from '../components/Preloader'
  import Navbar from '../components/Navbar'
  export default {
    data () {
      return {
        test: 1
      }
    },
    components: {
      Preloader, Navbar
    },
    head: {
      titleTemplate: '%s - 小丐在线',
      meta: [
      { name: 'viewport', content: 'width=device-width,minimum-scale=1,initial-scale=1' },
      ]
    }
  }
</script>

<style>
html {
  font-family: Quicksand,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  color: #2f495e;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  font-family: Quicksand,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  color: #2f495e;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.ant-layout {
  background-color: transparent;
}
.center {
  text-align: center;
}
.text-lightgreen {
  color: #00c58e;
}
.font-medium {
    font-weight: 500;
}
.flex {
  display: flex;
}
.text-3xl {
    font-size: 1.875rem;
}
.pb-8 {
  padding-bottom: 2rem;
}
.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.pt-10 {
  padding-bottom: 2.5rem;
}
.flex-col {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.font-medium {
    font-weight: 500;
}
.leading-loose {
    line-height: 2;
}
</style>
