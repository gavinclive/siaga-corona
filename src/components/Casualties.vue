<template>
  <div class="d-md-flex justify-content-center">
    <vs-button class="num-card text-left mx-md-2 mx-0 my-1" color="warning" type="gradient">
      <div>
        <h2 v-if="casualties && casualties.positif">
          {{ casualties.positif }}
        </h2>
        <span>Positif</span>
      </div>
      <div>
        <font-awesome-icon :icon="['fas', 'procedures']" size="4x" />
      </div>
    </vs-button>
    <vs-button class="num-card text-left mx-md-2 mx-0 my-1" color="success" type="gradient">
      <div>
        <h2 v-if="casualties && casualties.sembuh">
          {{ casualties.sembuh }}
        </h2>
        <span>Sembuh</span>
      </div>
      <div>
        <font-awesome-icon :icon="['fas', 'walking']" size="4x" />
      </div>
    </vs-button>
    <vs-button class="num-card text-left mx-md-2 mx-0 my-1" color="danger" type="gradient">
      <div>
        <h2 v-if="casualties && casualties.meninggal">
          {{ casualties.meninggal }}
        </h2>
        <span>Meninggal</span>
      </div>
      <div>
        <font-awesome-icon :icon="['fas', 'dizzy']" size="4x" />
      </div>
    </vs-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Casualties',

  props: {
    global: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    ...mapGetters({
      indoCasualties: 'casualties/indoCasualties',
      globalCasualties: 'casualties/globalCasualties'
    }),
    casualties () {
      return this.global ? this.globalCasualties : this.indoCasualties
    }
  }
}
</script>

<style>

</style>