<template>
   <div class="box" >
     <home-header></home-header>
     <div class="container" ref="container">
       <div>
         <Swiper :swiperlist="swiperlist"></Swiper>
         <Icon :iconlist="iconlist"></Icon>
         <Location></Location>
         <Hot :hotlist="hotlist"></Hot>
         <Like :likelist="likelist"></Like>
         <GoWhere></GoWhere>
       </div>
      </div>
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
  //引入better-scroll滚动效果
  import BScroll from 'better-scroll'
  export  default {
      data(){
        return{
          swiperlist:[],
          iconlist:[],
          hotlist:[],
          likelist:[]
        }
      },
      components:{
        HomeHeader,
        Swiper,
        Icon,
        Location,
        Hot,
        Like,
        GoWhere,
      },
      mounted(){
        this.$http.get("/api/data/home_data.json").then((res)=>{
          this.data=res.data.data[0];
          this.swiperlist=this.data.swiperlist;
          this.iconlist=this.data.iconlist;
          this.hotlist=this.data.hotlist;
          this.likelist=this.data.likelist;
          console.log(this.data)
        });
        let container = this.$refs['container'];//获取DOM节点
        const scroll = new BScroll(container)
      }
  }
</script>

<style>
  .box{
    background-color: #f5f5f5;
  }
  .container{
    position: absolute;
    left:0;
    right:0;
    bottom: 0;
    top:.44rem;
  }
</style>



