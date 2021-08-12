<template>
  <div>
      <Navbar ><div slot="center">医学虚拟仿真实验教学平台</div></Navbar>
      <Banner></Banner>
      <navList :navlist="navlist" @category="changeCategory"></navList>
      <div ></div>
  </div>
</template>

<script>
import  Navbar from '~/common/navbar/Navbar.vue'
import  Banner from '~/common/banner/Banner.vue'
import course_info from 'assets/js/home.js'

import navList from '~/common/navbar/Navlist.vue'
export default {

  components:{
    Navbar,Banner,navList

  },
    data(){
      return{
          navlist:["热门","推荐","精选"],
          msg:""
      }
    },
     created() {

        this.courseType()
     },
    methods:{
      async hotCourse(){
          let msg = await course_info.hot_course()
         this.msg = msg.data
      },
      async courseType(){
          let msg = await course_info.course_type()
          this.msg = msg.data


      },
        changeCategory(index){
            if (index===0){
                this.hotCourse()
            }else if (index===1){
                this.courseType()

            }
        }
    }



} 
</script>

<style >





</style>