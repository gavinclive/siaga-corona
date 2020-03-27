<template>
  <div class="p-md-2 w-100">
    <vs-navbar v-model="activeItem" type="shadow">
      <div slot="title">
        <vs-navbar-title>
          Siaga Corona
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="0">
        <a href="#">Home</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">News</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#">Update</a>
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