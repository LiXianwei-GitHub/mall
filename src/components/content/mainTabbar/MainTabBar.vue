<template>
    <tab-bar>
      <tab-bar-item path="/home" active="red">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="首页">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="首页">
        <p slot="item-text">首页</p>
      </tab-bar-item>
      <tab-bar-item path="/category" active="red">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="分类">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="分类">
        <p slot="item-text">分类</p>
      </tab-bar-item>
      <tab-bar-item path="/cart" active="red">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="购物车">
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="购物车">
        <p slot="item-text">购物车</p>
      </tab-bar-item>
      <tab-bar-item path="/profile" active="red">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="我的">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="我的">
        <p slot="item-text">我的</p>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar"
import TabBarItem from "components/common/tabbar/TabBarItem"
export default {
  name:"MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
}
</script>

<style>

</style>