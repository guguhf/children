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
                            id: 'background',
                            display: 'none',
                            volume: '0.3',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['164', '166', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"background.mp3"],
                            preload: 'auto'
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
                    duration: 230740.491,
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
                        ],
                            [ "eid62", "trigger", 3250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${background}', [] ] ]
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
                            rect: ['0px', '216px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(2,152,202,1)', '900', 'none solid rgb(2, 152, 202)', 'normal', 'break-word', 'nowrap'],
                            id: 'Text5',
                            text: '（孟鲁司特纳 . 默沙东）',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['22px', '0px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(2,152,202,1)', '900', 'none solid rgb(2, 152, 202)', 'normal', 'break-word', 'nowrap'],
                            id: 'Text',
                            text: '每日一次',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['22px', '71px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [120, 'px'], 'rgba(2,152,202,1)', '900', 'none solid rgb(2, 152, 202)', 'normal', 'break-word', 'nowrap'],
                            id: 'Text2',
                            text: '顺尔宁',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['400px', '81px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(2,152,202,1)', '900', 'none solid rgb(2, 152, 202)', 'normal', 'break-word', 'nowrap'],
                            id: 'Text4',
                            text: '®',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '542px', '274px']
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
                            id: 'welcom-bg',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
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
                            rect: ['229px', '52px', '435px', '125px', 'auto', 'auto'],
                            id: 'txt-welcome',
                            type: 'image',
                            clip: 'rect(0px 0px 125px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/txt-welcome.png', '0px', '0px']
                        },
                        {
                            id: 'blank-balloon',
                            type: 'image',
                            rect: ['798px', '81px', '97px', '196px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/blank-balloon.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1024px', '768px']
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
                            id: 'page1-bg',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/page1-bg.png', '0px', '0px']
                        },
                        {
                            rect: ['387px', '557', '115px', '152px', 'auto', 'auto'],
                            type: 'image',
                            id: 'kid-cry',
                            opacity: '1',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/kid-cry.png', '0px', '0px']
                        },
                        {
                            rect: ['387', '557', '116px', '153px', 'auto', 'auto'],
                            type: 'image',
                            id: 'kid-smile-2',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/kid-smile-2.png', '0px', '0px']
                        },
                        {
                            rect: ['386px', '557px', '115px', '152px', 'auto', 'auto'],
                            id: 'kid-smile-1',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/kid-smile-1.png', '0px', '0px']
                        },
                        {
                            id: 'cherry-ltra2',
                            type: 'image',
                            rect: ['364px', '566px', '67px', '61px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cherry-ltra2.png', '0px', '0px']
                        },
                        {
                            id: 'cherry2',
                            type: 'image',
                            rect: ['622px', '442px', '63px', '62px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cherry.png', '0px', '0px']
                        },
                        {
                            rect: ['175px', '86px', '655px', '597px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'page1-chart',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/page1-chart.png', '0px', '0px']
                        },
                        {
                            rect: ['398px', '566px', '91px', '50px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'page1-chart-block3',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/page1-chart-block3.png', '0px', '0px']
                        },
                        {
                            rect: ['410px', '588px', '92px', '39px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'page1-chart-block2',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/page1-chart-block2.png', '0px', '0px']
                        },
                        {
                            rect: ['410px', '583px', '92px', '28px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'page1-chart-block1',
                            type: 'image',
                            display: 'block',
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
                            isStage: 'true',
                            rect: [undefined, undefined, '1024px', '768px']
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
                            id: 'page1-bg2',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/page1-bg.png', '0px', '0px']
                        },
                        {
                            id: 'page2_chart',
                            type: 'image',
                            rect: ['185px', '86px', '655px', '597px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/page2_chart.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1024px', '768px']
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
