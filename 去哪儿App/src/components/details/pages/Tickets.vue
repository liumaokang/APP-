<template>
  <div class="tickets">
    <div class="slides_tickets">
      <span>门票</span>
      <span>热销组合</span>
      <span>景区服务</span>
      <span>演出</span>
      <span>一日游</span>
    </div>
    <ul class="bit-tickets first_ul">
      <li class="title"><span ></span><i>大门票</i></li>
      <li>
        <span>成人票【当天可订】</span>
        <div>¥120.0<em class="iconfont">&#xe616;</em><span>起</span></div>
      </li>
      <li>
        <span>成人票【提亲一天可订】</span>
        <div>¥120.0<em class="iconfont">&#xe616;</em><span>起</span></div>
      </li>
      <li class="lookProduct">查看剩余产品<span class="icofont"></span></li>
    </ul>
    <ul class="bit-tickets ">
      <li class="title"><span ></span><i>大门票+讲解</i></li>
      <li>
        <span>成人票+人工讲解+无线耳麦</span>
        <div>¥126.0<em class="iconfont">&#xe616;</em><span>起</span></div>
      </li>
      <li>
        <span>成人票+手机导游讲解</span>
        <div>¥108.0<em class="iconfont">&#xe616;</em><span>起</span></div>
      </li>
      <li class="lookProduct">查看剩余产品<span class="icofont"></span></li>
    </ul>
    <ul class="bit-tickets" id="Army">
      <li class="title"><span ></span><i>华清宫+兵马俑</i></li>
      <li >
        <span >【提前一天】成人联票<b >温馨提示:带好本人<br>的二代身份证取票、兵马俑距离华清宫7.4公里，建议您乘车前往。</b></span>
        <div>¥126.0<em class="iconfont">&#xe616;</em><span>起</span></div>
      </li>
      <li >
        <span >【当天可订】成人联票<b >温馨提示:带好本人<br>的二代身份证取票、兵马俑距离华清宫7.4公里，建议您乘车前往。</b></span>
        <div>¥265.0<em class="iconfont">&#xe616;</em><span>起</span></div>
      </li>
      <li class="lookProduct">查看剩余产品<span class="icofont"></span></li>
    </ul>
    <ul class="bit-tickets">
      <li class="title"><span ></span><i>大门票+骊山索道</i></li>
      <li>
        <span>成人票+骊山上行索道</span>
        <div>¥126.0<em class="iconfont">&#xe616;</em><span>起</span></div>
      </li>
      <li>
        <span>成人票+骊山下行索道</span>
        <div>230.0<em class="iconfont">&#xe616;</em><span>起</span></div>
      </li>
      <li class="lookProduct">查看剩余产品<span class="icofont"></span></li>
    </ul>
    <ul class="bit-tickets">
      <li class="title"><span ></span><i>大门票+景区体验</i></li>
      <li>
        <span>成人票+温泉足浴</span>
        <div>240.0<em class="iconfont">&#xe616;</em><span>起</span></div>
      </li>
      <li>
        <span>成人票+电瓶车票</span>
        <div>235.0<em class="iconfont">&#xe616;</em><span>起</span></div>
      </li>
      <li class="lookProduct">查看剩余产品<span class="icofont"></span></li>
    </ul>
    <ul class="bit-tickets">
      <li class="title"><span ></span><i>大门票+骊山索道</i></li>
      <li>
        <span>提前一天+骊山上行索道</span>
        <div>¥30.0<em class="iconfont">&#xe616;</em><span>起</span></div>
      </li>
      <li>
        <span>提前一天+骊山下行索道</span>
        <div>40.0<em class="iconfont">&#xe616;</em><span>起</span></div>
      </li>
      <li class="lookProduct">查看剩余产品<span class="icofont"></span></li>
    </ul>
    <ul class="bit-tickets">
      <li class="title"><span ></span><i>长恨歌第一场</i></li>
      <li>
        <span>中区B成人票</span>
        <div>¥30.0<em class="iconfont">&#xe616;</em><span>起</span></div>
      </li>
      <li>
        <span>东西区A成人票</span>
        <div>40.0<em class="iconfont">&#xe616;</em><span>起</span></div>
      </li>
      <li class="lookProduct">查看剩余产品<span class="icofont"></span></li>
    </ul>
    <ul class="bit-tickets">
      <li class="title"><span ></span><i>长恨歌第二场</i></li>
      <li>
        <span>中区B成人票</span>
        <div>¥152.0<em class="iconfont">&#xe616;</em><span>起</span></div>
      </li>
      <li>
        <span>东西区A成人票</span>
        <div>¥125.0<em class="iconfont">&#xe616;</em><span>起</span></div>
      </li>
      <li class="lookProduct">查看剩余产品<span class="icofont"></span></li>
    </ul>
    <ul class="bit-tickets">
      <li class="title"><span ></span><i>一日游</i></li>
      <li>
        <span>&nbsp;华清宫+兵马俑</span>
        <div>¥152.0<em class="iconfont">&#xe616;</em><span>起</span></div>
      </li>
      <li>
        <span>【西安出发】华清宫+秦始皇陵博物院<br>兵马俑）+长恨歌1日游</span>
        <div>¥125.0<em class="iconfont">&#xe616;</em><span>起</span></div>
      </li>
      <li class="lookProduct">查看剩余产品<span class="icofont"></span></li>
    </ul>

  </div>
