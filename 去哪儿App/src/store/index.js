import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

// 缓存数据
let cache=localStorage.city?localStorage.city:"西安 ";
// 创建store实例
let state = {
  city:cache
};
// 将数据放到仓库
let mutations={
    changecity(state,cityname){
      this.state.city=cityname
      // console.log(this.state.city)
      localStorage.city=cityname;
    }
};
export default new Vuex.Store({
  state,//抛出state的内容
  mutations
})

