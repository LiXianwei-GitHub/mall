<template>
  <swiper>
    <swiper-item v-for="(item,index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="item.title">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper'
import SwiperItem from 'components/common/swiper/SwiperItem'
export default {
  name:"HomeSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    banner:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.nav-bar{
  background: #fefefe;
}

</style>