<template>
  <ul>
      <li v-for="movie in this.movieList" :key="movie.id">
          <div><img :src="movie.img | toWH" alt=""></div>
          <div class="info ellipsis">
                <h1 class="ellipsis">{{ movie.nm }}</h1>
              
                <p class="ellipsis" v-if="movie.sc == 0">
                    <span class="mark">{{ movie.wish }}</span>人想看
                </p>
                <p class="ellipsis" v-else>
                    观众评 <span class="mark">{{ movie.sc }}</span>
                </p>
                <p class="ellipsis">主演：{{ movie.star }}</p>
                <div class="ellipsis">{{ movie.showInfo }}</div>
          </div>
          <div>
              <button class="pre-sale" v-if="movie.sc == 0" @click="notify">预售</button>
              <button class="sale" v-else @click="notify">购票</button>
          </div>
      </li>
  </ul>
</template>

<script>
// import { getList } from '@/api/movie-list'
export default {
    name: 'Movie_list',
    props: ['movieList'],
    methods: {
        notify: function () {
            this.$notify({
                message: '购票功能待完善...',
                color: '#FFF',
                background: '#3c9fe6',
                duration: 1000
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
li
    display flex
    height .95rem
    padding .1rem
    border-bottom solid 1px #f6f6f6
    .info
        padding-left .1rem
        font-size .14rem
        width 100%

        h1
            font-size .18rem
            font-weight bold
            margin-bottom .05rem
        .mark
            color orange
            font-weight bold

    div:nth-child(1)
        width .64rem
        height .9rem
        img
            width .64rem
            height .9rem

    div:nth-child(2)
        flex 1
    
    div:nth-child(3)
        display flex
        width .7rem
        align-items center 
        justify-content center
        button
            border-style none 
            border-radius .05rem
            height .3rem
            width .5rem
            color white
            outline 0

.sale
    background-color #f03d37

.pre-sale
    background-color #3c9fe6

.ellipsis
    text-overflow ellipsis
    overflow hidden
    white-space nowrap

</style>