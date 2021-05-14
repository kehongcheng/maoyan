<template>
  <div id="main">
    <div class="header">
      <div class="logo"><router-link to="/" class="triangle"></router-link></div>
      <div class="title">猫眼电影</div>
      <div class="nav"></div>
    </div>
    <div class="search-header">
      <div class="input-wrapper">
        <img class="img" alt="" src="https://s0.meituan.net/bs/myfe/canary/file/apollo/images/search.png">
        <input type="text" class="search-input" placeholder="搜电影、搜影院" value="" v-model="searchValue">
        <img v-if="searchValue" @click="delInput" class="del-input" src="//s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/close.png" alt="">
      </div>
        <div class="cancel"><router-link to="/">取消</router-link></div>
    </div>

    <div class="search-history" v-if="searchValue">
      <div class="history-item">搜索功能待完善...</div>
    </div>
    
</div>
  
</template>

<script>
export default {
    name: 'Search',
    components: {
    },
    data() {
      return {
        searchValue: '',
      }
    },
    methods: {
      delInput() {
        this.searchValue = ''
      }
    }
}
</script>

<style lang="stylus" scoped>
#main
  display flex
  flex-direction column
  height 100%
  background-color #f3f3f3

  .header
    background #cd4c42
    color #fff
    height .44rem
    font-size .16rem
    font-weight bold
    line-height .44rem
    display flex

    .logo
      width 1rem
      position relative

    .title
      flex 1
      text-align center
      text-overflow ellipsis
      overflow hidden
      white-space nowrap
    
    .nav
      width 1rem

  .search-header
    display flex
    border-bottom 1px #d3d3d3 solid
    padding .1rem 0 .1rem .1rem
    height .3rem

    .input-wrapper
      flex 1
      position relative
      border 1px #d3d3d3 solid
      border-radius .07rem
      background-color white
      overflow hidden

      .img
        position absolute
        width .16rem
        height .16rem
        top 50%
        margin-top -.08rem
        margin-left .05rem


      .search-input
        width 100%
        border-width 0px
        height .25rem
        margin-left .26rem
        color grey

      .del-input
        position absolute
        width .16rem
        height .16rem
        top 50%
        right .05rem
        margin-top -.08rem
        margin-left .05rem
    .cancel
      text-align center
      width .6rem
      line-height .3rem
      a
        color #cd4c42

  .search-history
    flex 1
    display flex
    flex-direction column
    align-items center
    justify-content center

.triangle
  position absolute
  width .13rem
  height .13rem
  top .16rem
  left .12rem
  transform rotate(45deg)
  border .02rem solid #fff
  border-width: 0 0 .02rem .02rem
</style>