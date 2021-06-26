<template>
  <div class="sticky-outter">
    <a-layout-header class="sticky-navbar">
      <a-row type="flex" class="container" justify="center" align="top">
        <a-col :xs="12" :sm="24" :md="6" :lg="5" :xl="5" :xxl="4">
          <div class="logo">
            <img src="../assets/logo.svg"/>
          </div>
        </a-col>
        <a-col :xs="0" :sm="0" :md="18" :lg="19" :xl="19" :xxl="20">
          <a-menu class="menu"
          mode="horizontal"
          :default-selected-keys="['2']"
          :style="{ lineHeight: '80px', fontSize: '16px' }"
            >
            <a-menu-item key="1">
              待定
            </a-menu-item>
            <a-menu-item key="2">
              待定
            </a-menu-item>
            <a-menu-item key="3">
              待定
            </a-menu-item>
          </a-menu>
        </a-col>
      </a-row>
    </a-layout-header>
  </div>
</template>

<style>
.sticky-outter {
  margin-bottom: 0;
}
.sticky-navbar {
  overflow: hidden;
  transition: 0.4s;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;
}
/* ant design */
.sticky-navbar.active {
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(133,138,180,.14);
}
.ant-layout-header {
  height: 80px;
  background-color: transparent;
}
.ant-menu {
  background-color: transparent;
}
.ant-menu-horizontal {
  border: none;
}
/* ant design */
.logo {
  height: 80px;
  display: flex;
  align-items: center;
}
.logo img {
  max-width: 100%;
  height: 66%;
}
.menu {
  float: right;
}
</style>

<script>
  export default {
    methods: {
      initBrowser () {
        if (process.browser) {
          this.stickyNav(document.querySelector('.sticky-navbar'))
        }
      },
      stickyNav (obj, className = 'active') {
        obj.parentNode.style.marginBottom = `${obj.offsetHeight}px`
        document.onscroll = function () {
          if (document.body.scrollTop > obj.offsetHeight / 2 || document.documentElement.scrollTop > obj.offsetHeight / 2) {
            obj.classList.add(className)
          } else {
            obj.classList.remove(className)
          }
        }
      }
    },
    mounted () {
      this.initBrowser()
    }
  }
</script>
