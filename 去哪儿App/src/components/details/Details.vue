<template>
  <div class="city">
    <Banner></Banner>
    <Details-Tickets ></Details-Tickets>
    <Record></Record>
    <Reviews></Reviews>
    <Footer></Footer>
  </div>
</template>



<script>
  import  Banner from "./pages/Banner"
  import  DetailsTickets from "./pages/Tickets"
  import  Record from "./pages/Record"
  import  Reviews from "./pages/Reviews"
  import  Footer from "./pages/Footer"
  export  default {
    components: {
      Banner,
      DetailsTickets,
      Record,
      Reviews,
      Footer,
    },
  }
</script>



<style>
  .city{
    background-color: #f5f5f5;
  }

</style>
