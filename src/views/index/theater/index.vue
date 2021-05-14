<template>
  <div class="theater">
    <ul>
      <li>全城<span></span></li>
      <li>品牌<span></span></li>
      <li>特色<span></span></li>
    </ul>
    <TheaterList/>
  </div>
</template>

<script>
// @ is an alias to /src
import TheaterList from '@/components/theater-list'

export default {
  name: 'Theater',
  components: {
    TheaterList
  }
}
</script>

<style lang="stylus" scoped>
.theater
  flex 1
  overflow hidden
  padding-bottom .44rem
  ul:first-child
    display flex 
    list-style none
    height .35rem
    border-top solid #d3d3d3 1px
    border-bottom solid #d3d3d3 1px
    li
      flex 1
      text-align center
      line-height .35rem
      position relative
      span
        border 4px solid transparent
        border-top-color #b0b0b0
        position absolute
        top 17px
        width 0
        height 0
        margin-left 2px
</style>