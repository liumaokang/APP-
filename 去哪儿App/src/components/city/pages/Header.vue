<template>
  <div class="header">
   <div class="iconfont back">
      <router-link to="/"><span>&#xe642;</span></router-link>
      <h1>城市选择</h1>
   </div>
    <div class="back-bot">
      <ul>
        <li class="active">境内</li>
        <li>境外·港澳台</li>
      </ul>
    </div>
  </div>
</template>



<script>
</script>



<style lang="stylus" scoped>
  @import '~css/var.styl'
  .header .back{
    height: .34rem;
    line-height: .34rem;
    border-bottom: 0;
    padding-bottom 0.1rem;
    position :relative;
    background-color :$bgcolor;
  }
  .header .back span{
    font-size :0.18rem;
    width:.4rem;
    height:.44rem;
    position :absolute;
    top:0;
    left:0;
    text-align center;
    line-height 0.44rem;
    color:#fff;
  }
  .header .back h1{
    overflow: hidden;
    margin: 0 0.5rem;
    line-height: .44rem;
    height 0.44rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .16rem;
    text-align: center;
    color: #fff;
  }
  .back-bot{
    height: .3rem;
    line-height: .4rem;
    background-color: $bgcolor;
    color: #fff;
    padding :0 0.5rem;
  }
  .back-bot ul {
    border: 1px solid #fff;
    border-radius: .03rem;
    zoom: 1;
    overflow: hidden;
  }
  .back-bot li {
    width: 50%;
    line-height :0.2rem;
    float: left;
    text-align: center;
    background-color: $bgcolor;
    font-size: .14rem;
    color: #fff;
  }
  .back-bot li:nth-child(1){
    background-color #fff;
    color :#00bcd4
  }
</style>
