<template>
  <div class="goods-list-item">
    <a :href="goodsItem.link">
      <img :src="goodsItem.show.img" alt="" @load="imgload">
      <div class="goods-item-title">
        <p>{{goodsItem.title}}</p>
        <div class="goods-item-info">
          <span class="price">{{goodsItem.price}}</span>
          <span class="collection">{{goodsItem.cfav}}</span>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods: {
      imgload() {
        this.$bus.$emit('imgload')
      }
    }

  }
</script>

<style spoced>
  .goods-list-item {
    font-size: 14px;
    width: 46%;
    line-height: 1.5em;
    padding-bottom: 70px;
    position: relative;
    margin-bottom: 10px;
  }

  .goods-list-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-list-item p {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 5px;
  }

  .goods-list-item .price {
    color: var(--color-high-text);
  }

  .goods-list-item .price::before {
    content: "￥";
  }

  .goods-item-title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .goods-item-info {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }

  .goods-item-info .collection::after {
    content: "已购买";
    display: inline-block;
  }

  .collection {
    color: #aaa;
  }
</style>