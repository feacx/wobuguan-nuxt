<template>
  <div class="banner">
    <a-row :gutter="48">
      <a-col :span="12" :xs="24" :sm="12" >
        <div>
          <h1 class="h1">
            在下<strong class="text-lightgreen">小丐</strong>
            <br>
            正在沿街<span class="text-lightgreen">乞讨</span>
          </h1>
          <p class="intro">
            各位乡亲父老，在下身无分文，在外流浪，望各位有钱捧个钱场，随意施舍一点儿钱，小丐在这给您行礼了……
            <br>
            饥饿的感觉让我几近昏厥，可怜可怜吧！~
          </p>
          <div class="button-outter">
            <a-button class="get-started" type="primary" icon="smile" size="large" @click="() => qrCodeVisible = true">
              立即投食
            </a-button>
          </div>
        </div>
      </a-col>
      <a-col :span="12" :xs="24" :sm="12" >
        <img src="../../assets/sitdown.svg" />
      </a-col>
    </a-row>
    <a-modal v-model="qrCodeVisible" :width="400" :closable="false" :footer="null" centered @ok="() => (qrCodeVisible = false)">
      <div class="center">
        微信扫码打赏，感谢你让我不再挨饿
        <br>
        如果是手机，辛苦你先保存二维码到手机然后微信扫码选择图片就可以了
        <br/><br/>
        <img src="../../assets/qrcode.png" :style="{ width: '60%'}">
      </div>
    </a-modal>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        qrCodeVisible: false
      }
    }
  }
</script>

<style lang="scss" scope>
.banner {
  padding-top: 6rem;
  padding-bottom: 6rem;
  .h1 {
    margin-top: 20px;
    font-size: 40px;
    font-weight: 500;
    color: #2f495e;
    letter-spacing: 2px;
  }
  .intro {
    font-size: 18px;
    font-weight: 500;
    line-height: 2;
  }
  .get-started {
    height: 48px;
    padding: 0 30px;
  }
  .text-lightgreen {
    color: #00c58e;
  }
}
.get-started {
  color: #fff;
}
</style>