</template>
<script></script>
<style>

  .tickets{
    overflow: hidden;
  }
  .slides_tickets{
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y:hidden;
    line-height: .10rem;
    background-color: #fff;
    margin-top: 0.1rem ;
  }
  .slides_tickets span{
    color: #212121;
    width: 1rem;
    display: inline-block;
    height: .46rem;
    line-height: .48rem;
    text-align: center;
    font-size: .16rem;
  }
  .slide span:nth-child(1){
    border-bottom: 2px solid #00bcd4;
    width: 0.8rem;
    margin: 0 auto;
  }
  .bit-tickets .title{
    line-height: 0.44rem;
    width: 100%;
    padding: 0 0.1rem;
    color: #333;
    font-size: .16rem;
    text-indent: .4rem;
    overflow: hidden;
    position: relative;
  }
  .bit-tickets .title i{
    float: left;
    text-align: left;
    position: relative;
    left: -0.35rem;
    width: auto;
  }

  .tickets ul{
    margin-top: 0.1rem;
  }
  .tickets .first_ul{
    margin-top: 0;
  }
  .bit-tickets li{
    line-height: 0.24rem;
    padding: 0.12rem 0.1rem;
    overflow: hidden;
    background-color: #fff;
    box-sizing: border-box;
    border-bottom: 1px solid #dadada;
  }
  .bit-tickets li:nth-child(2)>span, .bit-tickets li:nth-child(3)>span{
    color: #333;
    font-size: .15rem;
    line-height: .24rem;
    float: left;
  }
  .bit-tickets li b{
    font-size: .12rem;
    color: #888;
    font-weight: normal;
    line-height: .16rem;
    margin: .05rem 0 .07rem .05rem;
    margin-right: 0.92rem;
  }
  .bit-tickets li div{
    margin-left: .02rem;
    font-size: .2rem;
    color: #ff9800;
    float: right;
    line-height: .24rem;
  }
  .bit-tickets li div span{
    font-size: 0.12rem;
    color: #9e9e9e;
    float: right;
  }
  .bit-tickets li div em{
    float: right;
    color:#333;
  }
  .bit-tickets .lookProduct{
    position: relative;
    height: .4rem;
    background: #fff;
    color: #616161;
    line-height: .4rem;
    text-align: center;
    font-size: 0.16rem;
    border-bottom: none;
    padding: 0;
  }
  .tickets  #Army li:nth-child(2){
    line-height: 0.45rem;
    padding: 0.12rem 0.1rem;
  }
  .tickets  #Army li:nth-child(2)>span,.tickets  #Army li:nth-child(3)>span{
    float: left;
    height: 0.45rem;
    width: 70%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .tickets  #Army li:nth-child(1){
    position: relative;
  }
  .tickets  .title span{
    background-image: url("https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png");
    display: inline-block;
    background-position: 0 -0.4rem;
    background-size:100%;
    width: .18rem;
    height: .18rem;
    margin-top: 0.15rem;
    float: left;
  }
  .tickets  #Army li:nth-child(2)>div,.tickets  #Army li:nth-child(3)>div{
    float: right;
    width: 0.92rem;
    line-height: 0.45rem;
  }
</style>
