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
  props:["vacationList"],
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
