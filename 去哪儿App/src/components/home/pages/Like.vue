<template>
  <div class="like">
    <div class="text"><img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">猜你喜欢</div>
    <ul>
      <li v-for="item in likelist">
        <div  class="border-top">
          <div class="like-left">
            <img :src="item.imgUrl" alt="">
            <div class="shopuse" v-if="item.shopuse" style="font-size: 12px">{{item.shopuse}}</div>
          </div>
          <div class="like-right">
            <h3 class="runout">{{item.touristSpot}}</h3>
            <p>★★★★★<span>{{item.comment}}</span></p>
            <p>{{item.price}}<span>起</span></p>
            <p class="runout">{{item.word}}</p>
          </div>
          <div class="geographical"><span>{{item.geographical}}</span></div>
        </div>
      </li>
    </ul>
    <div class="product border-top"><span>查看所有产品</span></div>
  </div>
</template>
<script>
  export  default {
    data(){
      return{
        up:true,
      }
    },
    props:["likelist"],

  }
</script>
<style>
  .like{
    background-color: #fff;
  }
  .text{
    color: #000;
    height: 0.22rem;
    padding-top: 0.12rem;
    padding-bottom: 0.13rem;
    line-height: 0.22rem;
    font-size: 0.16rem;
    margin-right: 0;

  }
  .text img{
    width: 0.15rem;
    height: 0.15rem;
    margin-left: 0.15rem;
    margin-right: 0.05rem;
  }
  .like ul{
    width: 100%;
  }
  .like ul li{
    padding:0 0.1rem;
    height: 1.38rem;
  }
  .like ul li>div{
    margin: 0.1rem 0.1rem;
    padding-top: 0.1rem;
    height: 1.2rem;
  }
  .like .like-right{
    padding-left: 0.11rem;
  }
  .like .like-right h3{
    font-size: 0.16rem;
    color: #212121;
    font-weight: normal;
    margin-top: 0.13rem;
  }
  .like .like-right p:nth-child(2){
    margin-top: 0.07rem;
    line-height: 0.17rem;
    color: #ff8300;
  }
  .like .like-right p:nth-child(2) span{
    padding-left: 0.15rem;
  }
  .like .like-right p:nth-child(3) {
    margin-top: 0.11rem;
    line-height: 0.23rem;
    color: #ff8300;
    font-size: 0.2rem;
  }
  .like-right p,.like ul span{
    font-size: 0.12rem;
    color: #616161;
  }
  .like-left{
    width: 1rem;
    height: 1rem;
    display: inline-block;
    float: left;
    position: relative;
  }
  .like-left>img{
    width: 100%;
    height: 100%;
  }
  .like-left .shopuse{
    width: 0.51rem;
    line-height: 0.16rem;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    background-color: #00afc7;
    color: #fff;
    border-bottom-right-radius: 0.1rem;
    font-size: 0.12rem!;
  }
  .like-right{
    display: inline-block;
    vertical-align: top;
    float: left;
  }
  .like-right p:nth-child(4){
    overflow: hidden;
    text-overflow: ellipsis;
    color: #f55;
    font-size: .12rem;
    line-height: .17rem;
    margin-top: 0.24rem;
  }
  .geographical{
    display: inline-block;
    vertical-align: bottom;
    float: right;
  }
  .product{
    text-align: center;
    color: #00afc7;
    font-size: 0.14rem;
    padding: 0.1rem 0;
  }
</style>
