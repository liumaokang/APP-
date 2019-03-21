<template>
  <div class="list">

      <div class="listarra" v-for="(item,index) in cities" :key="index">
        <h2>{{index}}</h2>
          <ul>
            <li v-for="item in item" :key="item.id"><span>{{item.name}}</span></li>
          </ul>
      </div>
  </div>
</template>



<script>
export  default {
  props:["cities"]
}
</script>



<style>
  .list h2 {
    font-size: .12rem;
    padding: .12rem .15rem;
    color: #212121;
  }
  .list ul {
    width: 100%;
    background-color: #fff;
    overflow: hidden;
  }
  .list ul li{
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
  .list ul li:nth-child(3n){
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
</style>
