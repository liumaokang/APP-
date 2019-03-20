<template>
  <div class="home_header">
      <div class="back iconfont">&#xe642;</div>
      <div class="server iconfont">&#xe600;输入城市/景点/游玩主题</div>
      <div class="city iconfont" >西安&#xe65b;</div>
  </div>
</template>
<script>

</script>

<style lang="stylus" scoped>
  @import '~css/var.styl'
  .home_header{
    line-height :0.44rem;
    display flex;
    background-color :$bgcolor;
    color: #fff;
  }
  .back{
    padding :0 0.1rem;
  }
  .server{
    height :0.3rem;
    background-color #fff;
    color :#e4e7ea;
    border-radius :0.05rem;
    margin-top :0.07rem;
    line-height 0.3rem;
    font-size :0.14rem;
    width 100%;
    padding-left 0.1rem;
    flex:1;
  }
  .city{
    padding :0 0.11rem;
    font-size 0.14rem;
    color :#fff;
  }
</style>



