<template>
  <div class="m-auto p-2 col-lg-8 col-md-10 col-12">
    <vs-tabs alignment="fixed">
      <vs-tab label="Indonesia">
        <div>
          <Casualties />
        </div>
      </vs-tab>
      <vs-tab label="Global">
        <div>
          <Casualties />
        </div>
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
import Casualties from '@/components/Casualties'

export default {
  name: 'Home',

  components: {
    Casualties
  }
}
</script>
