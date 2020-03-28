import axios from 'axios'
import {
  FETCH_NEWS
} from '../mutation-types'

export const state = {
  newsArticles: null
}

export const getters = {
  newsArticles: state => state.newsArticles
}

export const mutations = {
  [FETCH_NEWS] (state, data) {
    state.newsArticles = data.articles
  }
}

export const actions = {
  async fetchNews ({ commit }) {
    try {
      const result = await axios.get(`https://newsapi.org/v2/top-headlines?country=id&q=${'Covid'}&apiKey=0d3267f86d9b4a589d23957502fb7aaf`)
      commit(FETCH_NEWS, result.data)
    } catch (e) {
      console.log(e)
    }
  }
}