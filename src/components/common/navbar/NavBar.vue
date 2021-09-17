<template>
  <div class="nav-bar">
    <div class="left"><slot name="nav-bar-left"></slot></div>
    <div class="center"><slot name="nav-bar-center"></slot></div>
    <div class="right"><slot name="nav-bar-right"></slot></div>
  </div>
</template>

<script>
export default {
  name:"NavBar"
}
</script>

<style scoped>
.nav-bar{
  text-align: center;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 44px;
  box-shadow: 0 1px 1px rgba(100, 100, 1000, .1);
  z-index: 1;
}
.left,.right{
  width: 66px;
}
.center{
  flex: 1;
}
</style>