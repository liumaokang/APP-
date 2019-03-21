<template>
  <div class="hot">
    <h2>热门城市</h2>
    <ul>
      <li v-for="item in hotCities" :key="item.id"><a href="">{{item.name}}</a></li>
    </ul>
  </div>
</template>


<script>
  export  default {
    props:["hotCities"],

  }
</script>


<style>
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
  .hot ul li{
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
  .hot ul li:nth-child(3n){
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
</style>
