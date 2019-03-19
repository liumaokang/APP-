<template>
  <div class="swiper">
    <swiper :options="swiperOption" >
      <!-- slides -->
      <swiper-slide v-for="item in swiperlist " :key="item.id">
        <img :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop:true,
          autoplay:{
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          }
        },

        "swiperlist":[
          {
            "id":"01",
            "imgUrl":require("@/assets/images/banner1.jpg")
          },
          {
            "id":"02",
            "imgUrl":require("@/assets/images/banner2.jpg")
          },
          {
            "id":"03",
            "imgUrl":require("@/assets/images/banner3.jpg")
          },
          {
            "id":"04",
            "imgUrl":require("@/assets/images/banner4.jpg")
          },
          {
            "id":"05",
            "imgUrl":require("@/assets/images/banner5.jpg")
          },
        ]
      }
    }
  }
</script>


<style scoped>
  .swiper{
    height: 0;
    padding-bottom: 26.7%;   /*防止掉块100/375*/
    background-color: #ddd;
    width: 100%;
  }
  .swiper img{
    width: 100%;
    height: 100%;
  }
  .swiper >>> .swiper-pagination-bullet-active {     /*穿透样式*/
    opacity: 1;
    background: #fff;
  }
</style>
