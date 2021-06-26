<template>
  <div class="preloader">
    <div class="status">
      <div class="spinner">
        <div class="dot1"></div>
        <div class="dot2"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top left,#2558ab 0,#59dbff);
  z-index: 9999999;
  .status {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
}
.spinner {
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
  text-align: center;
  -webkit-animation: sk-rotate 2s linear infinite;
  animation: sk-rotate 2s linear infinite;
}
.dot1, .dot2 {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #fff;
  border-radius: 100%;
  -webkit-animation: sk-bounce 2s ease-in-out infinite;
  animation: sk-bounce 2s ease-in-out infinite;
}
.dot2 {
  top: auto;
  bottom: 0;
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
@-webkit-keyframes sk-rotate { 100% { -webkit-transform: rotate(360deg) }}
@keyframes sk-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}
@-webkit-keyframes sk-bounce {
  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
}
@keyframes sk-bounce {
  0%, 100% { 
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  }
  50% { 
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
</style>

<script>
export default {
  methods: {
    initFinished () {
      if (process.browser) {
        document.onreadystatechange = function (e) {
          if (document.readyState == 'complete') {
            this.querySelector('.preloader').remove()
          }
        }
      }
    },
  },
  mounted () {
    this.initFinished()
  }
}
</script>
