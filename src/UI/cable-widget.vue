<template>
  <div class="cable-widget">
    <div class="viewer" ref="viewer">
      <!-- 3D canvas goes here -->
    </div>
    <div class="ui">
      <!-- Selects -->
      <div v-if="loaded">
        <div v-for="reference in selectedCable" :key="reference.label">          
          {{ reference.label }}
          <v-select  :options="reference.values" label="description"></v-select>
        </div>        
      </div>
    </div>
  </div>
</template>

<script>
import { CableViewer } from "../CableViewer";
import vSelect from "vue-select";
import 'vue-select/dist/vue-select.css';

export default {

  components: {
    vSelect
  },

  props: ['options'],

  data() {
    return {
      
      selectedCable: {},
      loaded: false,

    }
  },

  computed: {

  },

  watch: {

  },

  mounted() {
    var self = this;
    // Create and initialize cable viewer
    var cableViewer = new CableViewer(500);
    this.$refs["viewer"].appendChild(cableViewer.canvas);

    // Sort cable building steps by reference generator index
    var buildSteps = _.sortBy(this.options.cable, function (step) {
      return _.find(self.options.references, ['id', step.reference_id]).generator_index;
    });
    // Add json to each step
    buildSteps = _.flatten(_.map(buildSteps, function (step) {
      var referenceValues = _.find(self.options.references, ['id', step.reference_id]).values;
      return _.find(referenceValues, ['id', step.reference_value_id]).json; 
    }));

    // Generate and render cable
    var cableDescription = { buildSteps: buildSteps };    
    var cable = cableViewer.newCableFromJson(cableDescription);
    cableViewer.render(cable);

    // Generate selects with values
    var sortedReferences = _.sortBy(this.options.references, ['index']);
    this.selectedCable = _.map(sortedReferences, function (reference) {
      return {
        label: reference.id,
        value: null,
        values: reference.values,
      };
    });

console.log(this.selectedCable);

    this.loaded = true;
  }

}
</script>

<style lang="scss">
  $ui-bg-color: #28F0C5;

  .cable-widget {
    position: absolute;
    left: 10px;
    right: 10px;
    width: 1000px;

    .viewer {
      position: absolute;
      left: 0;
      top: 0;
      width: 500px;
    }

    .ui {
      position: absolute;
      right: 0;
      top: 0;      
      width: 500px;
      height: 500px;
      background-color: $ui-bg-color;
    }

  }

</style>