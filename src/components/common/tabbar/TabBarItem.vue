<template>
  <div class="tab-bar-item" @click="itemActive">
    <slot name="item-icon" v-if="!isActive"></slot>
    <slot name="item-icon-active" v-else></slot>
    <p :style="activeColor">
      <slot name="item-text"></slot>
    </p>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      active: {
        type: String,
        default: "red"
      }
    },
    data() {
      return {}
    },
    computed: {
      isActive() {
        return this.$route.path == this.path
      },
      activeColor() {
        return this.isActive ? {
          color: this.active
        } : {}
      }
    },
    methods: {
      itemActive() {
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    padding: 3px 0;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
</style>