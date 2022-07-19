<template>
  <cable-widget :options="testJson"></cable-widget>
</template>

<script>
import CableWidget from './cable-widget.vue';

export default {
  
  components: {
    CableWidget
  },

  data() {
    return {
     testJson: {
      "references": [
        {
          "id": "Число пар",
          "index": 10,
          "generator_index": 10,
          "values": [

            {
              "id": "2",
              "description": "Общие жилы скручены в пары.",
              "json": [

                {
                  step: "twistedCircleWire",
                  options: {
                    radius: 0.2,
                    count: 3,
                    material: "copper",
                    isolated: true,
                    isolationRadius: 0.05,
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 2
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.2,
                    material: "plastic",
                    color: "#999999",
                  }
                }, 
                {
                  step: "clone",
                  options: {
                    count: 4
                  }
                },
              ]
            }

          ],
        },
        {
          "id": "Броня под наружной оболочкой",
          "index": 20,
          "generator_index": 20,
          "values": [

            {
              "id": "К",
              "description": "Броня в виде сплошного повива из оцинкованных проволок под наружной оболочкой.",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 10
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcabls.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                }, 

              ]
            },

            {
              "id": "-",
              "description": "Без брони.",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 6
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#СС8709",
                  }
                }, 

              ]
            },

          ],
        },        
      ],
      "exceptions": [],
      "cable": [
        {
          "reference_id": "Число пар",
          "reference_value_id": "2"
        },
        {
          "reference_id": "Броня под наружной оболочкой",
          "reference_value_id": "К"
        },
      ],
     } 
    }
  }
}
</script>