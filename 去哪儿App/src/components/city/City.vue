<template>
  <div class="city">
        <city-list :cities="cities" :hotCities="hotCities"></city-list>
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
    mounted(){
      this.$http.get("http://localhost:8080/static/mock/data/city.json").then((res)=>{
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

</style>
