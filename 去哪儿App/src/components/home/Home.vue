<template>
   <div class="box">
      <Header></Header>
      <Swiper></Swiper>
     <Icon></Icon>
     <Location></Location>
     <Hot></Hot>
     <Like></Like>
     <GoWhere></GoWhere>
   </div>
</template>




<script>
  import Header from './pages/Header'
  import Swiper from './pages/Swipper'
  import Icon from './pages/Icon'
  import Location from './pages/Location'
  import Hot from './pages/Hot'
  import Like from './pages/Like'
  import GoWhere from './pages/GoWhere'
  export  default {
      components:{
        Header,
        Swiper,
        Icon,
        Location,
        Hot,
        Like,
        GoWhere,
      }
  }
</script>

<style>
  .box{
    background-color: #f5f5f5;
  }
</style>



