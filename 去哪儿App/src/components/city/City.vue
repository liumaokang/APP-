<template>
  <div class="city">
    <city-header></city-header>
    <city-hot :hotCities="hotCities"></city-hot>
    <city-sort :cities="cities"></city-sort>
    <city-list :cities="cities"></city-list>
  </div>
</template>



<script>
  import  CityHeader from "./pages/Header"
  import  CityHot from "./pages/Hot"
  import  CitySort from "./pages/Sort"
  import  CityList from "./pages/List"
  export  default {
    data(){
      return{
        hotCities:[],
        cities:[]
      }
    },
    components: {
      CityHeader,
      CityHot,
      CitySort,
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
</style>
