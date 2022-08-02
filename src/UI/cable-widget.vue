<template>
  <div class="cable-widget">
    <div class="viewer" ref="viewer">
      <!-- 3D canvas goes here -->
    </div>
    <!-- Progress Bar -->
    <div class="progressloaderBox" v-if="isLoaderVisible" >
      <div class="spinner"></div>   
    </div>
    <div class="ui">
      <!-- Selects -->
      <div class="ui-box" v-if="loaded">
        <div class="ui-select" v-for="reference in selects" :key="reference.label">          
          <span>{{ reference.id + ": " + "[" + reference.value.id + "]" }}</span>
          <v-select 
          :options="filterOptions(reference)"
          :clearable="false"
          :searchable="true"
          :selectable="option => true "
          label="description"
          v-model="reference.value"
          @option:selected="onSelected"
          >
            <template #no-options="{ search, searching, loading }">Ничего не найдено</template>
          </v-select>
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
      selects: null,
      cable: null,
      loaded: false,
      isLoaderVisible: false,
    }
  },

  computed: {

  },

  watch: {
    selects: {
      handler: function (value) {
        this.cable = _.map(value, function (reference) {
          return {
            reference_id: reference.id,
            reference_value_id: reference.value.id,
          };
        });
        this.renderCable();
      },
      deep: true,
    },

  },

  mounted() {
    var self = this;
    // Create and initialize cable viewer
    window.cableViewer = new CableViewer(500, function (progress) {
      self.isLoaderVisible = true;
    });

    this.$refs["viewer"].appendChild(window.cableViewer.canvas);
    
    // Generate selects with values
    var sortedReferences = _.sortBy(this.options.references, ['index']);
    this.selects = _.map(sortedReferences, function (reference) {
      var referenceValueId = _.find(self.options.cable, ['reference_id', reference.id]).reference_value_id;
      var referenceValue = _.find(reference.values, ['id', referenceValueId]);
      return {
        id: reference.id,
        value: referenceValue,
        values: reference.values,
      };
    });
    this.loaded = true;
  },

  methods: {

    filterOptions(reference) {
      var self = this;
      var filtered = _.find(this.options.references, ['id', reference.id]).values;
      // Цикл по исключениям
      _.forEach(this.options.exceptions, function (exception) {
        // Цикл по исключаемым индексам
        _.forEach(exception.exclude, function (exclude) {
          // Если исключается текущий справочник
          if (exclude.reference_id == reference.id) {
            // Проверить исключаемый индекс на истинность
            var excludeReferenceCurrentValue = _.find(self.selects, ['id', exception.reference_id]).value;
            if (excludeReferenceCurrentValue.id == exception.reference_value_id) {
              // Отфильтровать исключаемые индексы
              filtered = _.filter(filtered, function (value) {
                return value.id != exclude.reference_value_id;
              });
            }
          }
        });
      });
      return filtered;
    },

    fixExcludedSelects() {
      var res = false;
      var self = this;
      // Цикл по селектам
      _.forEach(this.selects, function (reference) {
        var selectedValueFromOptions = _.find(self.filterOptions(reference), ['id', reference.value.id]);
        // Если выбранного значения нет в отфильтрованном списке значений
        if (!selectedValueFromOptions) {
          // Выбрать первое доступное значение
          res = true;
          reference.value = self.filterOptions(reference)[0];
        }
      });
      return res;
    },

    renderCable() {
      var needsFiltering = this.fixExcludedSelects();
      if (needsFiltering) {
        return;
      }
      var self = this;
      // Sort cable building steps by reference generator index
      var buildSteps = _.sortBy(this.cable, function (step) {
        return _.find(self.options.references, ['id', step.reference_id]).generator_index;
      });
      // Add json to each step
      buildSteps = _.flatten(_.map(buildSteps, function (step) {
        var referenceValues = _.find(self.options.references, ['id', step.reference_id]).values;
        return _.find(referenceValues, ['id', step.reference_value_id]).json; 
      }));    
      // Generate and render cable
      this.isLoaderVisible = true; // Loader start
      var cableDescription = { buildSteps: buildSteps };
      setTimeout(() => {
        var cable = window.cableViewer.newCableFromJson(cableDescription);
        window.cableViewer.render(cable);
        this.isLoaderVisible = false; // Loader stop
      }, 1);
    },

    onSelected: function(reference, option) {
      //var x = this.selects;
      //console.log(this.selects);
    },
  },

}
</script>

<style lang="scss">
  $ui-bg-color: #28F0C5;
  $ui-main-color: #019F8C;
  $ui-sec-color: #F7F7F7;

  .cable-widget {
    display: flex;
    left: 10px;
    right: 10px;
    width: 850px;
    height: auto;
    border: 1px solid rgb(63, 63, 63);
    border-radius: 0px;
    box-shadow: 5px 5px 5px rgba(61, 61, 61, 0.438);
    z-index: 1;
    overflow: hidden;

    .ui, 
    .vs__dropdown-menu {
      &::-webkit-scrollbar {width: 5px;}
      &::-webkit-scrollbar-thumb {background: $ui-main-color;border-radius: 25px;}
      &::-webkit-scrollbar-track {background-color: $ui-sec-color;border-radius: 25px;}
    }
    .viewer {
      position: relative;
      top: 0;
      border-radius: 20px;
      width: 500px;
    }

    .ui {
      position: relative;
      top: 0;      
      width: 350px;
      overflow: auto;
      height: 500px;
      //background-color: $ui-bg-color;
    }

    .ui-box {
      position: flex;
      margin: auto; // Center align
      width: 90%;
      margin-top: 15px;
      margin-bottom: 15px;
    }

    .ui-select {
      position: flex;
    }

    .vs__dropdown-toggle, 
    .vs__dropdown-menu,
    .vs__dropdown-option {
      background: $ui-sec-color;
    }
    
    .vs__dropdown-toggle {
      margin: 0.3em 0 1.3em 0;
      height: auto;
      text-overflow: ellipsis;
      border-radius: 2px;
      border-color: transparent;
    }

    .vs__dropdown-menu { 
      white-space: pre-wrap;
      border: none;
    }

    .vs__actions {
      padding-right: 15px;
    }

    .vs__dropdown-option {
      white-space: pre-wrap; 
      border-top: 1px solid #e0e0e0;
    }

    .vs__dropdown-option--selected {
      background: #e9e9e9;
    }
    .vs__dropdown-option--highlight {
      background: $ui-main-color;
    }
    
    .progressloaderBox {
      position: absolute;
      top: 10;
      left: 10;
      width: 500px;
      height: 500px;
      z-index: 100;
      background-color: rgba(0, 0, 0, 0.274);
    }

    .spinner{
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 80px;
      height: 80px;
      border: 4px solid $ui-sec-color;;
      border-top: 4px solid $ui-main-color;
      border-radius: 100%;
      animation: spin 1s infinite linear;
    }

    @keyframes spin {
      from{transform: rotate(0deg);}
      to{transform: rotate(360deg);}
    }

  }

</style>