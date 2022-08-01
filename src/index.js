var options = {
    "references": [
        {
            "id": "Номинальное сечение жилы",
            "index": 0,
            "generator_index": 3,
            "values": [
                {
                    "id": "0,2",
                    "description": "Жила сечением 0,2 мм²",
                    "json": [
                        {
                            "step": "setVariable",
                            "options": {
                                "step": "twistedCircleWire",
                                "option": "radius",
                                "value": "1.25"
                            }
                        }
                    ]
                },
                {
                    "id": "1.5",
                    "description": "Жила сечением 1,5 мм²",
                    "json": [
                        {
                            "step": "setVariable",
                            "options": {
                                "step": "twistedCircleWire",
                                "option": "radius",
                                "value": "0.69"
                            }
                        }
                    ]
                }
            ]
        },
        {
          "id": "Броня под наружной оболочкой",
          "index": 20,
          "generator_index": 20,
          "values": [
            {
              "id": "-",
              "description": "Без брони",
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
            {
              "id": "К",
              "description": "Броня в виде сплошного повива из оцинкованных проволок под наружной оболочкой",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "КГ",
              "description": "Броня в виде оплетки из проволок поверх внутренней оболочки, наружная оболочка на броню не накладывается («голая» броня)",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
          ],
        }, 
        {
          "id": "Общий экран поверх сердечника из всех витых пар",
          "index": 30,
          "generator_index": 30,
          "values": [
            {
              "id": "-",
              "description": "Без общего экрана",
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
            {
              "id": "Э",
              "description": "Общий экран из алюмофольгированной пленки (алюмофлекс)",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "Эм",
              "description": "Общий экран оплеткой из медных проволок",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "Эл",
              "description": "Общий экран оплеткой из медных луженных проволок",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "ЭЭл",
              "description": "Поверх алюмофлекса наложена оплетка из медных луженых проволок",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
          ],
        }, 
        {
          "id": "Материал оболочки и изоляци",
          "index": 40,
          "generator_index": 40,
          "values": [
            {
              "id": "В",
              "description": "Оболочка и изоляция из ПВХ пластиката",
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
            {
              "id": "П",
              "description": "Оболочка и изоляция из полимерных композиций, не содержащих галогенов",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "Т",
              "description": "Оболочка и изоляция из термопластичного эластомера",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
          ],
        }, 
        {
          "id": "Изоляция индивидуальных экранов",
          "index": 50,
          "generator_index": 50,
          "values": [
            {
              "id": "-",
              "description": "Экраны изолированы между собой полимерной пленкой",
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
            {
              "id": "-",
              "description": "Экраны изолированы между собой экструдированным полимерным слоем",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
          ],
        }, 
        {
          "id": "Индивидуальный экран каждой пары",
          "index": 60,
          "generator_index": 60,
          "values": [
            {
              "id": "-",
              "description": "Без индивидуального экрана",
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
            {
              "id": "Э",
              "description": "Алюмофольгированная пленка (алюмофлекс)",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "Эм",
              "description": "Оплетка из медных проволок",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "Эл",
              "description": "Оплетка из медных луженных проволок",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "ЭЭл",
              "description": "Поверх алюмофлекса наложена оплетка из медных луженых проволок",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
          ],
        }, 
        {
          "id": "Луженые жилы",
          "index": 70,
          "generator_index": 70,
          "values": [
            {
              "id": "-",
              "description": "Луженые жилы",
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
            {
              "id": "м",
              "description": "Нелуженые жилы",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
          ],
        }, 
        {
          "id": "Номинальный диаметр / сечение жил",
          "index": 80,
          "generator_index": 80,
          "values": [
            {
              "id": "0,40",
              "description": "Диаметр однопроволочых, медных жил, 0,40 мм²",
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
            {
              "id": "0,51",
              "description": "Диаметр однопроволочых, медных жил, 0,51 мм²",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "0,64",
              "description": "Диаметр однопроволочых, медных жил, 0,64 мм²",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "0,80",
              "description": "Диаметр однопроволочых, медных жил, 0,80 мм²",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "0,12",
              "description": "Сечение медных, многопроволочных жил, 0,12 мм²",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "0,20",
              "description": "Сечение медных, многопроволочных жил, 0,20 мм²",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "0,35",
              "description": "Сечение медных, многопроволочных жил, 0,35 мм²",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "0,5",
              "description": "Сечение медных, многопроволочных жил, 0,5 мм²",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "0,75",
              "description": "Сечение медных, многопроволочных жил, 0,75 мм²",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "1,0",
              "description": "Сечение медных, многопроволочных жил, 1,0 мм²",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "1,2",
              "description": "Сечение медных, многопроволочных жил, 1,2 мм²",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "1,5",
              "description": "Сечение медных, многопроволочных жил, 1,5 мм²",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
          ],
        }, 
        {
          "id": "Число витых пар",
          "index": 90,
          "generator_index": 90,
          "values": [
            {
              "id": "1",
              "description": "Одна витая пара",
              "json": [

              ]
            },
            {
              "id": "2",
              "description": "Две витые пары",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "3",
              "description": "Три витые пары",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "4",
              "description": "Четыре витые пары",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "5",
              "description": "Пять витых пар",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "6",
              "description": "Шесть витых пар",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "7",
              "description": "Семь витых пар",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "8",
              "description": "Восемь витых пар",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "9",
              "description": "Девять витых пар",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "10",
              "description": "Десять витых пар",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "11",
              "description": "Одиннадцать витых пар",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "12",
              "description": "Двенадцать витых пар",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "12",
              "description": "Тринадцать витых пар",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "13",
              "description": "Четырнадцать витых пар",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "14",
              "description": "Пятнадцать витых пар",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "15",
              "description": "Шестнадцать витых пар",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "17",
              "description": "Семнадцать витых пар",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "18",
              "description": "Восемнадцать витых пар",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "19",
              "description": "Девятнадцать витых пар",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "20",
              "description": "Двадцать витых пар",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "21",
              "description": "Двадцать одна витая пара",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "22",
              "description": "Двадцать две витые пары",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "23",
              "description": "Двадцать три витые пары",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "24",
              "description": "Двадцать четыре витые пары",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "25",
              "description": "Двадцать пять витых пар",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "27",
              "description": "Двадцать семь витых пар",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "30",
              "description": "Тридцать витых пар",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "37",
              "description": "Тридцать семь витых пары",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "40",
              "description": "Сорок витых пар",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "44",
              "description": "Сорок четыре витые пары",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
          ],
        }, 
        {
          "id": "Показатель пожарной опасности",
          "index": 100,
          "generator_index": 100,
          "values": [
            {
              "id": "-",
              "description": "Не распространяющий горение при одиночной прокладке",
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
            {
              "id": "нг(А)",
              "description": 'Не распространяющий горение при групповой прокладке по категории "А"',
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "нг(А)-LS",
              "description": "С пониженным дымо- и газовыделением. LS — low smoke",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "нг(А)-HF",
              "description": "Не выделяющий коррозионно-активных газообразных продуктов при горении и тлении. HF — Halogen Free (не содержит галогенов)",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "нг(А)-FR",
              "description": "Огнестойкий. FR — Fire Resistance",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "нг(А)-FRLS",
              "description": "Огнестойкий, с пониженным дымо- и газовыделением. FRLS — Fire Resistance Low Smoke",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
            {
              "id": "нг(А)-FRHF",
              "description": "Огнестойкий, не выделяющий коррозионно-активных газообразных продуктов при горении и тлении. FRHF — Fire Resistance Halogen Free (не содержит галогенов)",
              "json": [

                {
                  step: "setStep",
                  options: {
                    newStep: 3
                  }
                },
                {
                  step: "circleWireCover",
                  options: {
                    radius: 0.4,
                    material: "plastic",
                    color: "#333333",
                    text: "allcables.pro",
                    textSize: 0.7,
                    textColor: "#FFFFFF"
                  }
                },
                {
                  step: "setStep",
                  options: {
                    newStep: 7
                  }
                },                
                {
                  step: "corrugationCover",
                  options: {
                    radius: 0.2,
                    material: "steel",
                    stripeWidth: 0.7,
                    spacerWidth: 0.3,
                  }
                },

              ]
            },
          ],
        }, 
        {
          "id": "Марка",
          "index": 110,
          "generator_index": 110,
          "values": [
            {
              "id": "КВИП",
              "description": "Кабель высокоскоростной передачи данных",
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
        {
          "id": "Специальный показатель",
          "index": 120,
          "generator_index": 120,
          "values": [
            {
              "id": "ХЛ",
              "description": "Повышенной холодостойкости",
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
            {
              "id": "ЭХЛ",
              "description": "Стойкий к экстремально холодным условиям",
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
            {
              "id": "УФ",
              "description": "Устойчивый к ультрафиолету в течение всего срока службы кабеля, стойкость к воздействию дождя, динамическому абразивному воздействию пыли, выпадению инея",
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
            {
              "id": "М",
              "description": "Маслобензостойкий",
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
            {
              "id": "Х",
              "description": "Стойкий к химически агрессивным средам",
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
            {
              "id": "Т",
              "description": "Повышенной теплостойкости до +200°С",
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
            {
              "id": "ЗГ",
              "description": "Стойкость оболочки к повреждению грызунами, муравьями, термитами",
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
            {
              "id": "с",
              "description": "Кабель с оболочкой синего цвета",
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
      "exceptions": [
        {
          "reference_id": "Специальный показатель",
          "reference_value_id": "ХЛ",
          "exclude": [
            {
            "reference_id": "Специальный показатель",
            "reference_value_id": "ЭХЛ",
            }
          ]
        },
        {
          "reference_id": "Специальный показатель",
          "reference_value_id": "ЗГ",
          "exclude": [
            {
              "reference_id": "Показатель пожарной опасности",
              "reference_value_id": "нг(А)",
            },
            {
              "reference_id": "Показатель пожарной опасности",
              "reference_value_id": "нг(А)-LS",
            },
            {
              "reference_id": "Показатель пожарной опасности",
              "reference_value_id": "нг(А)-FR",
            },
            {
              "reference_id": "Показатель пожарной опасности",
              "reference_value_id": "нг(А)-FRHF",
            }
          ]
        },
        {
          "reference_id": "Число витых пар",
          "reference_value_id": "5",
          "exclude": [
            {
              "reference_id": "Показатель пожарной опасности",
              "reference_value_id": "нг(А)",
            },
            {
              "reference_id": "Специальный показатель",
              "reference_value_id": "ЭХЛ",
            }
          ]
        },
      ],
      "cable": [
        {
            "id": "Лужение жилы",
            "index": 1,
            "generator_index": 4,
            "values": [
                {
                    "id": "без индекса",
                    "description": "нелуженая жила",
                    "json": [
                        {
                            "step": "setVariable",
                            "options": {
                                "step": "twistedCircleWire",
                                "option": "material",
                                "value": "copper"
                            }
                        }
                    ]
                },
                {
                    "id": "л",
                    "description": "луженая жила",
                    "json": [
                        {
                            "step": "setVariable",
                            "options": {
                                "step": "twistedCircleWire",
                                "option": "material",
                                "value": "steel"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": "Число жил (пар, троек, четверок)",
            "index": 2,
            "generator_index": 5,
            "values": [
                {
                    "id": "10х2",
                    "description": "10 пар общей скрутки",
                    "json": [
                        {
                            "step": "twistedCircleWire",
                            "options": {
                                "radius": null,
                                "count": 2,
                                "material": null,
                                "isolated": true,
                                "isolationRadius": 0.1
                            }
                        },
                        {
                            "step": "setVariable",
                            "options": {
                                "step": "clone",
                                "option": "count",
                                "value": "10"
                            }
                        }
                    ]
                },
                {
                    "id": "5х4",
                    "description": "5 четверок общей скрутки",
                    "json": [
                        {
                            "step": "twistedCircleWire",
                            "options": {
                                "radius": null,
                                "count": 4,
                                "material": "copper",
                                "isolated": true,
                                "isolationRadius": 0.1
                            }
                        },
                        {
                            "step": "setVariable",
                            "options": {
                                "step": "clone",
                                "option": "count",
                                "value": "5"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": "Индивидуальный экран каждой жилы (пары, тройки, четверки)",
            "index": 3,
            "generator_index": 6,
            "values": [
                {
                    "id": "без индекса",
                    "description": "без индивидуального экрана",
                    "json": []
                },
                {
                    "id": "Э",
                    "description": "алюмофольгированная пленка (алюмофлекс)",
                    "json": [
                        {
                            "step": "setStep",
                            "options": {
                                "newStep": 0.2
                            }
                        },
                        {
                            "step": "circleWireCover",
                            "options": {
                                "radius": 0.2,
                                "material": "plastic",
                                "color": "#333333",
                                "alignWithNextLayer": null,
                                "textColor": "#FFFFFF"
                            }
                        },
                        {
                            "step": "setStep",
                            "options": {
                                "newStep": 3
                            }
                        },
                        {
                            "step": "circleWireCover",
                            "options": {
                                "radius": 0.05,
                                "material": "steel",
                                "color": "#000000",
                                "alignWithNextLayer": null,
                                "textColor": "#FFFFFF"
                            }
                        },
                        {
                            "step": "setDefaultStep",
                            "options": []
                        }
                    ]
                },
                {
                    "id": "Эм",
                    "description": "оплетка из медных проволок",
                    "json": [
                        {
                            "step": "circleWireCover",
                            "options": {
                                "radius": 0.01,
                                "material": "plastic",
                                "color": "#333333",
                                "alignWithNextLayer": true,
                                "textColor": "#FFFFFF"
                            }
                        },
                        {
                            "step": "setStep",
                            "options": {
                                "newStep": 5
                            }
                        },
                        {
                            "step": "netWireShield",
                            "options": {
                                "radius": 0.05,
                                "countPerRibbon": 4,
                                "material": "copper"
                            }
                        },
                        {
                            "step": "setDefaultStep",
                            "options": []
                        }
                    ]
                }
            ]
        },
        {
            "id": "Изоляция индивидуальных экранов",
            "index": 4,
            "generator_index": 7,
            "values": [
                {
                    "id": "П",
                    "description": "экраны изолированы между собой полимерной пленкой",
                    "json": [
                        {
                            "step": "circleWireCover",
                            "options": {
                                "radius": 0.15,
                                "material": "plastic",
                                "color": "#16A5A5",
                                "alignWithNextLayer": null,
                                "textColor": "#FFFFFF"
                            }
                        }
                    ]
                },
                {
                    "id": "С",
                    "description": "экраны изолированы между собой экструдированным полимерным слоем",
                    "json": [
                        {
                            "step": "circleWireCover",
                            "options": {
                                "radius": 0.3,
                                "material": "plastic",
                                "color": "#0C797D",
                                "alignWithNextLayer": null,
                                "textColor": "#FFFFFF"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": "Наличие жилы заземления",
            "index": 5,
            "generator_index": 8,
            "values": [
                {
                    "id": "без индекса",
                    "description": "без жилы заземления",
                    "json": [
                        {
                            "step": "clone",
                            "options": {
                                "count": null
                            }
                        }
                    ]
                },
                {
                    "id": "(PE)",
                    "description": "жила заземления",
                    "json": [
                        {
                            "step": "clone",
                            "options": {
                                "count": null
                            }
                        },
                        {
                            "step": "groundWire",
                            "options": {
                                "radius": 0.3,
                                "material": "copper",
                                "coverRadius": null
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": "Общий экран поверх сердечника из всех жил (пар, троек, четверок)",
            "index": 6,
            "generator_index": 9,
            "values": [
                {
                    "id": "без индекса",
                    "description": "без общего экрана",
                    "json": []
                },
                {
                    "id": "Э",
                    "description": "алюмофольгированная пленка (алюмофлекс)",
                    "json": [
                        {
                            "step": "setStep",
                            "options": {
                                "newStep": 0.2
                            }
                        },
                        {
                            "step": "circleWireCover",
                            "options": {
                                "radius": 0.2,
                                "material": "plastic",
                                "color": "#333333",
                                "alignWithNextLayer": null,
                                "textColor": "#FFFFFF"
                            }
                        },
                        {
                            "step": "setStep",
                            "options": {
                                "newStep": 3
                            }
                        },
                        {
                            "step": "circleWireCover",
                            "options": {
                                "radius": 0.05,
                                "material": "steel",
                                "color": "#000000",
                                "alignWithNextLayer": null,
                                "textColor": "#FFFFFF"
                            }
                        },
                        {
                            "step": "circleWireCover",
                            "options": {
                                "radius": 0.5,
                                "material": "plastic",
                                "color": "#333333",
                                "alignWithNextLayer": null,
                                "textColor": "#FFFFFF"
                            }
                        },
                        {
                            "step": "setDefaultStep",
                            "options": []
                        }
                    ]
                }
            ]
        },
        {
            "id": "Броня под наружной оболочкой",
            "index": 7,
            "generator_index": 10,
            "values": [
                {
                    "id": "без индекса",
                    "description": "без брони",
                    "json": []
                },
                {
                    "id": "К",
                    "description": "в виде сплошного повива из оцинкованных проволок под наружной оболочкой",
                    "json": [
                        {
                            "step": "setStep",
                            "options": {
                                "newStep": 15
                            }
                        },                    
                        {
                            "step": "circleWireCover",
                            "options": {
                                "radius": 0.01,
                                "material": "plastic",
                                "color": "#333333",
                                "alignWithNextLayer": true,
                                "textColor": "#FFFFFF"
                            }
                        },
                        {
                            "step": "netWireShield",
                            "options": {
                                "radius": 0.1,
                                "countPerRibbon": 5,
                                "material": "steel"
                            }
                        }
                    ]
                },
                {
                    "id": "Ко",
                    "description": "в виде оплетки из оцинкованных проволок под наружной оболочкой",
                    "json": [
                        {
                            "step": "circleWireCover",
                            "options": {
                                "radius": 0.01,
                                "material": "plastic",
                                "color": "#333333",
                                "alignWithNextLayer": null,
                                "textColor": "#FFFFFF"
                            }
                        },
                        {
                            "step": "twistedCircleWireShield",
                            "options": {
                                "radius": 0.1,
                                "material": "steel"
                            }
                        }
                    ]
                },
                {
                    "id": "Б",
                    "description": "ленточная из стальных оцинкованных лент",
                    "json": [
                        {
                            "step": "circleWireCover",
                            "options": {
                                "radius": 0.01,
                                "material": "plastic",
                                "color": "#333333",
                                "alignWithNextLayer": true,
                                "textColor": "#FFFFFF"
                            }
                        },
                        {
                            "step": "ribbon",
                            "options": {
                                "thickness": 0.15,
                                "material": "steel"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": "Материал оболочки и изоляции",
            "index": 8,
            "generator_index": 11,
            "values": [
                {
                    "id": "В",
                    "description": "ПВХ пластикат",
                    "json": [
                        {
                            "step": "setStep",
                            "options": {
                                "newStep": 7
                            }
                        },
                        {
                            "step": "circleWireCover",
                            "options": {
                                "radius": 0.4,
                                "material": "plastic",
                                "color": "#333333",
                                "alignWithNextLayer": null,
                                "text": "allcables.pro",
                                "textSize": 0.5,
                                "textColor": "#FFFFFF"
                            }
                        }
                    ]
                },
                {
                    "id": "П",
                    "description": "полимерные композиции, не содержащие галогенов",
                    "json": [
                        {
                            "step": "setStep",
                            "options": {
                                "newStep": 7
                            }
                        },
                        {
                            "step": "circleWireCover",
                            "options": {
                                "radius": 0.4,
                                "material": "plastic",
                                "color": "#333333",
                                "alignWithNextLayer": null,
                                "text": "allcables.pro",
                                "textSize": 0.5,
                                "textColor": "#FFFFFF"
                            }
                        }
                    ]
                },
                {
                    "id": "Пс",
                    "description": "изоляция сшитый полиолефин, оболочка - ПВХ (темп.экспл. до +80°С)",
                    "json": [
                        {
                            "step": "setStep",
                            "options": {
                                "newStep": 7
                            }
                        },
                        {
                            "step": "circleWireCover",
                            "options": {
                                "radius": 0.4,
                                "material": "plastic",
                                "color": "#333333",
                                "alignWithNextLayer": null,
                                "text": "allcables.pro",
                                "textSize": 0.5,
                                "textColor": "#FFFFFF"
                            }
                        }
                    ]
                },
                {
                    "id": "T",
                    "description": "термопластичный эластомер",
                    "json": [
                        {
                            "step": "setStep",
                            "options": {
                                "newStep": 7
                            }
                        },
                        {
                            "step": "circleWireCover",
                            "options": {
                                "radius": 0.4,
                                "material": "plastic",
                                "color": "#333333",
                                "alignWithNextLayer": null,
                                "text": "allcables.pro",
                                "textSize": 0.5,
                                "textColor": "#FFFFFF"
                            }
                        }
                    ]
                }
            ]
        }
      
    ],
    "exceptions": [],
    "cable": [
        {
            "reference_id": "Номинальное сечение жилы",
            "reference_value_id": "0,2"
        },
        {
          "reference_id": "Броня под наружной оболочкой",
          "reference_value_id": "К"
        },
        {
          "reference_id": "Общий экран поверх сердечника из всех витых пар",
          "reference_value_id": "-"
        },
        {
          "reference_id": "Материал оболочки и изоляци",
          "reference_value_id": "В"
        },
        {
          "reference_id": "Изоляция индивидуальных экранов",
          "reference_value_id": "-"
        },
        {
          "reference_id": "Индивидуальный экран каждой пары",
          "reference_value_id": "-"
        },
        {
          "reference_id": "Луженые жилы",
          "reference_value_id": "-"
        },
        {
          "reference_id": "Номинальный диаметр / сечение жил",
          "reference_value_id": "0,40"
        },
        {
          "reference_id": "Число витых пар",
          "reference_value_id": "5"
        },
        {
          "reference_id": "Показатель пожарной опасности",
          "reference_value_id": "нг(А)"
        },
        {
          "reference_id": "Марка",
          "reference_value_id": "КВИП"
        },
        {
          "reference_id": "Специальный показатель",
          "reference_value_id": "ЗГ"
        },
        {

            "reference_id": "Лужение жилы",
            "reference_value_id": "л"
        },
        {
            "reference_id": "Число жил (пар, троек, четверок)",
            "reference_value_id": "5х4"
        },
        {
            "reference_id": "Индивидуальный экран каждой жилы (пары, тройки, четверки)",
            "reference_value_id": "Эм"
        },
        {
            "reference_id": "Изоляция индивидуальных экранов",
            "reference_value_id": "С"
        },
        {
            "reference_id": "Наличие жилы заземления",
            "reference_value_id": "без индекса"
        },
        {
            "reference_id": "Общий экран поверх сердечника из всех жил (пар, троек, четверок)",
            "reference_value_id": "без индекса"
        },
        {
            "reference_id": "Броня под наружной оболочкой",
            "reference_value_id": "К"
        },
        {
            "reference_id": "Материал оболочки и изоляции",
            "reference_value_id": "T"
        }
    ]
}

import CableWidget from "./UI/app.js";
//import CableWidget from "../dist/bundle.js";
var cableWidget = new CableWidget('#widget', options);
      