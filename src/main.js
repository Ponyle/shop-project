import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'
// import {request} from "./utils/main"
//
// request({
//   url:"/virlab/json/course_type.jsp",
//
// },res=>{
//   console.log(res)
// },err=>{
//   console.log(err)
// })

//2
// request({
//   baseconfig:"/virlab/json/course_type.jsp",
//   success (res) {
//     console.log(res)
//   },
//   failure (res) {
//     console.log(res)
//   }
// })
//


//
// request({
//   url:"/virlab/json/course_type.jsp",
// }).then(res=>{
//   console.log(res)
// }).catch(err=>{
//   console.log(err)
// })

new Vue({
  render: h => h(App),router
}).$mount('#app')