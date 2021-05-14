<template>
  <div id="main">
    <IndexHeader/>
    <router-view/>
    <IndexNav/>
  </div>
</template>

<script>
import IndexHeader from '@/components/index-header'
import IndexNav from '@/components/index-nav'
export default {
    name: 'Index',
    components: {
      IndexHeader,
      IndexNav
    }
}
</script>

<style lang="stylus" scoped>
#main
  display flex
  flex-direction column
  height 100%
</style>
