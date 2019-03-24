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
    // props:["swiperlist"],
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop:true,
          autoplay:{
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
        },
        "swiperlist":[
          {
            "id":"01",
            "imgUrl":"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/2f5f3ea4698c9b7898db7562d89b91ed.jpg_750x200_bd3b4ce9.jpg"
          },
          {
            "id":"02",
            "imgUrl":"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/fa107ba095ae4e01919e141bcfe624b6.jpg_750x200_fc47f006.jpg"
          },
          {
            "id":"03",
            "imgUrl":"http://img1.qunarzz.com/piao/fusion/1805/fe/ca8ed7adc3ff9f02.jpg_750x200_49735140.jpg"
          },
          {
            "id":"04",
            "imgUrl":"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/534106663f424042868365167e4a66ff.jpg_750x200_3ec12f21.jpg"
          },
          {
            "id":"05",
            "imgUrl":"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/ed5f4115226306e48e6fad106a038afe.jpg_750x200_64df48d6.jpg"
          }
        ],
      }
    },
  }
</script>


<style scoped>
  .swiper{
    height: 0;
    padding-bottom: 26.7%;   /*防止掉块100/375*/
    background-color: #ddd;
    width: 100%;
    margin-top: 0.44rem;
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
