<template>
  <div class="goods-list">
    <goods-list-item v-for="(item,index) in goodsList" :key="index" :goods-item="item" />
  </div>
</template>
<script>
  import GoodsListItem from './GoodsListItem.vue'
  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goodsList: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>

<style spoced>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 3px;
  }
</style>