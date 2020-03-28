<template>
  <div class="pages m-auto p-2 col-lg-8 col-md-10 col-12 d-flex justify-content-center flex-wrap">
    <div v-for="(article, index) in articles" :key="index" class="col-sm-12 col-md-6 mb-4">
      <vs-card fixedHeight actionable @click="goToArticle(article.url)">
        <div slot="header">
          <h3>
            {{ article.title }}
          </h3>
        </div>
        <div slot="media">
          <img :src="article.urlToImage" class="news-image">
        </div>
        <div>
          <p v-if="article.content" class="text-justify">
            {{ article.content.substring(0, article.content.indexOf(' [+')) }}
          </p>
        </div>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <vs-button type="gradient" color="primary" icon="local_library" @click="goToArticle(article.url)"></vs-button>
          </vs-row>
        </div>
      </vs-card>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'
export default {
  mounted() {
    store.dispatch('news/fetchNews')
  },

  computed: {
    ...mapGetters({
      articles: 'news/newsArticles'
    })
  },

  methods: {
    goToArticle (url) {
      window.location.href = url
    }
  }
}
</script>

<style>

</style>