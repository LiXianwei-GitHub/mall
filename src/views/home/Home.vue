<template>
  <div id="home">
    <nav-bar>
      <div slot="nav-bar-center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner" />
    <recommend-view :recommend="recommend" />
    <feature-view />
    <tab-control :titles="['流行','新款','详情']" />
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabcontrol/TabControl'

  import HomeSwiper from './children/HomeSwiper'
  import RecommendView from './children/RecommendView'
  import FeatureView from './children/FeatureView'

  import {
    getMultiData
  } from 'network/home'
  export default {
    name: 'Home',
    components: {
      NavBar,
      TabControl,
      HomeSwiper,
      RecommendView,
      FeatureView
    },
    data() {
      return {
        banner: [],
        recommend: [],
        err: null
      }
    },
    created() {
      getMultiData().then(value => {
        this.banner = value.banner.list
        this.recommend = value.recommend.list
        console.log(value);
      }).catch(reason => {
        console.log(reason);
        this.err = reason
      });
    }
  }
</script>

<style scoped>
  #home {
    padding: 44px 0 49px 0%;
  }

  .nav-bar {
    background: #fefefe;
  }
</style>