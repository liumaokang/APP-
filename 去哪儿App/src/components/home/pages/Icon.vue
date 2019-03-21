<template>
  <div class="icon">
    <swiper :options="swiperOption" >
      <!-- slides -->
      <swiper-slide v-for="item in page" >
        <div class="box" v-for="icon in item" :key="icon.id">
          <div class="iconImg">
            <img :src="icon.imgUrl" alt="icon.title">
          </div>
          <p class="runout">{{icon.title}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  export  default {
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop:true,
        },
      }
    },
    props:["iconlist"],
    computed:{
      page(){
        var pages=[];
        this.iconlist.forEach(function(item,index){
          var idx=Math.floor(index/8);
          if(!pages[idx])pages[idx]=[];
          pages[idx].push(item)
        });
        return pages;
        // let pages=[];
        // for(let i=0;i<this.iconlist.length;i++){
        //   let idx=Math.floor(i/8);
        //   if(!pages[idx]){
        //     pages[idx]=[]
        //   }else{
        //     pages[idx].push(this.iconlist[i])
        //   }
        // }
        // return pages
      }
    }

  }
</script>
<style scoped>
  .icon .box{
    width: 25%;
    float: left;
    height: 0;
    padding-bottom: 0.8rem;
    background-color: #fff;
  }
  .icon .swiper-slide.swiper-slide-active {
    height: 1.9rem;
    background-color: #fff;
  }
  .icon .iconImg{
    width: 0.55rem;
    height: 0.55rem;
    margin: 0 auto;
  }
  .icon .iconImg img{
    width: 100%;
    height: 100%;
    display: block;
    padding-top: 5px;
  }
  .icon p{
    text-align: center;
    font-size: 0.14rem;
    margin-top:0.1rem;
  }
  .icon .swiper-pagination-bullets {
    bottom: 5px;
    left: 0;
    width: 100%;
  }
</style>
