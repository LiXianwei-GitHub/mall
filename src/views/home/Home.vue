<template>
  <div id="home">
    <nav-bar>
      <div slot="nav-bar-center">购物街</div>
    </nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @sorh="sorh" @loadmore="loadMore">
      <home-swiper :banner="banner" />
      <recommend-view :recommend="recommend" />
      <feature-view />
      <tab-control :titles="['流行','新款','详情']" @tabClick="tabClick" />
      <goods-list :goods-list="listShow" />
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop" />
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import TabControl from 'components/content/tabcontrol/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/backtop/BackTop'

  import HomeSwiper from './children/HomeSwiper'
  import RecommendView from './children/RecommendView'
  import FeatureView from './children/FeatureView'

  import {
    getMultiData,
    getHomeGoods
  } from 'network/home'


  export default {
    name: 'Home',
    components: {
      NavBar,
      Scroll,
      TabControl,
      GoodsList,
      BackTop,
      HomeSwiper,
      RecommendView,
      FeatureView
    },
    methods: {

      /*
       * debounce防抖函数
       */
      debounce(fn, delay) {
        let timer = null;
        return function (...args) {
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => {
            fn.apply(this, args)
          }, delay)
        }
      },

      /*
       * 事件
       */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = "pop";
            break;
          case 1:
            this.currentType = "new";
            break;
          case 2:
            this.currentType = "sell"
        }
      },
      backTop() {
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      sorh(position) {
        this.isShowBackTop = Math.abs(position.y) > 1000
      },
      loadMore() {
        this._getHomeGoods(this.currentType)
        this.$refs.scroll.finishPullUp()
      },

      /*
       * 网络请求相关
       */
      _getMultiData() {
        getMultiData().then(value => {
          this.banner = value.banner.list
          this.recommend = value.recommend.list
        }).catch(reason => {
          console.log(reason);
        });
      },
      _getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(value => {
          this.goods[type].list.push(...value.list);
          this.goods[type].page += 1;
        }).catch(reason => {
          console.log(reason);
        });
      }
    },
    computed: {
      listShow() {
        return this.goods[this.currentType].list
      }
    },
    data() {
      return {
        banner: [],
        recommend: [],
        goods: {
          pop: {
            page: 0,
            list: []
          },
          new: {
            page: 0,
            list: []
          },
          sell: {
            page: 0,
            list: []
          }
        },
        currentType: 'pop',
        isShowBackTop: false
      }
    },
    created() {
      this._getMultiData();

      this._getHomeGoods('pop');
      this._getHomeGoods('new');
      this._getHomeGoods('sell');


    },
    mounted() {
      const refresh = this.debounce(this.$refs.scroll.refresh, 500)
      this.$bus.$on('imgload', () => {
        refresh()
      })
    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }

  .nav-bar {
    background: #fefefe;
  }

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>