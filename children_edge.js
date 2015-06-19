/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'poster',
                            type: 'image',
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"poster.jpg",'0px','0px']
                        },
                        {
                            id: 'sym-welcome',
                            symbolName: 'sym-welcome',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1024', '768', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'sym-page1',
                            symbolName: 'sym-page1',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1024', '768', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'sym-page2',
                            symbolName: 'sym-page2',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1024', '768', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'sym-logo',
                            symbolName: 'sym-logo',
                            display: 'none',
                            type: 'rect',
                            rect: ['-198px', '-97px', '542', '274', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.24','0.24']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024px', '768px', 'auto', 'auto'],
                            sizeRange: ['','1024px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 56878.25,
                    autoPlay: true,
                    data: [
                        [
                            "eid155",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sym-page2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid156",
                            "display",
                            38500,
                            0,
                            "linear",
                            "${sym-page2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid61",
                            "opacity",
                            3000,
                            250,
                            "linear",
                            "${sym-welcome}",
                            '0',
                            '1'
                        ],
                        [
                            "eid74",
                            "opacity",
                            8011,
                            239,
                            "linear",
                            "${sym-welcome}",
                            '1',
                            '0'
                        ],
                        [
                            "eid54",
                            "scaleX",
                            2000,
                            1000,
                            "linear",
                            "${sym-logo}",
                            '1',
                            '0.24'
                        ],
                        [
                            "eid52",
                            "left",
                            2000,
                            1000,
                            "linear",
                            "${sym-logo}",
                            '280px',
                            '-198px'
                        ],
                        [
                            "eid77",
                            "opacity",
                            8011,
                            239,
                            "linear",
                            "${sym-page1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid154",
                            "opacity",
                            38000,
                            500,
                            "linear",
                            "${sym-page1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid55",
                            "scaleY",
                            2000,
                            1000,
                            "linear",
                            "${sym-logo}",
                            '1',
                            '0.24'
                        ],
                        [
                            "eid2",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${poster}",
                            '1',
                            '0'
                        ],
                        [
                            "eid157",
                            "opacity",
                            38500,
                            500,
                            "linear",
                            "${sym-page2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid58",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sym-welcome}",
                            'none',
                            'none'
                        ],
                        [
                            "eid59",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${sym-welcome}",
                            'none',
                            'block'
                        ],
                        [
                            "eid72",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sym-page1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid75",
                            "display",
                            8011,
                            0,
                            "linear",
                            "${sym-page1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid57",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${sym-logo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid53",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${sym-logo}",
                            '245px',
                            '-97px'
                        ],
                        [
                            "eid50",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sym-logo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid51",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${sym-logo}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "sym-logo": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(2,152,202,1)', '900', 'none solid rgb(2, 152, 202)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text5',
                            text: '（孟鲁司特纳 . 默沙东）',
                            align: 'left',
                            rect: ['0px', '216px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(2,152,202,1)', '900', 'none solid rgb(2, 152, 202)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text',
                            text: '每日一次',
                            align: 'left',
                            rect: ['22px', '0px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [120, 'px'], 'rgba(2,152,202,1)', '900', 'none solid rgb(2, 152, 202)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text2',
                            text: '顺尔宁',
                            align: 'left',
                            rect: ['22px', '71px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(2,152,202,1)', '900', 'none solid rgb(2, 152, 202)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text4',
                            text: '®',
                            align: 'left',
                            rect: ['400px', '81px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '542px', '274px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "sym-welcome": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            id: 'welcom-bg',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/welcom-bg.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/bird.mp3'],
                            id: 'bird',
                            rect: ['656', '289', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            type: 'image',
                            id: 'txt-welcome',
                            rect: ['229px', '52px', '435px', '125px', 'auto', 'auto'],
                            clip: 'rect(0px 0px 125px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/txt-welcome.png', '0px', '0px']
                        },
                        {
                            rect: ['798px', '81px', '97px', '196px', 'auto', 'auto'],
                            id: 'blank-balloon',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/blank-balloon.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 8010.75,
                    autoPlay: true,
                    data: [
                        [
                            "eid70",
                            "top",
                            3750,
                            3500,
                            "linear",
                            "${blank-balloon}",
                            '281px',
                            '81px'
                        ],
                        [
                            "eid67",
                            "clip",
                            3750,
                            1750,
                            "linear",
                            "${txt-welcome}",
                            [0,0,125,0],
                            [0,435,125,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                            [ "eid63", "trigger", 3250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${bird}', [] ] ]
                    ]
                }
            },
            "sym-page1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            id: 'page1-bg',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/page1-bg.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['387px', '557', '115px', '152px', 'auto', 'auto'],
                            id: 'kid-cry',
                            opacity: '1',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/kid-cry.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['387', '557', '116px', '153px', 'auto', 'auto'],
                            id: 'kid-smile-2',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/kid-smile-2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['386px', '557px', '115px', '152px', 'auto', 'auto'],
                            id: 'kid-smile-1',
                            fill: ['rgba(0,0,0,0)', 'images/kid-smile-1.png', '0px', '0px']
                        },
                        {
                            rect: ['364px', '566px', '67px', '61px', 'auto', 'auto'],
                            id: 'cherry-ltra2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cherry-ltra2.png', '0px', '0px']
                        },
                        {
                            rect: ['622px', '442px', '63px', '62px', 'auto', 'auto'],
                            id: 'cherry2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cherry.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            rect: ['175px', '86px', '655px', '597px', 'auto', 'auto'],
                            display: 'block',
                            id: 'page1-chart',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/page1-chart.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            rect: ['398px', '566px', '91px', '50px', 'auto', 'auto'],
                            display: 'block',
                            id: 'page1-chart-block3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/page1-chart-block3.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            rect: ['410px', '588px', '92px', '39px', 'auto', 'auto'],
                            display: 'block',
                            id: 'page1-chart-block2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/page1-chart-block2.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            rect: ['410px', '583px', '92px', '28px', 'auto', 'auto'],
                            display: 'block',
                            id: 'page1-chart-block1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/page1-chart-block1.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/page1.mp3'],
                            id: 'page1',
                            rect: ['495', '278', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 36722,
                    autoPlay: true,
                    data: [
                        [
                            "eid80",
                            "display",
                            8250,
                            0,
                            "linear",
                            "${kid-smile-2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid94",
                            "display",
                            11000,
                            0,
                            "linear",
                            "${kid-smile-2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid86",
                            "display",
                            11250,
                            0,
                            "linear",
                            "${kid-smile-2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid99",
                            "display",
                            8250,
                            0,
                            "linear",
                            "${page1-chart-block2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid117",
                            "display",
                            14000,
                            0,
                            "linear",
                            "${page1-chart-block2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid149",
                            "scaleX",
                            16000,
                            500,
                            "linear",
                            "${page1-chart}",
                            '0',
                            '1'
                        ],
                        [
                            "eid100",
                            "display",
                            8250,
                            0,
                            "linear",
                            "${page1-chart-block3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid131",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${page1-chart-block3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid116",
                            "scaleY",
                            13000,
                            500,
                            "linear",
                            "${page1-chart-block1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid150",
                            "scaleY",
                            16000,
                            500,
                            "linear",
                            "${page1-chart}",
                            '0',
                            '1'
                        ],
                        [
                            "eid114",
                            "top",
                            13000,
                            500,
                            "linear",
                            "${page1-chart-block1}",
                            '583px',
                            '229px'
                        ],
                        [
                            "eid141",
                            "top",
                            15000,
                            500,
                            "linear",
                            "${page1-chart-block3}",
                            '566px',
                            '401px'
                        ],
                        [
                            "eid97",
                            "display",
                            8250,
                            0,
                            "linear",
                            "${page1-chart}",
                            'block',
                            'none'
                        ],
                        [
                            "eid144",
                            "display",
                            16000,
                            0,
                            "linear",
                            "${page1-chart}",
                            'none',
                            'block'
                        ],
                        [
                            "eid98",
                            "display",
                            8250,
                            0,
                            "linear",
                            "${page1-chart-block1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid101",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${page1-chart-block1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid96",
                            "opacity",
                            11000,
                            250,
                            "linear",
                            "${kid-smile-2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid79",
                            "top",
                            10000,
                            500,
                            "linear",
                            "${cherry-ltra2}",
                            '481px',
                            '601px'
                        ],
                        [
                            "eid85",
                            "top",
                            11000,
                            250,
                            "linear",
                            "${cherry-ltra2}",
                            '601px',
                            '566px'
                        ],
                        [
                            "eid115",
                            "scaleX",
                            13000,
                            500,
                            "linear",
                            "${page1-chart-block1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid93",
                            "opacity",
                            11000,
                            250,
                            "linear",
                            "${kid-cry}",
                            '1',
                            '0'
                        ],
                        [
                            "eid82",
                            "display",
                            10587,
                            0,
                            "linear",
                            "${kid-smile-1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid113",
                            "left",
                            13000,
                            500,
                            "linear",
                            "${page1-chart-block1}",
                            '410px',
                            '539px'
                        ],
                        [
                            "eid129",
                            "scaleX",
                            14000,
                            500,
                            "linear",
                            "${page1-chart-block2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid81",
                            "display",
                            8250,
                            0,
                            "linear",
                            "${kid-cry}",
                            'block',
                            'none'
                        ],
                        [
                            "eid83",
                            "display",
                            10587,
                            0,
                            "linear",
                            "${kid-cry}",
                            'none',
                            'block'
                        ],
                        [
                            "eid87",
                            "display",
                            11250,
                            0,
                            "linear",
                            "${kid-cry}",
                            'block',
                            'block'
                        ],
                        [
                            "eid128",
                            "top",
                            14000,
                            500,
                            "linear",
                            "${page1-chart-block2}",
                            '588px',
                            '310px'
                        ],
                        [
                            "eid140",
                            "left",
                            15000,
                            500,
                            "linear",
                            "${page1-chart-block3}",
                            '398px',
                            '539px'
                        ],
                        [
                            "eid130",
                            "scaleY",
                            14000,
                            500,
                            "linear",
                            "${page1-chart-block2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid142",
                            "scaleX",
                            15000,
                            500,
                            "linear",
                            "${page1-chart-block3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid143",
                            "scaleY",
                            15000,
                            500,
                            "linear",
                            "${page1-chart-block3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid127",
                            "left",
                            14000,
                            500,
                            "linear",
                            "${page1-chart-block2}",
                            '410px',
                            '539px'
                        ],
                            [ "eid152", "trigger", 16000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${page1}', [] ] ]
                    ]
                }
            },
            "sym-page2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            id: 'page1-bg2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/page1-bg.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            id: 'page2_chart',
                            type: 'image',
                            rect: ['185px', '86px', '655px', '597px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/page2_chart.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/page2.mp3'],
                            id: 'page2',
                            rect: ['574', '434', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            rect: ['698', '587', '89', '29', 'auto', 'auto'],
                            id: 'sym-page2-button',
                            display: 'block',
                            symbolName: 'sym-page2-button',
                            cursor: 'pointer',
                            type: 'rect'
                        },
                        {
                            rect: ['231', '268', '574', '187', 'auto', 'auto'],
                            display: 'block',
                            symbolName: 'sym-page2-popup',
                            id: 'sym-page2-popup',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 56878.25,
                    autoPlay: true,
                    data: [
                        [
                            "eid162",
                            "scaleX",
                            39000,
                            500,
                            "linear",
                            "${page2_chart}",
                            '0',
                            '1'
                        ],
                        [
                            "eid163",
                            "scaleY",
                            39000,
                            500,
                            "linear",
                            "${page2_chart}",
                            '0',
                            '1'
                        ],
                        [
                            "eid165",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sym-page2-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid166",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sym-page2-button}",
                            'block',
                            'none'
                        ],
                        [
                            "eid167",
                            "display",
                            39500,
                            0,
                            "linear",
                            "${sym-page2-button}",
                            'none',
                            'block'
                        ],
                            [ "eid164", "trigger", 39500, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${page2}', [] ] ]
                    ]
                }
            },
            "sym-page2-button": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '89px', '29px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(16,2,247,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(2, 152, 202)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text6',
                            text: '研究设计',
                            align: 'left',
                            rect: ['9px', '4px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '89px', '29px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "sym-page2-popup": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '20px', '563px', '150px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            fill: ['rgba(255,255,255,1.00)'],
                            id: 'RoundRect2',
                            stroke: [1, 'rgba(0,0,255,1.00)', 'solid'],
                            type: 'rect',
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', ''],
                            type: 'text',
                            id: 'Text7',
                            text: '一项多国、随机、双盲、安慰剂对照的平行分组研究，共纳入689名2-5岁持续性哮喘患儿。2周单盲、安慰剂导入期后，或者随机接受孟鲁司特4mg/日（n=461）或安慰剂（n=228）治疗12周。主要研究终点包括：日、夜间哮喘症状、β激动剂使用、无哮喘天、哮喘发作频率等。',
                            align: 'left',
                            rect: ['15px', '49px', '541px', '138px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym-page2-popup-close',
                            symbolName: 'sym-page2-popup-close',
                            cursor: 'pointer',
                            rect: ['536', '0', '38', '38', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '574px', '187px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "sym-page2-popup-close": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '38px', '38px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [1, 'rgb(0, 0, 255)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,173,0,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text8',
                            text: 'X',
                            align: 'left',
                            rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '38px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("children_edgeActions.js");
})("EDGE-4782395");
