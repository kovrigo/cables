<template>
  <div class="cable-widget" :class="{cableWidgetEasyMode: isFullMode === false}">
    <div class="thumbs" v-if="isFullMode">

      <div class="thumbnail" :class="{activeThumbnail: activeThumb === 2}" @click="thumbImg">
        <div class="progressloaderBox" v-if="isImgLoaderVisible" >
          <div class="spinner-small"></div>
        </div>
        <div class="thumbs-up-icon">
          <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.5" d="M.75 2.25h16.5v13.5H.75V2.25Zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm12.75 4.5-3.75-4.5L9 12 6.75 9.75l-6 6"/></svg>
        </div>
        <img id="thumbImg" :src=thumbUrl>   
      </div>
     
      <div class="thumbnail" :class="{activeThumbnail: activeThumb === 1}" @click="thumbCanvas">
        <div class="progressloaderBox" v-if="isLoaderVisible" >
          <div class="spinner-small"></div>   
        </div>
        <div class="thumbs-up-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" style="enable-background:new 0 0 392.663 392.663" xml:space="preserve" width="22" height="22"><path d="m13.42 13.996-1.235-.812a6.359 6.359 0 0 0-.169-.406l.297-1.449a.606.606 0 0 0-.163-.553l-.916-.916a.594.594 0 0 0-.553-.163l-1.449.297a6.359 6.359 0 0 0-.406-.169L8.011 8.59a.605.605 0 0 0-.51-.275H6.205a.619.619 0 0 0-.51.275L4.88 9.825a7.06 7.06 0 0 0-.406.169l-1.449-.297a.619.619 0 0 0-.553.163l-.916.916a.594.594 0 0 0-.163.553l.297 1.449a4.54 4.54 0 0 0-.169.406l-1.241.812a.608.608 0 0 0-.279.512v1.294c0 .202.106.398.278.51l1.235.812c.051.134.109.272.169.406l-.297 1.449a.606.606 0 0 0 .163.553l.916.916a.593.593 0 0 0 .553.163l1.449-.297c.134.062.272.12.406.169l.815 1.235a.608.608 0 0 0 .51.278h1.294a.614.614 0 0 0 .51-.278l.815-1.235a7.76 7.76 0 0 0 .406-.169l1.449.297a.619.619 0 0 0 .553-.163l.916-.916a.594.594 0 0 0 .163-.553l-.297-1.449c.065-.134.12-.272.169-.406l1.235-.815a.605.605 0 0 0 .275-.51v-1.294a.58.58 0 0 0-.271-.507zm-.938 1.477h-.003l-1.131.746a.646.646 0 0 0-.246.319 4.255 4.255 0 0 1-.267.638.586.586 0 0 0-.051.398l.275 1.33-.449.449-1.33-.275a.672.672 0 0 0-.403.051 4.403 4.403 0 0 1-.638.267.602.602 0 0 0-.319.246l-.746 1.131h-.638l-.746-1.131a.646.646 0 0 0-.319-.246 4.139 4.139 0 0 1-.638-.267.595.595 0 0 0-.403-.051l-1.33.275-.452-.452.278-1.33a.669.669 0 0 0-.051-.403 4.055 4.055 0 0 1-.264-.638.602.602 0 0 0-.246-.319l-1.131-.746v-.638l1.131-.746a.646.646 0 0 0 .246-.319c.068-.213.158-.425.267-.638a.586.586 0 0 0 .051-.398l-.275-1.327.449-.449 1.33.275a.668.668 0 0 0 .403-.051c.213-.109.425-.199.638-.267a.602.602 0 0 0 .319-.246l.746-1.131h.638l.746 1.131a.646.646 0 0 0 .319.246c.213.068.428.158.638.267a.594.594 0 0 0 .403.051l1.33-.275.449.449-.275 1.33a.657.657 0 0 0 .051.398c.109.213.199.428.264.638a.586.586 0 0 0 .246.319l1.134.746v.641z"/><path d="M6.853 12.421a2.732 2.732 0 0 0-2.73 2.73c0 1.507 1.224 2.73 2.73 2.73s2.73-1.224 2.73-2.73-1.223-2.73-2.73-2.73zm0 4.242a1.516 1.516 0 0 1-1.51-1.51c0-.834.681-1.51 1.51-1.51s1.51.681 1.51 1.51a1.516 1.516 0 0 1-1.51 1.51zM21.722 4.454l-.924-.605a2.116 2.116 0 0 0-.106-.243l.224-1.082a.606.606 0 0 0-.163-.553l-.71-.712a.594.594 0 0 0-.553-.163l-1.087.213c-.084-.036-.163-.068-.243-.106l-.605-.922a.608.608 0 0 0-.51-.278h-1.011a.614.614 0 0 0-.51.278l-.605.924a2.116 2.116 0 0 0-.243.106l-1.082-.224a.609.609 0 0 0-.553.163l-.711.711a.594.594 0 0 0-.163.553l.224 1.082c-.036.084-.068.163-.106.243l-.924.605a.605.605 0 0 0-.275.51v1.011a.62.62 0 0 0 .275.51l.924.605c.03.084.065.163.106.243l-.224 1.082a.606.606 0 0 0 .163.553l.711.714a.593.593 0 0 0 .553.163l1.082-.224c.084.036.163.068.243.106l.605.924a.605.605 0 0 0 .51.275h1.011a.619.619 0 0 0 .51-.275l.605-.924a2.28 2.28 0 0 0 .246-.106l1.082.224a.616.616 0 0 0 .553-.163l.711-.714a.596.596 0 0 0 .163-.553l-.224-1.082.106-.246.924-.605A.608.608 0 0 0 22 5.961V4.95a.624.624 0 0 0-.278-.496zm-.935 1.185h-.011v.003l-.818.537a.646.646 0 0 0-.246.319 3.044 3.044 0 0 1-.199.474.574.574 0 0 0-.051.403l.199.959-.246.246-.959-.199a.672.672 0 0 0-.403.051 3.044 3.044 0 0 1-.474.199.586.586 0 0 0-.319.246l-.54.823h-.348l-.537-.818a.646.646 0 0 0-.319-.246 3.044 3.044 0 0 1-.474-.199.574.574 0 0 0-.403-.051l-.959.199-.246-.246.199-.959a.657.657 0 0 0-.051-.398 3.167 3.167 0 0 1-.199-.474.602.602 0 0 0-.246-.319l-.823-.547v-.349l.818-.537a.646.646 0 0 0 .246-.319 3.044 3.044 0 0 1 .199-.474.574.574 0 0 0 .051-.403l-.199-.959.246-.246.959.199a.65.65 0 0 0 .398-.051 3.044 3.044 0 0 1 .474-.199.602.602 0 0 0 .319-.246l.537-.818h.348l.537.818a.646.646 0 0 0 .319.246c.155.051.316.117.474.199a.562.562 0 0 0 .398.051l.959-.199.246.246-.18.959a.62.62 0 0 0 .057.403c.084.155.15.316.199.474a.586.586 0 0 0 .246.319l.818.537v.345z"/><path d="M16.537 3.208a2.263 2.263 0 0 0-2.259 2.259 2.262 2.262 0 0 0 2.259 2.259 2.263 2.263 0 0 0 2.259-2.259 2.263 2.263 0 0 0-2.259-2.259zm0 3.3a1.043 1.043 0 0 1-1.041-1.041c0-.572.466-1.041 1.041-1.041.572 0 1.041.466 1.041 1.041a1.043 1.043 0 0 1-1.041 1.041z"/></svg>
        </div>
        <img id="thumbCanvas" src="../assets/allcablespro.png"> 
      </div>
      
    </div>

    <div class="viewer" :class="{viewerEasyMode: isFullMode != true}" ref="viewer">

      <div class="progressloaderBox" v-if="isLoaderVisible" >
        <div class="spinner"></div>   
      </div>

      <img id="thumbOpen" class="thumbnailOpen" :src=thumbUrl v-if="isThumbnailOpen" @click="thumbOpen">
      
      <!-- 3D canvas goes here -->
      <button class="btn-minimize-maximize" v-if="isFullMode != true" @click="uiAllowShow = !uiAllowShow;">
        <svg v-if="uiAllowShow" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm5.354.854a.502.502 0 0 1-.708-.708l2-2a.502.502 0 0 1 .708 0l2 2a.502.502 0 0 1-.708.708L8 7.207 6.354 8.854Z"/>
        </svg>
        <svg v-if="!uiAllowShow" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm5.353-.854a.5.5 0 1 0-.706.708l2 2a.5.5 0 0 0 .706 0l2-2a.5.5 0 1 0-.706-.708L8 8.793 6.353 7.146Z"/>
        </svg>
        {{ btnMinMaxText }}
      </button>
    </div>   
    <transition name="slide" appear>
      <div class="ui" :class="{uiEasyMode: isFullMode != true}" v-if="uiAllowShow">
        <!-- Selects -->
        <div class="ui-box" v-if="loaded">
          <div class="ui-select" v-for="reference in selects" :key="reference.label">          
            <span>{{ reference.id + ":"}}</span>
            <v-select 
            :options="filterOptions(reference)"
            :clearable="false"
            :searchable="true"
            :appendToBody="true"
            label="description"
            v-model="reference.value"
            >
              <template #no-options="{ search, searching, loading }">Ничего не найдено</template>
            </v-select>
          </div> 
        </div>
      </div>
    </transition>
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
      thumbUrl: null,
      isLoaderVisible: false,
      isThumbnailOpen: true,
      isImgLoaderVisible: false,
      loaderLogo: "../src/assets/allcablespro.png",
      isFullMode: true,
      uiAllowShow: false,
      isFirstRun: true,
    }
  },

  computed: {
    btnMinMaxText: function() {
      if (this.options.widget_easymode_size <= "250px" && this.options.widget_easymode_size > "150px") {
        return 'Параметры'
      }
      else if (this.options.widget_easymode_size <= "150px") {
        return ''
      }
      else {
        if(this.uiAllowShow) {
        return 'Скрыть параметры'
        }
        return 'Показать параметры'
      }
    }
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
  
    // Initialize Full\Easy Mode 
    if (this.options.full_mode === "true") {this.isFullMode = true; this.uiAllowShow = true}
    else {this.isFullMode = false;}

    // Create and initialize cable viewer
    window.cableViewer = new CableViewer(500, function (progress) {self.isLoaderVisible = true;});
    this.$refs["viewer"].appendChild(window.cableViewer.canvas);

    // Make Active Thumbs from Json
    if (this.isFullMode === true) {
      this.isImgLoaderVisible = true;
      this.thumbUrl = this.loaderLogo;
      if (this.options.thumbnail_url === '') {
        this.activeThumb = 2;
        this.isThumbnailOpen = false;
      }
      // Loading a picture before rendering the cable (if there is a picture)
      else { this.thumbUrl = this.options.thumbnail_url;  }
      if (this.isThumbnailOpen != true) { this.activeThumb = 1; }
      else { this.activeThumb = 2; }
    }
    else {this.isThumbnailOpen = false;}
    
    // Resize Widget in Easy Mode from Json
    document.body.style.setProperty('--widget_easymode_size', this.options.widget_easymode_size)
    // Set Widget Background Color in Easy Mode from Json
    document.body.style.setProperty('--widget_easymode_bg_color', this.options.widget_easymode_bg_color)
    // Set Widget UI Colors from Json
    document.body.style.setProperty('--widget-ui-main-color', this.options.widget_ui_main_color)
    document.body.style.setProperty('--widget-ui-second-color', this.options.widget_ui_second_color)
    // Set Widget Border Settings from Json
    document.body.style.setProperty('--widget-border-size', this.options.widget_border_size)
    document.body.style.setProperty('--widget-border-type', this.options.widget_border_type)
    document.body.style.setProperty('--widget-border-color', this.options.widget_border_color)
    document.body.style.setProperty('--widget-border-radius', this.options.widget_border_radius)

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
       
        // Apply Image Thumbnail URL from Json
        if (this.isFullMode === true) {
          if (this.options.thumbnail_url === '') {
            // Do this only once
            if (this.isFirstRun === true) {
              this.thumbUrl = window.cableViewer.canvas.toDataURL();
              
              this.isFirstRun = false;
            }
          }
          else {this.thumbUrl = this.options.thumbnail_url;}
          // Append canvas to cable viewer thumbnail
          thumbCanvas.src = window.cableViewer.canvas.toDataURL();
        }

        this.isLoaderVisible = false; // Loader stop
        this.isImgLoaderVisible = false; // Loader stop

      }, 1);
    },

    // Image Thumbnail click
    thumbImg: function () {
      this.activeThumb = 2;
      this.isThumbnailOpen = true;
    },

    // Cable Viewer Thumbnail click
    thumbCanvas: function () {
      this.activeThumb = 1;
      this.isThumbnailOpen = false;
    }, 

    // Open Thumbnail click
    thumbOpen: function() {
      
    },

  },

}
</script>

