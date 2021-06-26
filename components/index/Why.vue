<template>
  <div class="why">
    <div class="container">
      <div class="content">
        <h2 class="text-3xl font-medium center">你的疑惑<span class="text-lightgreen">？</span></h2>
        <p class="center">你可能想问：老子凭什么给你钱？</p>
        <a-row :gutter="60">
          <a-col class="flex flex-col py-8 items-center" :xs="24" :sm="24" :md="24" :xl="8" >
            <img src="../../assets/why.svg" />
            <h4 class="secont-title py-8 center">好问题</h4>
            <p class="leading-loose description">小丐是个可怜兮兮的宝宝？不管你信不信，这是一个事实。当每天你吃着热腾腾的饭菜时，我却在流落街头，只能眼巴巴的看着别人啃食热腾腾的馒头，而我只能咽口水（咕嘟~），恳请你发发善心把，一分钱不嫌少，一万块不嫌多！</p>
          </a-col>
          <a-col class="flex flex-col py-8 items-center" :xs="24" :sm="24" :md="24" :xl="8" >
            <img src="../../assets/why.svg" />
            <h4 class="secont-title py-8 center">Nothing</h4>
            <p class="leading-loose description">每当有人开玩笑般问起我为什么这么穷的时候，我都会抠着自己的衣角，低下头，显得不知所措，恐是被人看出我其实跟他们的玩笑是一模一样的角色，可是，谁又不曾拥有壮丽的梦想，谁又想要以乞讨为生呢？不好意思，我就想！</p>
          </a-col>
          <a-col class="flex flex-col py-8 items-center" :xs="24" :sm="24" :md="24" :xl="8" >
            <img src="../../assets/why.svg" />
            <h4 class="secont-title py-8 center">摊牌了</h4>
            <p class="leading-loose description">其实我是秦始皇，并没有死，我在西安有100吨黄金，现需2000元人民币解冻在西安的黄金，速扫上方二维码进行操作。完成后，我明天直接带部队复活，让你统领三军！（看你速度了，三军统领只有1个名额，晚了只能当赵高）</p>
          </a-col>
        </a-row>
        
      </div>
    </div>
  </div>

</template>

<style>
  
  .secont-title {
    font-size: 24px;
    margin-bottom: 0;
  }
  .description {
    font-size: 16px;
  }
</style>
