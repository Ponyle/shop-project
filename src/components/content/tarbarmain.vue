<template>
  <div>
        <tarbar>
      <tarbaritem color="pink" path="/home">
          <img slot="icon"  src="~assets/img/msg/msg.svg" alt="">
           <img slot="active_text"  src="~assets/img/msg/msg_active.svg" alt="">
            <div slot="text">首页</div>
      </tarbaritem>
      <tarbaritem path="/num">
     <img slot="icon" src="~assets/img/num/num.svg" alt="">
       <img   slot="active_text" src="~assets/img/num/num_active.svg" alt="">
        <div slot="text">通讯录</div>
      </tarbaritem>
      <tarbaritem path="pyq">
        <img  slot="icon" src="~assets/img/pyq/pyq.svg" alt="">
      <img slot="active_text"  src="~assets/img/pyq/pyq_active.svg" alt="">
        <div slot="text">朋友圈</div>
      </tarbaritem>
      <tarbaritem path="myinfo">
        <img  slot="icon" src="~assets/img/my/my.svg" alt="">
        <img slot="active_text" src="~assets/img/my/my_active.svg" alt="">
        <div slot="text" >我的</div>
      </tarbaritem>
    </tarbar>
  </div>
</template>

<script>
import tarbar from '~/common/tarbar.vue'
import tarbaritem from '~/common/tarbaritem.vue'

export default {
    components:{
        tarbar,tarbaritem
    }
}
</script>

<style>

</style>