<style lang="scss">

  $ui-main-color: var(--widget-ui-main-color);
  $ui-sec-color: var(--widget-ui-second-color);
  $widget-easymode-bg-color: var(--widget_easymode_bg_color);
  $widget-easymode-size: var(--widget_easymode_size);
  
  :root{
    --widget_easymode_size: 500px;
    --widget_easymode_bg_color: #eaeaea;
    --widget-ui-main-color: #019F8C;
    --widget-ui-second-color: #F7F7F7;

    --widget-border-size: 1px;
    --widget-border-type: solid;
    --widget-border-color: #000000;
    --widget-border-radius: 10px;

    --ui-select-span-f-size: small;
  }

  body {
    /* appendToBody Selects Restyle */
    .vs__dropdown-menu { 
      white-space: pre-wrap;
      border: none;
    }
    .vs__dropdown-option {
      font-size: var(--ui-select-span-f-size);
      white-space: pre-wrap; 
      border-top: 0.5px solid #ececec;
    }

    .vs__dropdown-option--selected {
      background: #e9e9e9;
    }
    .vs__dropdown-option--highlight {
      background: $ui-main-color;
    }
    .vs__dropdown-menu {
      &::-webkit-scrollbar {width: 5px;}
      &::-webkit-scrollbar-thumb {background: $ui-main-color;border-radius: 25px;}
      &::-webkit-scrollbar-track {background-color: $ui-sec-color;border-radius: 25px;}
    }
    /* appendToBody Selects Restyle */
  }
  /* EasyMode Widget */
  .cableWidgetEasyMode {
    width: $widget-easymode-size !important;
    background-color: $widget-easymode-bg-color !important;
    flex-direction: column !important;

    .uiEasyMode {
      width: 100% !important;
      height: $widget-easymode-size !important;
    }

    .viewerEasyMode {
      width: $widget-easymode-size !important;
      height: $widget-easymode-size !important;
    }

    .viewerEasyMode canvas {
      width: $widget-easymode-size !important;
      height: $widget-easymode-size !important;
    }
  }
  /* EasyMode Widget */
  /* Main Widget */
  .cable-widget {
    display: flex;
    flex-direction: row;
    left: 10px;
    right: 10px;
    width: 1000px;
    height: auto;
    border: var(--widget-border-size) var(--widget-border-type) var(--widget-border-color);
    border-radius: var(--widget-border-radius);
    z-index: 1;
    overflow: hidden;

    /* Minimize\Maximize UI Button */
    .btn-minimize-maximize {
      position: absolute;
      right: 0;
      bottom: 0;
      margin: 0 10px 10px 0;
      padding: 6px 12px 6px 12px;
      background-color: $ui-sec-color;
      border: none;
      border-radius: 5px;
      font-size: 14px;
      z-index: 5;
    }

    .btn-minimize-maximize svg {
      display: inline-block;
      vertical-align: middle;
      fill: $ui-main-color;
      width: 16px;
      height: 16px;
      margin-right: 0.25rem;
    }

    .btn-minimize-maximize:hover svg {
      fill: #fff;
    }

    .btn-minimize-maximize:focus svg,
    .btn-minimize-maximize:focus-visible svg
     {
      fill: #fff;
    }

    .btn-minimize-maximize:hover {
      background-color: $ui-main-color;
      color: white;
      cursor: pointer;
    }

    .btn-minimize-maximize:focus, 
    .btn-minimize-maximize:focus-visible {
      border: none;
      background-color: $ui-main-color;
      color: white;
      cursor: pointer;
      outline: none;
    }
    /* Minimize\Maximize UI Button */
    /* Thumbnails Tabs */
    
    .thumbs {
      display: flex;
      flex-direction: column;
      border: none;
      height: 500px;
      //width: 200px;
      //overflow: auto;
    }

    .thumbnail {
      display: flex;
      position: relative;
      margin: 5px 5px 5px 5px;
      width: 128px;
      height: 128px;
      border: 2px solid rgb(176, 176, 176); 
      object-fit: cover;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .activeThumbnail {
      border: 2px solid $ui-main-color;
    }

    .thumbnail img {
      display: flex;
      margin: 5px 5px 5px 5px;
      width: 128px;
      height: 128px;
      object-fit: cover;
    }

    .thumbs-up-icon {
      position: absolute;
      left: 4px;
      top: 4px;
    }

    .thumbnailOpen {
      width: 500px;
      height: 500px;
      object-fit: cover;
    }
    /* Thumbnails Tabs */
    /* Scrollbar UI */
    .ui {
      &::-webkit-scrollbar {width: 5px;}
      &::-webkit-scrollbar-thumb {background: $ui-main-color;border-radius: 25px;}
      &::-webkit-scrollbar-track {background-color: transparent;border-radius: 25px;}
    }
    /* Scrollbar UI */
    /* Cable Viewer */
    .viewer {
      position: relative;
      top: 0;
      border-radius: 0px;
      width: 500px;
      height: 500px;
      z-index: 4;
    }

    .viewer canvas {
      position: relative !important;
    }
    /* Cable Viewer */
    /* UI Box */
    .ui {
      position: relative;
      top: 0;      
      width: 50%;
      overflow: auto;
      overflow-x: hidden;
      height: 500px;
      z-index: 1;
    }

    .ui-box {
      position: flex;
      margin: auto; // Center align
      width: 90%;
      margin-top: 15px;
      margin-bottom: 15px;
    }

    /* UI Box */
    /* Selects */
    .ui-select {
      position: flex;
    }
    .ui-select span {
      font-size: var(--ui-select-span-f-size);
    }
    .vs__search {
      position: absolute;
    }

    .vs__search:focus {
      position: relative;
    }

    .vs__dropdown-toggle, 
    .vs__dropdown-menu,
    .vs__dropdown-option {
      background: $ui-sec-color;
    }
    
    .vs__dropdown-toggle {
      margin: 0.3em 0 1em 0;
      height: auto;
      text-overflow: ellipsis;
      border-radius: 2px;
      border-color: transparent;
    }

    .vs__actions {
      padding-right: 15px;
    }
    /* Selects */
    /* PreLoader */
    .progressloaderBox {
      position: absolute;
      top: 10;
      left: 10;
      width: 100%;
      height: 100%;
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
      border-top: 4.1px solid $ui-main-color;
      border-radius: 100%;
      animation: spin 1s infinite linear;
    }

    .spinner-small {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 50px;
      height: 50px;
      border: 3px solid $ui-sec-color;;
      border-top: 3px solid $ui-main-color;
      border-radius: 100%;
      animation: spin 1s infinite linear;
    }

    /* PreLoader */
    /* Animations and Transitions */
    @keyframes spin {
      from{transform: rotate(0deg);}
      to{transform: rotate(360deg);}
    }

    .slide-enter-active {
      z-index: 1;
      transition: all 0.3s ease-out;
    }

    .slide-leave-active {
      z-index: 1;
      transition: all 0.3s ease-out;
    }

    .slide-enter-from,
    .slide-leave-to {
      z-index: 1;
      transform: translateY(-20px);
      opacity: 0;
    }
    /* Animations and Transitions */
    /* Main Widget */

  }

</style>