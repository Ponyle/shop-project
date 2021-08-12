<template>
  <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    box-shadow:rgba(0, 0, 0, 0.2) 1px 1px 8px 1px;
}
.left{
   width: 60px;
}
.center{
    flex: 1;
    text-align: center;
}
.right{
    width: 60px;
}
</style>