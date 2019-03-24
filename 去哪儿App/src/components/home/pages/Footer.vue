<template>
  <div class="footer">
    <div class="top">
      <div>
        <i class="iconfont">&#xe629;</i>
        <span>机票</span>
      </div>
      <div>
        <i class="iconfont">&#xe647;</i>
        <span>酒店</span>
      </div>
      <div>
        <i class="iconfont">&#xe619;</i>
        <span>公寓</span>
      </div>
      <div>
        <b></b>
        <i class="iconfont">More</i>
        <span>更多</span>
      </div>
    </div>
    <div class="content">
      <p>登录</p>
      <p>我的订单</p>
      <p>最近浏览</p>
      <p>关于我们</p>
    </div>
    <div class="bottom">
      <p>触屏版</p>
      <p><span>电脑版</span></p>
      <b>Qunar 京ICP备05021087 意见反馈</b>
    </div>
  </div>
</template>
<script>

</script>
<style>
  .footer{
    font-size:0.16rem;
    background: #f3f3f3;
  }
  .footer .top{
    width: 3rem;
    margin:auto;
    color: #9e9e9e;
    overflow: hidden;
  }
  .footer .top div{
    display: inline-block;
    padding:0.05rem;
    line-height: 0.2rem;
  }
  .footer .top b{
    display: inline-block;
    width: 0.025rem;
    height: 0.12rem;
    background: #999;
  }
  .footer  .content{
    padding-bottom: 0.05rem;
    padding-left: .1rem;
    border-bottom:0.015rem solid #cacaca;
  }
  .footer  .content p{
    font-size: 0.14rem;
    display: inline-block;
    color: #25a4bb;
    padding-left: 0.02rem;
    line-height: 0.25rem;
  }
  .footer .bottom{
    text-align: center;
  }
  .footer .bottom p{
    display: inline-block;
    padding-left: 0.15rem;
    line-height: 0.4rem;
    font-size: 0.15rem;
  }
  .footer .bottom p span{
    color: #25a4bb;
  }
  .footer .bottom b{
    display: block;
    color: #9e9e9e;
    line-height: 0.15rem;
    padding-bottom: 0.1rem;
    font-size: 0.15rem;
  }
  .footer .top>div{
    float: left;
  }
</style>
