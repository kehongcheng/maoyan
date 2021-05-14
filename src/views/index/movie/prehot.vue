<template>
  <div class="main">
    <div class="most-praised">
      <span class="title">最受好评电影</span>
      <ul>
        <li v-for="movie in this.MostExpectedList" :key="movie.id">
          <div>
            <span class="wish-bg">{{ movie.wish }} 人想看</span>
            <img :src="movie.img | toWH">
          </div>
          <div class="movie-name ellipsis">{{ movie.nm }}</div>
          <div class="movie-date ellipsis">{{ movie.comingTitle }}</div>
        </li>
      </ul>
    </div>
    <MovieList :movieList="this.comingList"/>
  </div>
</template>

<script>
import MovieList from '@/components/movie-list'
import store from '@/store'
export default {
  name: 'hot',
  components: {MovieList},

  data() {
    return {
        comingList: [],
        MostExpectedList: [],
    }
  },

  async mounted() {
    this.comingList = store.getters.comingList
    this.MostExpectedList = store.getters.MostExpectedList
  }
}
</script>

<style lang='stylus' scoped>
.main
  overflow auto

.main::-webkit-scrollbar
  display: none

.title
  font-size .14rem

.wish-bg
  display inline-block
  overflow hidden
  white-space nowrap
  background-color rgba(0,0,0,0.5)
  width 100%
  height .2rem
  text-align center 
  line-height .2rem
  position absolute
  bottom 0
  font-size .12rem
  color orange
  font-weight bold

.most-praised
  padding .1rem
  border-bottom solid 5px #f3f3f3
  ul::-webkit-scrollbar
    display: none
  ul
    height 1.6rem
    padding .05rem
    display flex
    overflow-x: auto
    li
      list-style none
      margin-right .1rem
      div:first-child
        position relative
      img
        width .9rem
        height 1.2rem
        background red
      div
        text-align center

.movie-name
  width .9rem
  font-size .14rem
  font-weight bold
  
.movie-date
  width .9rem
  font-size .12rem
  text-align left

.ellipsis
  text-overflow ellipsis
  overflow hidden
  white-space nowrap
</style>