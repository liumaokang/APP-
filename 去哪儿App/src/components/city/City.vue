<template>
  <div class="city">
    <city-list :cities="cities" :hotCities="hotCities"></city-list>
    <div class="up" @click="UpGo">☝</div>
  </div>
</template>



<script>
  import  CityList from "./pages/List"
  export  default {
    data(){
      return{
        hotCities:[],
        cities:{}
      }
    },
    components: {
      CityList
    },
    methods:{
      UpGo() {
        document.documentElement.scrollTop -= 100;
        let c = '';
        if (document.documentElement.scrollTop > 0) {
          c = setTimeout(() => this.toTop(),12);
        }else{
          clearTimeout(c);
        }
      },
    },
    mounted(){
      this.$http.get("http://39.106.168.20/php/city.php").then((res)=>{
        this.data=res.data.data;
        this.hotCities=this.data.hotCities;
        this.cities=this.data.cities;
      });
    }
  }
</script>



<style>
  .city{
    background-color: #f5f5f5;
  }
  .container{
    position: absolute;
    left:0;
    right:0;
    bottom: 0;
    top:0;
  }
  .up {
    font-size: 0.5rem;
    position: fixed;
    bottom: 20px;
    right: 20px;
  }
</style>
