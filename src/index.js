var options = {
    "references": [
        {
            "id": "Высокая гибкость",
            "index": 0,
            "generator_index": 1,
            "values": [
                {
                    "id": "без индекса",
                    "description": "обычная гибкость",
                    "json": [
                        {
                            "step": "corrugationCover",
                            "options": {
                                "radius": "0.2",
                                "material": "steel",
                                "stripeWidth": "2",
                                "spacerWidth": "3"
                            }
                        }
                    ]
                },
                {
                    "id": "Г",
                    "description": "кабель с жилами высокой гибкости",
                    "json": []
                }
            ]
        },
        {
            "id": "Показатель пожарной опасности",
            "index": 1,
            "generator_index": 2,
            "values": [
                {
                    "id": "без индекса",
                    "description": "не распространяющие горение при одиночной прокладке",
                    "json": []
                },
                {
                    "id": "нг(А)",
                    "description": "не распространяющие горение при групповой прокладке по категории \"А\"",
                    "json": []
                },
                {
                    "id": "нг(А)-LS",
                    "description": "с пониженным дымо- и газовыделением",
                    "json": []
                },
                {
                    "id": "нг(А)-LSLTx",
                    "description": "с пониженным дымо- и газовыделением, с низкой токсичностью продуктов горения",
                    "json": []
                },
                {
                    "id": "нг(А)-HF",
                    "description": "не выделяющие коррозионно-активных газообразных продуктов при горении и тлении",
                    "json": []
                },
                {
                    "id": "нг(А)-FR",
                    "description": "кабели огнестойкие",
                    "json": []
                },
                {
                    "id": "нг(А)-FRLS",
                    "description": "кабели огнестойкие, с пониженным дымо- и газовыделением",
                    "json": []
                },
                {
                    "id": "нг(А)-FRLSLTx",
                    "description": "кабели огнестойкие, с пониженным дымо- и газовыделением, с низкой токсичностью продуктов горения",
                    "json": []
                },
                {
                    "id": "нг(А)-FRHF",
                    "description": "кабели огнестойкие, не выделяющие коррозионно-активных газообразных продуктов при горении и тлении",
                    "json": []
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
            "id": "Номинальное сечение жилы",
            "index": 3,
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
                                "value": "0.25"
                            }
                        }
                    ]
                },
                {
                    "id": "0.5",
                    "description": "Жила сечением 0,5 мм²",
                    "json": [
                        {
                            "step": "setVariable",
                            "options": {
                                "step": "twistedCircleWire",
                                "option": "radius",
                                "value": "0.4"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": "Лужение жилы",
            "index": 4,
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
            "id": "Индивидуальный экран каждой жилы (пары, тройки, четверки)",
            "index": 6,
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
                                "newStep": "3"
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
                                "newStep": 3
                            }
                        },
                        {
                            "step": "netWireShield",
                            "options": {
                                "radius": 0.05,
                                "countPerRibbon": 5,
                                "material": "copper"
                            }
                        },
                        {
                            "step": "setDefaultStep",
                            "options": []
                        }
                    ]
                },
                {
                    "id": "Эл",
                    "description": "оплетка из медных луженных проволок",
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
                                "newStep": 3
                            }
                        },
                        {
                            "step": "netWireShield",
                            "options": {
                                "radius": 0.05,
                                "countPerRibbon": 5,
                                "material": "steel"
                            }
                        },
                        {
                            "step": "setDefaultStep",
                            "options": []
                        }
                    ]
                },
                {
                    "id": "ЭЭл",
                    "description": "поверх алюмофлекса наложена оплетка из медных луженых проволок",
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
                                "newStep": 1
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
                            "step": "setStep",
                            "options": {
                                "newStep": 3
                            }
                        },
                        {
                            "step": "circleWireCover",
                            "options": {
                                "radius": 0.01,
                                "material": "steel",
                                "color": "#333333",
                                "alignWithNextLayer": true,
                                "textColor": "#FFFFFF"
                            }
                        },
                        {
                            "step": "netWireShield",
                            "options": {
                                "radius": 0.05,
                                "countPerRibbon": 5,
                                "material": "copper"
                            }
                        },
                        {
                            "step": "setDefaultStep",
                            "options": []
                        }
                    ]
                },
                {
                    "id": "Эмф",
                    "description": "меднофольгированная пленка",
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
                                "material": "copper",
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
                }
            ]
        },
        {
            "id": "Изоляция индивидуальных экранов",
            "index": 7,
            "generator_index": 7,
            "values": [
                {
                    "id": "П",
                    "description": "экраны изолированы между собой полимерной пленкой",
                    "json": [
                        {
                            "step": "setStep",
                            "options": {
                                "newStep": 2
                            }
                        },
                        {
                            "step": "circleWireCover",
                            "options": {
                                "radius": 0.15,
                                "material": "plastic",
                                "color": "#0C797D",
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
                    "id": "С",
                    "description": "экраны изолированы между собой экструдированным полимерным слоем",
                    "json": [
                        {
                            "step": "setStep",
                            "options": {
                                "newStep": 2
                            }
                        },
                        {
                            "step": "circleWireCover",
                            "options": {
                                "radius": 0.3,
                                "material": "plastic",
                                "color": "#0C797D",
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
        },
        {
            "id": "Общий экран поверх сердечника из всех жил (пар, троек, четверок)",
            "index": 9,
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
                            "step": "setStep",
                            "options": {
                                "newStep": "3"
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
                                "radius": 0.05,
                                "countPerRibbon": 5,
                                "material": "copper"
                            }
                        },
                        {
                            "step": "setDefaultStep",
                            "options": []
                        }
                    ]
                },
                {
                    "id": "Эл",
                    "description": "оплетка из медных луженных проволок",
                    "json": [
                        {
                            "step": "setStep",
                            "options": {
                                "newStep": 3
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
                                "radius": 0.05,
                                "countPerRibbon": 5,
                                "material": "steel"
                            }
                        },
                        {
                            "step": "setDefaultStep",
                            "options": []
                        }
                    ]
                },
                {
                    "id": "ЭЭл",
                    "description": "поверх алюмофлекса наложена оплетка из медных луженых проволок",
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
                                "newStep": 1
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
                            "step": "setStep",
                            "options": {
                                "newStep": 3
                            }
                        },
                        {
                            "step": "circleWireCover",
                            "options": {
                                "radius": 0.01,
                                "material": "steel",
                                "color": "#000000",
                                "alignWithNextLayer": true,
                                "textColor": "#FFFFFF"
                            }
                        },
                        {
                            "step": "netWireShield",
                            "options": {
                                "radius": 0.05,
                                "countPerRibbon": 5,
                                "material": "copper"
                            }
                        },
                        {
                            "step": "setDefaultStep",
                            "options": []
                        }
                    ]
                },
                {
                    "id": "Эмф",
                    "description": "меднофольгированная пленка",
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
                                "material": "copper",
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
                }
            ]
        },
        {
            "id": "Броня под наружной оболочкой",
            "index": 10,
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
                                "newStep": 1
                            }
                        },
                        {
                            "step": "circleWireCover",
                            "options": {
                                "radius": 0.3,
                                "material": "plastic",
                                "color": "#333333",
                                "alignWithNextLayer": null,
                                "textColor": "#FFFFFF"
                            }
                        },
                        {
                            "step": "setDefaultStep",
                            "options": []
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
                            "step": "setStep",
                            "options": {
                                "newStep": 1
                            }
                        },
                        {
                            "step": "circleWireCover",
                            "options": {
                                "radius": 0.3,
                                "material": "plastic",
                                "color": "#333333",
                                "alignWithNextLayer": null,
                                "textColor": "#FFFFFF"
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
                            "step": "setDefaultStep",
                            "options": []
                        },
                        {
                            "step": "twistedCircleWireShield",
                            "options": {
                                "radius": 0.15,
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
                            "step": "setStep",
                            "options": {
                                "newStep": 1
                            }
                        },
                        {
                            "step": "circleWireCover",
                            "options": {
                                "radius": 0.3,
                                "material": "plastic",
                                "color": "#333333",
                                "alignWithNextLayer": null,
                                "textColor": "#FFFFFF"
                            }
                        },
                        {
                            "step": "setDefaultStep",
                            "options": []
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
                            "step": "ribbon",
                            "options": {
                                "thickness": 0.1,
                                "material": "steel"
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
            "id": "Специальный показатель",
            "index": 11,
            "generator_index": 12,
            "values": []
        },
        {
            "id": "Использование кабеля во взрывоопасных зонах",
            "index": 12,
            "generator_index": 13,
            "values": []
        },
        {
            "id": "Защита кабеля от подделки",
            "index": 13,
            "generator_index": 14,
            "values": []
        }
    ],
    "exceptions": [
        {
            "reference_id": "Число жил (пар, троек, четверок)",
            "reference_value_id": "10х2",
            "exclude": [
                {
                    "reference_id": "Номинальное сечение жилы",
                    "reference_value_id": "0.5"
                }
            ]
        },
        {
            "reference_id": "Число жил (пар, троек, четверок)",
            "reference_value_id": "5х4",
            "exclude": [
                {
                    "reference_id": "Номинальное сечение жилы",
                    "reference_value_id": "0,2"
                }
            ]
        }
    ],
    "cable": [
        {
            "reference_id": "Число жил (пар, троек, четверок)",
            "reference_value_id": "10х2"
        },
        {
            "reference_id": "Номинальное сечение жилы",
            "reference_value_id": "0,2"
        },
        {
            "reference_id": "Лужение жилы",
            "reference_value_id": "без индекса"
        },
        {
            "reference_id": "Наличие жилы заземления",
            "reference_value_id": "без индекса"
        },
        {
            "reference_id": "Индивидуальный экран каждой жилы (пары, тройки, четверки)",
            "reference_value_id": "без индекса"
        },
        {
            "reference_id": "Изоляция индивидуальных экранов",
            "reference_value_id": "П"
        },
        {
            "reference_id": "Материал оболочки и изоляции",
            "reference_value_id": "В"
        },
        {
            "reference_id": "Общий экран поверх сердечника из всех жил (пар, троек, четверок)",
            "reference_value_id": "без индекса"
        },
        {
            "reference_id": "Броня под наружной оболочкой",
            "reference_value_id": "без индекса"
        }
    ]
}

//import CableWidget from "./UI/app.js";
//import CableWidget from "../dist/bundle.js";
//var cableWidget = new CableWidget('#widget', options);

import { CableViewer } from "./CableViewer";
window.cableViewer = new CableViewer(500);
      