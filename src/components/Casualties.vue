<template>
  <div class="d-md-flex justify-content-center">
    <vs-button class="num-card text-left mx-md-2 mx-0 my-1" color="warning" type="gradient">
      <div>
        <h2>1059</h2>
        <span>Positif</span>
      </div>
      <div>
        <font-awesome-icon :icon="['fas', 'procedures']" size="4x" />
      </div>
    </vs-button>
    <vs-button class="num-card text-left mx-md-2 mx-0 my-1" color="success" type="gradient">
      <div>
        <h2>1059</h2>
        <span>Sembuh</span>
      </div>
      <div>
        <font-awesome-icon :icon="['fas', 'walking']" size="4x" />
      </div>
    </vs-button>
    <vs-button class="num-card text-left mx-md-2 mx-0 my-1" color="danger" type="gradient">
      <div>
        <h2>1059</h2>
        <span>Meninggal</span>
      </div>
      <div>
        <font-awesome-icon :icon="['fas', 'dizzy']" size="4x" />
      </div>
    </vs-button>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'Casualties',

  mounted () {
    store.dispatch('casualties/fetchIndoCasualties')
  }
}
</script>

<style>

</style>