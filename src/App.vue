<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
.active
  color #cd4c42
#app
  display flex
  flex-direction column
  height 100%

  .header
    background #cd4c42
    color #fff
    height .44rem
    font-size .16rem
    font-weight bold
    text-align center
    line-height .44rem
  
  .nav
    height .44rem
    font-size .14rem
    border-top solid 1px grey
    display flex
    a
      flex 1
      display flex
      flex-direction column
      span
        flex 1
        display flex
        align-self: center
        svg
          flex 1
          align-self: flex-end
</style>
