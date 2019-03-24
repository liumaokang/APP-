<template>
  <div>
    <div class="detailsimg">
      <div class="pho">
        <router-link to="/details"><span class="iconfont">&#xe642;</span></router-link> 景区图片
      </div>
      <div class="phoList">
        <ul>
          <router-link to="/ImgList">
            <li v-for="(item,index) in imglist"  :key="item.id"><img :src="item.imgUrl" alt=""></li>
          </router-link>
        </ul>
      </div>
    </div>

  </div>

</template>
<script>
  import ImgList from './pages/ImgList'
  export default {
    components:{
      ImgList
    },
    data(){
      return{
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
    }
  }
</script>
<style>
  .detailsimg .pho{
   text-align: center;
    line-height: 0.44rem;
    font-size: .16rem;
    color: #333;
    background-color: #fff;
    border-bottom: 1px solid #e0e0e0;
    width: 100%;
    position: relative;
  }
  .detailsimg .pho span{
    position: absolute;
    left: .1rem;
  }
  .detailsimg .phoList ul{
    overflow: hidden;
    padding: .09rem .1rem .2rem .1rem;
    box-sizing: border-box;
  }
  .detailsimg .phoList li{
    width:1.75rem;
    height: 1.2rem;
    float: left;
    margin-right: .05rem;
    box-sizing: border-box;
    margin-bottom: .05rem;
  }
  .detailsimg .phoList li:nth-child(2n){
    margin-right: 0;
  }
  .detailsimg .phoList li img{
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
