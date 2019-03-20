<template>
  <div class="hot">
    <div class="hot-left iconfont">
      <div><img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt=""></div>
      <span>本周热门榜单</span>
    </div>
    <div class="hot-right iconfont">
      <span>全部榜单</span>&#xe641;
    </div>
    <ul class="slideImg">
      <li v-for="item in hotlist">
          <div><img :src="item.imgUrl" alt=""></div>
         <p class="runout">{{item.touristSpot}}</p>
         <p><span>¥{{item.price}}</span>起</p>
        <div class="numberTitl" ><img :src="item.number" alt="" v-if="item.number"></div>
      </li>
    </ul>
  </div>
</template>



<script>
  export default {
    data(){
      return{
        "hotlist":[
          {
            id:"01",
            imgUrl:"http://img1.qunarzz.com/sight/p0/1602/53/53cf6caed9f9b9ee90.img.jpg_200x200_f5476a84.jpg",
            touristSpot:"华清宫",
            price:12,
            number:"http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png",
          },
          {
            id:"02",
            imgUrl:"http://img1.qunarzz.com/sight/p0/1508/c5/a017645d82ab89f271fdfb1bd6ecc2e0.water.jpg_200x200_2de772de.jpg",
            touristSpot:"秦岭野生动物园",
            price:20,
            number:"http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png",
          },
          {
            id:"03",
            imgUrl:"http://img1.qunarzz.com/sight/p0/1411/1a/5582f9f24bc50b475a8cbda4c5ac8d24.water.jpg_200x200_a0d48950.jpg",
            touristSpot:"秦始皇陵博物馆",
            price:30,
            number:"http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png",
          },
          {
            id:"04",
            imgUrl:"http://img1.qunarzz.com/sight/p0/201301/11/dd368e9b8629027693835fbb.jpg_200x200_8e79864a.jpg",
            touristSpot:"西安唐乐宫",
            price:40,
          },
          {
            id:"05",
            imgUrl:"http://img1.qunarzz.com/sight/p0/1902/8a/8aa77504c364b4b6a3.img.jpg_200x200_d1af1f23.jpg",
            touristSpot:"大唐芙蓉园",
            price:50,
          },
          {
            id:"05",
            imgUrl:"http://img1.qunarzz.com/sight/p0/1902/8a/8aa77504c364b4b6a3.img.jpg_200x200_d1af1f23.jpg",
            touristSpot:"大唐芙蓉园",
            price:50,
          },
          {
            id:"05",
            imgUrl:"http://img1.qunarzz.com/sight/p0/1902/8a/8aa77504c364b4b6a3.img.jpg_200x200_d1af1f23.jpg",
            touristSpot:"大唐芙蓉园",
            price:50,
          },
          {
            id:"05",
            imgUrl:"http://img1.qunarzz.com/sight/p0/1902/8a/8aa77504c364b4b6a3.img.jpg_200x200_d1af1f23.jpg",
            touristSpot:"大唐芙蓉园",
            price:50,
          },
          {
            id:"05",
            imgUrl:"http://img1.qunarzz.com/sight/p0/1902/8a/8aa77504c364b4b6a3.img.jpg_200x200_d1af1f23.jpg",
            touristSpot:"大唐芙蓉园",
            price:50,
          },
        ]
      }
    },
  }
</script>



<style scoped>
  .hot{
    width: 100%;
    background-color: #fff;
    margin-top: 0.15rem;
  }
  .hot .hot-left{
    float: left;
    font-size: 0.16rem;
    color: #212121;
    padding:0.12rem 0.13rem;
    line-height: 0.22rem;
  }
  .hot .hot-left>div{
    width: 0.15rem;
    display: inline-block;
  }
  .hot .hot-left img{
    width: 100%;
    height: 100%;
  }
  .hot .hot-right{
    float: right;
    font-size: 0.12rem;
    color: #616161;
    padding:0.12rem 0.13rem;
    line-height: 0.22rem;
  }
  .hot .slideImg li{
    position: relative;
    display: inline-block;
    margin-right: 0.1rem;
    width: 1rem;
  }
  .hot .slideImg{
    width: 100%;
    white-space: nowrap;
    overflow-x:scroll;
    overflow-y:hidden;
    padding:0 0.12rem;
    box-sizing: border-box;
  }
  .hot .slideImg li div:nth-child(1){
    width: 1rem;
    height: 1rem;
  }
  .hot .slideImg li img, .numberTitl img{
    width:100%;
    height: 100%;
  }
  .hot .slideImg li p{
    text-align: center;
    font-size: 0.12rem;
  }
  .hot .slideImg li p:nth-child(2){
    color: #212121;
    margin-top: 0.06rem;
    line-height: 0.16rem;
    text-overflow: ellipsis;
  }
  .hot .slideImg li p:nth-child(3){
    color: #616161;
  }
  .hot .slideImg li p:nth-child(3) span{
    color: #ff8300;
    line-height: 0.18rem;
  }
  .hot .numberTitl img{
    position: absolute;
    top: 0;
    left:0;
    width: 0.42rem!important;
    height: 0.20rem!important;
  }
</style>
