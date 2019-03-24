<template>
  <router-link to="/DetailsImg">
    <div class="imgList">
      <div>
        <swiper :options="swiperOption" >
          <!-- slides -->
          <swiper-slide v-for="(item,index) in imglist"  :key="item.id">
            <img :src="item.imgUrl" alt="">
          </swiper-slide>
          <!-- Optional controls -->

          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>

    </div>
  </router-link>
</template>
<script language="javascript">
  export default {
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },
          loop:true,
        },
        imglist:[
          {
            id:"1",
            imgUrl:"http://img1.qunarzz.com/sight/p0/1602/53/53cf6caed9f9b9ee90.img.jpg_350x240_34a3d53e.jpg",
          },
          {
            id:"2",
            imgUrl:"http://img1.qunarzz.com/sight/p0/1602/4d/4d8529eb55360f5090.img.jpg_350x240_9c36e5b2.jpg",
          },
          {
            id:"3",
            imgUrl:"http://img1.qunarzz.com/sight/p0/1602/2c/2ccb513f255467c790.img.jpg_350x240_c4748af3.jpg",
          } ,
          {
            id:"4",
            imgUrl:"http://img1.qunarzz.com/sight/p0/1602/de/de8400021b664c5390.img.jpg_350x240_9694a701.jpg",
          },
          {
            id:"5",
            imgUrl:"http://img1.qunarzz.com/sight/p0/1602/15/15c8516a575214fe90.img.jpg_350x240_1cef762d.jpg",
          },
          {
            id:"6",
            imgUrl:"http://img1.qunarzz.com/sight/p0/1602/43/430f271ff49c8a790.img.jpg_350x240_0185fa41.jpg",
          },
          {
            id:"7",
            imgUrl:"http://img1.qunarzz.com/sight/p0/1602/98/988af911180375f690.img.jpg_350x240_60011bf0.jpg",
          },
          {
            id:"8",
            imgUrl:"http://img1.qunarzz.com/sight/p0/1602/b2/b2c17726e5b681b290.img.jpg_350x240_2242cc13.jpg",
          },
        ]
      }
    },
  }
</script>
<style>
  .imgList {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: #000;
  }
  .imgList div{
    position: relative;
    top: 30%;
  }
  .imgList img{
    width: 100%;
  }
  .imgList >>> .swiper-pagination-bullet-active {     /*穿透样式*/
    opacity: 1;
    background: #fff;
  }
  .imglist{
    color: #fff;
    font-size: .25rem;
    text-align: center;
  }
  .imgList .swiper-pagination{
    font-size: 0.2rem;
    margin-top: 0.2rem;
  }
  .imgList .swiper-pagination span{
    color: #fff;
  }
</style>
