<template>
  <div class="swiper">
    <swiper :options="swiperOption" >
      <!-- slides -->
      <swiper-slide v-for="item in swiperlist" :key="item.id">
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
          loop:false,
          autoplay:{
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
        },
      }
    },
    props:["swiperlist"],
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
