<template>
  <div class="tab-control">
    <div class="tab-control-item" :class="{ active: currentIndex == index }" v-for="(item, index) in titles"
      :key="index" @click="itemClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default () {
          return [];
        },
      },
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('tabClick', index)
      },
    },
    data() {
      return {
        currentIndex: 0
      }
    }
  };
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 14px;
    position: sticky;
    top: 43px;
    line-height: 40px;
    background: #fff;
    z-index: 1;
  }

  .tab-control-item {
    flex: 1;
  }

  .active {
    color: var(--color-high-text);
  }

  .active span {
    padding: 5px;
    border-bottom: 3px solid var(--color-tint);
  }
</style>