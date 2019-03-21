<template>
  <div class="home_header">
      <div class="back iconfont">&#xe642;</div>
      <div class="server iconfont">&#xe600;输入城市/景点/游玩主题</div>
    <router-link to="/City">
      <div class="citys iconfont" >{{city}}&#xe65b;</div>
    </router-link>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    computed:{
      ...mapState(['city'])
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~css/var.styl'
  .home_header{
    line-height :0.44rem;
    display flex;
    background-color :$bgcolor;
    color: #fff;
    position fixed;
    z-index 20;
    top :0;
    width 100%;
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
  .citys{
    padding :0 0.11rem;
    font-size 0.14rem;
    color :#fff;
    cursor:pointer;
  }
</style>



