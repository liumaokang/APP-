<template>
  <div class="reviews">
    <h3>用户评论</h3>
    <div class="reviews-list">
      <div class="clearFix reviews-head">
        <div class="fl">★★★★★</div>
        <div class="fr">z*0  2019-03-15</div>
      </div>
      <p>导游小洁美女服务周到，讲解细致，整体时间安排较好，错开了人流高峰。荆轲刺秦王的互动演出有特色，有幸扮演大臣夏无几，并有一个动作和台词，更近距离的观看了表演，演员也很入戏，值得一看！参观秦始皇兵马俑，三分看，七分听，通过详细的讲解，更加深入的了解历史，好好的补了一节历史课！</p>
      <ul class="clearFix">
        <li><img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/fusion/20193/649a2428c3daf04b11b61c99466355da.jpg_228x168_90eb2e68.jpg" alt=""></li>
        <li><img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/fusion/20193/9ba400d48426eb9f61a6c78c83465725.jpg" alt=""></li>
        <li><img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/fusion/20193/7ce16ed325e0259612d358cadfdb89cc.jpg" alt=""></li>
        <li><img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/fusion/20193/04fa9c30924ea4cc686007e145e67f68.jpg_228x168_3e9e78f9.jpg" alt=""></li>
        <li><img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/fusion/20193/b77f679e04a2c63246ef5fd48057e79c.jpg_228x168_e69382ab.jpg" alt=""></li>
        <li><img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/fusion/20193/04fa9c30924ea4cc686007e145e67f68.jpg_228x168_3e9e78f9.jpg" alt=""></li>
      </ul>
    </div>
    <div class="reviews-ck">查看全部评论</div>
  </div>
</template>
<script>

</script>
<style scoped>
  .reviews{
    margin-bottom: .1rem;
  }
  .reviews h3{
    position: relative;
    padding: 0 .1rem;
    height: .44rem;
    background: #fff;
    color: #333;
    font-size: .15rem;
    line-height: .44rem;
    text-indent: .1rem;
    font-weight: normal;
    border-bottom: 1px solid #f5f5f5;
  }
  .reviews h3:after{
    content:"";
    display: block;
    position: absolute;
    top: .155rem;
    left: .1rem;
    width: .03rem;
    height: .12rem;
    background: #1ba9ba;
    border-radius: .02rem;
  }
  .reviews-head{
    line-height: .14rem;
    font-size: .12rem;
    vertical-align: middle;
    color: #212121;
    margin-top: .1rem;
    padding:.1rem 0;
  }
  .reviews-list{
    background: #fff;
    padding:0 .1rem;
    border-bottom: 1px solid #f5f5f5;
  }
  .reviews-head>.fl{
    color: #ffb436
  }
  .clearFix:after{
    content: "";
    display:block;
    clear: both;
  }
  .reviews-list p{
    height: 105px;
    overflow: hidden;
    word-break: break-all;
    word-wrap: break-word;
    line-height: .21rem;
    font-size: .13rem;
    color: #616161;
    margin-bottom: .2rem;
  }
  .reviews-list>ul{
    margin-bottom: .15rem;
  }
  .reviews-list>ul>li{
    width:32.3%;
    float: left;
    margin-bottom: .05rem;
    margin-right: .05rem;
    box-sizing: border-box;
  }
  .reviews-list>ul>li:nth-child(3n){
    margin-right: 0;
  }
  .reviews-list>ul>li img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .reviews-ck{
    text-align: center;
    margin-top: -.01rem;
    height: .4rem;
    background: #fff;
    color: #616161;
    line-height: .4rem;
    font-size: .14rem;
    border-top: 1px #f5f5f5 dashed;
  }
</style>
