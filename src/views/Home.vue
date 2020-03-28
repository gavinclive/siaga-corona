<template>
  <div class="m-auto p-2 col-lg-8 col-md-10 col-12">
    <vs-tabs alignment="fixed">
      <vs-tab label="Indonesia">
        <div>
          <Casualties />
          <RegionData />
        </div>
      </vs-tab>
      <vs-tab label="Global">
        <div>
          <Casualties global />
          <RegionData global />
        </div>
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
import Casualties from '@/components/Casualties'
import RegionData from '@/components/RegionData'
import store from '@/store'

export default {
  name: 'Home',

  components: {
    Casualties,
    RegionData
  },

  mounted () {
    store.dispatch('casualties/fetchIndoCasualties')
    store.dispatch('casualties/fetchGlobalCasualties')
    store.dispatch('regionData/fetchIndoRegionData')
    store.dispatch('regionData/fetchGlobalRegionData')
  },

}
</script>
