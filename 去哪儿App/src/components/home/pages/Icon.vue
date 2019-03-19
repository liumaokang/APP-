<template>
  <div class="icon">
    <swiper :options="swiperOption" >
      <!-- slides -->
      <swiper-slide v-for="item in page" >
        <div class="box" v-for="icon in item" :key="icon.id">
          <div class="iconImg">
            <img :src="icon.imgUrl" alt="icon.title">
          </div>
          <p>{{icon.title}}</p>
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
        "iconlist":[
          {
            id:"01",
            "imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
            "title":"景点门票"
          },
          {
            id:"02",
            "imgUrl":"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
            "title":"一日游"
          },
          {
            id:"03",
            "imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png",
            "title":"世春赏花"
          },
          {
            id:"04",
            "imgUrl":"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/de711920c71e38287d9f95f7910aa1aa.png",
            "title":"精品小团"
          },
          {
            id:"05",
            "imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
            "title":"泡温泉"
          },
          {
            id:"06",
            "imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
            "title":"景点门票"
          },
          {
            id:"07",
            "imgUrl":"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
            "title":"一日游"
          },
          {
            id:"08",
            "imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png",
            "title":"世春赏花"
          },
          {
            id:"09",
            "imgUrl":"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/de711920c71e38287d9f95f7910aa1aa.png",
            "title":"精品小团"
          },
          {
            id:"010",
            "imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
            "title":"泡温泉"
          },
        ]
      }
    },
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
