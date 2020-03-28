import axios from 'axios'
import {
  FETCH_INDO_REGION_DATA,
  FETCH_GLOBAL_REGION_DATA
} from '../mutation-types'
import { KAWAL_CORONA_API } from '@/constants/api'

export const state = {
  indoRegionData: [],
  globalRegionData: []
}

export const getters = {
  indoRegionData: state => state.indoRegionData,
  globalRegionData: state => state.globalRegionData
}

export const mutations = {
  [FETCH_INDO_REGION_DATA] (state, data) {
    data.data.forEach(region => {
      state.indoRegionData.push(region.attributes)
    })
  },
  [FETCH_GLOBAL_REGION_DATA] (state, data) {
    data.data.forEach(region => {
      state.globalRegionData.push(region.attributes)
    })
  }
}

export const actions = {
  async fetchIndoRegionData ({ commit }) {
    try {
      const data = await axios.get(KAWAL_CORONA_API + 'indonesia/provinsi/')
      commit(FETCH_INDO_REGION_DATA, data)
    } catch (e) {
      console.log(e)
    }
  },
  async fetchGlobalRegionData ({ commit }) {
    try {
      const data = await axios.get(KAWAL_CORONA_API)
      commit(FETCH_GLOBAL_REGION_DATA, data)
    } catch (e) {
      console.log(e)
    }
  }
}