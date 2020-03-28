<template>
  <div class="p-md-2 w-100 fixed-top bg-custom">
    <vs-navbar v-model="activeItem" type="shadow">
      <div slot="title">
        <vs-navbar-title>
          Siaga Corona
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="0">
        <router-link :to="{ name: 'Home' }">Beranda</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <router-link :to="{ name: 'News' }">Berita</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <router-link :to="{ name: 'More' }">Lebih Banyak</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="3">
        <router-link :to="{ name: 'About' }">Tentang</router-link>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',

  data: () => ({
    activeItem: 0
  }),
}
</script>

<style>

</style>