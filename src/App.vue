<template>
  <div id="app" class="w-100">
    <Navbar />
    <router-view class="pages"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar
  },

  created () {
    document.title = 'Siaga Corona'
  }
}
</script>
