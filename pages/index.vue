<template>
  <a-layout-content style="padding: 0 50px">
    <div class="container index">
      <Banner />
      <Why />
    </div>
  </a-layout-content>
</template>

<script>
import Banner from '../components/index/Banner'
import Why from '../components/index/Why'
export default {
  components: {
    Banner,
    Why
  },
  head() {
    return {
      title: '打赏',
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  width: 1200px;
}
@media screen and (max-width: 768px) {
  .container {
    width: auto;
  }
}
</style>
