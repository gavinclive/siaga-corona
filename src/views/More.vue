<template>
  <div id="more" class="pages m-auto p-2 col-lg-8 col-md-10 col-12">
    <h1 class="text-center">
      Ayo cegah bersama penyebaran Covid-19
    </h1>
    <br>
    <p class="text-justify text-md-center">Covid-19 merupakan pandemi virus yang berbahaya dan dapat menyebar cepat. Kita harus bersatu untuk mengurangi penyebaran Covid-19 agar lebih banyak nyawa yang dapat terselamatkan.</p>
    <p class="text-justify text-md-center">Simak video berikut ini, untuk dapat memahami apa itu Covid-19 dan cara pencegahan penyebaran Covid-19.</p>

    <div v-if="height">
      <iframe class="rounded-lg" width="100%" :height="height" src="https://www.youtube.com/embed/BtN-goy9VOY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    height: 0
  }),
  mounted () {
    const width = document.getElementById('more').offsetWidth
    this.height = ( width * 9 / 16 ) - 16
  }
}
</script>
