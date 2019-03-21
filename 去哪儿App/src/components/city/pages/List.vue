<template>
  <div class="container" ref="container">
    <div class="wraper">
      <!--header部分-->
      <div class="header">
        <div class="iconfont back">
          <router-link to="/"><span>&#xe642;</span></router-link>
          <h1>城市选择</h1>
        </div>
        <div class="back-bot">
          <ul>
            <li class="active">境内</li>
            <li>境外·港澳台</li>
          </ul>
        </div>
      </div>
      <!--Hot部分-->
      <div class="hot">
        <h2>热门城市</h2>
        <ul>
          <li @click="mainPage(item.name)" v-for="(item,key) in hotCities" :key="item.id">{{item.name}}</li>
        </ul>
      </div>
      <!--sort部分-->
      <div class="sort">
        <h2>字母排序</h2>
        <ul>
          <li v-for="(value,key) in cities" @click="LocationCity(key)" :key="value.id">{{key}}</li>
        </ul>
      </div>
      <!--list部分-->
      <div class="list">
        <div class="containers arralist" :ref="key" v-for="(value,key) in cities" :key="key">
          <h2 class="h2" id="item.index">{{key}}</h2>
          <ul>
            <li v-for="item in value" :key="item.id"><span>{{item.name}}</span></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="up"  @click="UpGo">☝</div>
  </div>
</template>


<script>
  //引入better-scroll滚动效果
  import BScroll from 'better-scroll'
  export default {
    props: ["cities","hotCities"],
    data(){
      return{
        scroll:'',
      }
    },
    mounted(){
      let container = this.$refs['container'];
      this.scroll = new BScroll(container)
    },
    methods:{
      LocationCity(key){
        console.log(this.$refs[key])
        this.scroll.scrollToElement(this.$refs[key][0],1000)
      },
      UpGo(){
        this.scroll.scrollToElement(0,0,500)
      },
      mainPage(name){
        console.log(name)
      }
    },
  }
</script>


<style lang="stylus" scoped>
  /*header部分*/
  @import '~css/var.styl'
  .container{
    position: absolute;
    left:0;
    right:0;
    bottom: 0;
    top:0rem;
    background-color :#f5f5f5;
  }
  .header{
    position :fixed;
    top 0;
    width 100%;
  }
  .header .back {
    height: .34rem;
    line-height: .34rem;
    border-bottom: 0;
    padding-bottom 0.1rem;
    position: relative;
    background-color: $bgcolor;
  }

  .header .back span {
    font-size: 0.18rem;
    width: .4rem;
    height: .44rem;
    position: absolute;
    top: 0;
    left: 0;
    text-align center;
    line-height 0.44rem;
    color: #fff;
  }

  .header .back h1 {
    overflow: hidden;
    margin: 0 0.5rem;
    line-height: .44rem;
    height 0.44rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .16rem;
    text-align: center;
    color: #fff;
  }

  .back-bot {
    height: .3rem;
    line-height: .4rem;
    background-color: $bgcolor;
    color: #fff;
    padding: 0 0.5rem;
  }

  .back-bot ul {
    border: 1px solid #fff;
    border-radius: .03rem;
    zoom: 1;
    overflow: hidden;
  }

  .back-bot li {
    width: 50%;
    line-height: 0.2rem;
    float: left;
    text-align: center;
    background-color: $bgcolor;
    font-size: .14rem;
    color: #fff;
  }

  .back-bot li:nth-child(1) {
    background-color #fff;
    color: #00bcd4
  }

  //hot部分
  .hot{
    padding-top:0.74rem;
    width :100%
  }
  .hot h2 {
    font-size: .12rem;
    padding: .12rem .15rem;
    color: #212121;
  }
  .hot ul {
    width: 100%;
    background-color: #fff;
    overflow: hidden;
  }

  .hot ul li {
    box-sizing: border-box;
    width: 33.3%;
    height: .45rem;
    line-height: .45rem;
    font-size: .14rem;
    text-align: center;
    border-bottom: .01rem solid #ddd;
    border-right: .01rem solid #ddd;
    margin-bottom: -0.5px;
    float: left;
    position: relative;
    z-index: 10;
    color: #212121;
  }

  .hot ul li:nth-child(3n) {
    border-right: none;
  }

  .hot ul li a {
    color: #212121;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .14rem;
  }

  //sort部分
  .sort h2 {
    font-size: .12rem;
    padding: .12rem .15rem;
    color: #212121;
  }

  .sort ul {
    width: 100%;
    overflow: hidden;
    background-color #fff;
  }

  .sort ul li {
    width: 16.66666%;
    height: .45rem;
    line-height: .45rem;
    font-size: .14rem;
    text-align: center;
    float: left;
    position: relative;
    z-index: 10;
    color: #212121;
  }

  /*list部分*/
  .list h2 {
    font-size: .12rem;
    padding: .12rem .15rem;
    color: #212121;
    background-color :#f5f5f5;
  }
  .list ul {
    width: 100%;
    overflow: hidden;
    background-color :#fff;
  }
  .list .listarra ul{
    background-color #fff;
  }
  .list .listarra{
    position relative
  }
  .list ul li {
    box-sizing: border-box;
    width: 33.3%;
    height: .45rem;
    line-height: .45rem;
    font-size: .14rem;
    text-align: center;
    border-bottom: .01rem solid #ddd;
    border-right: .01rem solid #ddd;
    margin-bottom: -0.5px;
    float: left;
    position: relative;
    z-index: 10;
    color: #212121;
  }

  .list ul li:nth-child(3n) {
    border-right: none;
  }
  .list ul li a {
    color: #212121;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .14rem;
  }
  .up{
    font-size :0.5rem;
    position :fixed;
    bottom :20px;
    right :20px;
  }
</style>
