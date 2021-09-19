<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'Scroll',
    methods: {
      scrollTo(x, y, time) {
        this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      },
      refresh() {
        this.scroll.refresh()
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        click: true,

      });
      this.scroll.on('scroll', position => {
        this.$emit('sorh', position)
      });
      this.scroll.on('pullingUp', () => {
        this.$emit('loadmore')
      })
    }
  }
</script>

<style>

</style>