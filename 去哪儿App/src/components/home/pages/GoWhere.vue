<template >
  <div class="gowhere">
    <h2>周末去哪儿</h2>
    <ul class="gowhere_img">
      <li v-for="item in vacationList">
        <div><img :src="item.imgUrl" alt=""></div>
        <div class="gowhere_text">
          <p>{{item.title}}</p>
          <p class="runout">{{item.text}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  // props:["vacationList"],
  data(){
    return{
      vacationList:[
        {
          id:"01",
          imgUrl:"http://img1.qunarzz.com/sight/source/1812/4e/77bab696d56366.jpg_r_640x214_f86f2b40.jpg",
          title:"西安泡汤圣地",
          text:"解压之地，放松自己，来一段轻松的旅程。"
        },
        {
          id:"02",
          imgUrl:"http://img1.qunarzz.com/sight/source/1505/19/58f233e11df7ef.jpg_r_640x214_6b42c9fc.jpg",
          title:"西安泡汤圣地",
          text:"解压之地，放松自己，来一段轻松的旅程。"
        },
        {
          id:"03",
          imgUrl:"http://img1.qunarzz.com/sight/source/1812/4e/77bab696d56366.jpg_r_640x214_f86f2b40.jpg",
          title:"西安必打卡",
          text:"寻长安梦，开启穿越的圆梦之旅。"
        },
        {
          id:"04",
          imgUrl:"http://img1.qunarzz.com/sight/source/1811/63/808c022b285a2c.jpg_r_640x214_ad984479.jpg",
          title:"探寻文化古都",
          text:"一场时空穿越的旅行，探寻历史悠久的文化古都！寻觅历史留下的点点足迹，细细品味古人的伟大"
        },
        {
          id:"05",
          imgUrl:"http://img1.qunarzz.com/sight/source/1507/de/e6ba44d61894c0.jpg_r_640x214_847324d0.jpg",
          title:"西安演出在线",
          text:"这里有绚丽奇幻的神秘梦幻舞剧，歌舞揭开盛唐面纱，体验穿越时空的奇妙，感受大唐之盛世"
        },

      ]
    }
  }
}

</script>
<style>
  .gowhere h2{
    font-weight: normal;
    height: 0.4rem;
    padding-left:0.13rem;
    line-height: 0.4rem;
    color: #212121;
    font-size: 0.14rem;
  }
  .gowhere_img li>div:nth-child(1){
    width: 100%;
    height: 1.53rem;
  }
  .gowhere_img li img{
    width: 100%;
    height: 100%;
    display: block;
  }
  .gowhere_text{
    padding:0.07rem 0.1rem 0.1rem 0.1rem;
  }
  .gowhere_text p:nth-child(1){
    line-height: 0.24rem;
    font-size: 0.14rem;
    overflow: hidden;
    color: #212121 ;
    padding-right: 0.7rem;
  }
  .gowhere_text p:nth-child(2){
    color: #616161;
    font-size: 0.12rem;
  }
</style>
