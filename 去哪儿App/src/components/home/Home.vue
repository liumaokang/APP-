<template>
  <div class="box">
    <home-header></home-header>
    <Swiper :swiperlist="swiperlist"></Swiper>
    <Icon :iconlist="iconlist"></Icon>
    <Location></Location>
    <Hot :hotlist="hotlist"></Hot>
    <Like :likelist="likelist"></Like>
    <GoWhere></GoWhere>
  </div>
</template>


<script>
  import HomeHeader from './pages/HomeHeader'
  import Swiper from './pages/Swipper'
  import Icon from './pages/Icon'
  import Location from './pages/Location'
  import Hot from './pages/Hot'
  import Like from './pages/Like'
  import GoWhere from './pages/GoWhere'

  export default {
    data() {
      return {
        swiperlist: [],
        iconlist: [],
        hotlist: [],
        likelist: []
      }
    },
    components: {
      HomeHeader,
      Swiper,
      Icon,
      Location,
      Hot,
      Like,
      GoWhere,
    },
    mounted() {
      this.$http.get("/api/data/home_data.json").then((res) => {
        this.data = res.data.data[0];
        this.swiperlist = this.data.swiperlist;
        this.iconlist = this.data.iconlist;
        this.hotlist = this.data.hotlist;
        this.likelist = this.data.likelist;
        console.log(this.data)
      });

    }
  }
</script>

<style>
  .box {
    background-color: #f5f5f5;
  }
</style>



