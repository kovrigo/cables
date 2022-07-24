<template>
  <div>
    <cable-widget :options="cableWidgetOptions"></cable-widget>
  </div>
</template>

<script>
import CableWidget from './cable-widget.vue';

export default {
  
  components: {
    CableWidget
  },

  data() {
    return {

    }
  }
}
</script>