<template>
  <div class="recommend">
    <div v-for="(item,index) in recommend" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommend: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    padding: 15px 3px 20px 3px;
    font-size: 12px;
    text-align: center;
    border-bottom: 5px solid #eee;
  }

  .recommend-item {
    flex: 1;
  }

  .recommend-item img {
    width: 65px;
    height: 65px;
    margin-bottom: 3px;
  }
</style>