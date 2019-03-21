<template>
  <div class="sort">
    <h2>字母排序</h2>
    <ul>
      <li v-for="(item,index) in cities" :key="item.id"><span>{{index}}</span></li>
    </ul>
  </div>
</template>



<script>
  export  default {
    props:["cities"],
  }
</script>



<style>
  .sort h2 {
    font-size: .12rem;
    padding: .12rem .15rem;
    color: #212121;
  }
  .sort ul{
    width: 100%;
    overflow: hidden;
  }
  .sort ul li{
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
</style>
