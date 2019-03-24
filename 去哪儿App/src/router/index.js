import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import City from '@/components/city/City'
import Details from '@/components/details/Details'
import DetailsImg from '@/components/details_img/DetailsImg'
import ImgList from '@/components/details_img/pages/ImgList'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/City',
      name: 'city',
      component: City
    },
    {
      path: '/Details',
      name: 'details',
      component: Details
    },
    {
      path: '/DetailsImg',
      name: 'details',
      component: DetailsImg
    },
    {
      path: '/ImgList',
      name: 'imgList',
      component: ImgList
    },
  ]
})
