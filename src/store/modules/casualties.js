import axios from 'axios'
import {
  FETCH_INDO_CASUALTIES,
  FETCH_GLOBAL_CASUALTIES
} from '../mutation-types'
import { KAWAL_CORONA_API } from '@/constants/api'

export const state = {
  indoCasualties: null,
  globalCasualties: null
}

export const getters = {
  indoCasualties: state => state.indoCasualties,
  globalCasualties: state => state.globalCasualties
}

export const mutations = {
  [FETCH_INDO_CASUALTIES] (state, { data }) {
    state.indoCasualties = data[0]
  },
  [FETCH_GLOBAL_CASUALTIES] (state, data) {
    state.globalCasualties = data
  }
}

export const actions = {
  async fetchIndoCasualties ({ commit }) {
    try {
      const data = await axios.get(KAWAL_CORONA_API + 'indonesia/')
      commit(FETCH_INDO_CASUALTIES, data)
    } catch (e) {
      console.log(e)
    }
  },
  async fetchGlobalCasualties ({ commit }) {
    try {
      const [positif, sembuh, meninggal] = await Promise.all([
        await axios.get(KAWAL_CORONA_API + 'positif/'),
        await axios.get(KAWAL_CORONA_API + 'sembuh/'),
        await axios.get(KAWAL_CORONA_API + 'meninggal/')
      ])
      commit(FETCH_GLOBAL_CASUALTIES, {
        positif: positif.data.value,
        sembuh: sembuh.data.value,
        meninggal: meninggal.data.value
      })
    } catch (e) {
      console.log(e)
    }
  }
}