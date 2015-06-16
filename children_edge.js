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
                            id: 'sym-page3',
                            symbolName: 'sym-page3',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1024', '768', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'sym-page4',
                            symbolName: 'sym-page4',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1024', '768', 'auto', 'auto']
                        },
                        {
                            id: 'sym-page5',
                            symbolName: 'sym-page5',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1024', '768', 'auto', 'auto'],
                            opacity: '1'
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
                            "eid314",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sym-page5}",
                            'none',
                            'none'
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
                            "eid277",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sym-page4}",
                            'none',
                            'none'
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
                            "eid169",
                            "opacity",
                            59000,
                            500,
                            "linear",
                            "${sym-page2}",
                            '1',
                            '0'
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
                            "eid172",
                            "opacity",
                            59500,
                            500,
                            "linear",
                            "${sym-page3}",
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
                            "eid170",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sym-page3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid171",
                            "display",
                            59500,
                            0,
                            "linear",
                            "${sym-page3}",
                            'none',
                            'block'
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
                            [ "eid278", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${sym-page4}', [] ] ],
                            [ "eid342", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${sym-page5}', [] ] ],
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
                            type: 'text',
                            rect: ['0px', '216px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text5',
                            text: '（孟鲁司特纳 . 默沙东）',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(2,152,202,1)', '900', 'none solid rgb(2, 152, 202)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['22px', '0px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text',
                            text: '每日一次',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(2,152,202,1)', '900', 'none solid rgb(2, 152, 202)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['22px', '71px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text2',
                            text: '顺尔宁',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [120, 'px'], 'rgba(2,152,202,1)', '900', 'none solid rgb(2, 152, 202)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['400px', '81px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text4',
                            text: '®',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(2,152,202,1)', '900', 'none solid rgb(2, 152, 202)', 'normal', 'break-word', 'nowrap']
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
                            type: 'image',
                            id: 'welcom-bg',
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
                            type: 'image',
                            id: 'blank-balloon',
                            rect: ['798px', '81px', '97px', '196px', 'auto', 'auto'],
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
                            type: 'image',
                            id: 'page1-bg',
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
                            type: 'image',
                            id: 'cherry-ltra2',
                            rect: ['364px', '566px', '67px', '61px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cherry-ltra2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'cherry2',
                            rect: ['622px', '442px', '63px', '62px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cherry.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['0', '0']],
                            display: 'block',
                            rect: ['175px', '86px', '655px', '597px', 'auto', 'auto'],
                            id: 'page1-chart',
                            fill: ['rgba(0,0,0,0)', 'images/page1-chart.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['0', '0']],
                            display: 'block',
                            rect: ['398px', '566px', '91px', '50px', 'auto', 'auto'],
                            id: 'page1-chart-block3',
                            fill: ['rgba(0,0,0,0)', 'images/page1-chart-block3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['0', '0']],
                            display: 'block',
                            rect: ['410px', '588px', '92px', '39px', 'auto', 'auto'],
                            id: 'page1-chart-block2',
                            fill: ['rgba(0,0,0,0)', 'images/page1-chart-block2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['0', '0']],
                            display: 'block',
                            rect: ['410px', '583px', '92px', '28px', 'auto', 'auto'],
                            id: 'page1-chart-block1',
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
                            type: 'image',
                            id: 'page1-bg2',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/page1-bg.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'page2_chart',
                            rect: ['185px', '86px', '655px', '597px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
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
                            type: 'rect',
                            display: 'block',
                            symbolName: 'sym-page2-button',
                            cursor: 'pointer',
                            id: 'sym-page2-button'
                        },
                        {
                            rect: ['231', '268', '574', '187', 'auto', 'auto'],
                            id: 'sym-page2-popup',
                            symbolName: 'sym-page2-popup',
                            type: 'rect',
                            display: 'block'
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
                            "eid162",
                            "scaleX",
                            39000,
                            500,
                            "linear",
                            "${page2_chart}",
                            '0',
                            '1'
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
                            type: 'text',
                            rect: ['9px', '4px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text6',
                            text: '研究设计',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(2, 152, 202)', 'normal', 'break-word', 'nowrap']
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
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)'],
                            id: 'RoundRect2',
                            stroke: [1, 'rgba(0,0,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['15px', '49px', '541px', '138px', 'auto', 'auto'],
                            id: 'Text7',
                            text: '一项多国、随机、双盲、安慰剂对照的平行分组研究，共纳入689名2-5岁持续性哮喘患儿。2周单盲、安慰剂导入期后，或者随机接受孟鲁司特4mg/日（n=461）或安慰剂（n=228）治疗12周。主要研究终点包括：日、夜间哮喘症状、β激动剂使用、无哮喘天、哮喘发作频率等。',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', '']
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
                            type: 'text',
                            rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text8',
                            text: 'X',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap']
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
            },
            "sym-page3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'page3-bg',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/page3-bg.png', '0px', '0px']
                        },
                        {
                            rect: ['346px', '74px', '329px', '89px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect3',
                            stroke: [1, 'rgb(0, 0, 255)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(10,26,252,1.00)']
                        },
                        {
                            rect: ['432px', '97px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap'],
                            id: 'Text9',
                            text: '调研问卷',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['96px', '220px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1.00)', '500', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap'],
                            id: 'Text10',
                            text: '您认可孟鲁司特纳在轻度持续性哮喘治疗中与ICS疗效相当吗？',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            id: 'sym-1',
                            symbolName: 'sym-1',
                            cursor: 'pointer',
                            rect: ['218px', '336px', '48', '48', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym-10',
                            symbolName: 'sym-10',
                            cursor: 'pointer',
                            rect: ['758px', '336px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym-2',
                            symbolName: 'sym-2',
                            cursor: 'pointer',
                            rect: ['278px', '336px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym-3',
                            symbolName: 'sym-3',
                            cursor: 'pointer',
                            rect: ['338px', '336px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym-4',
                            symbolName: 'sym-4',
                            cursor: 'pointer',
                            rect: ['398px', '336px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym-5',
                            symbolName: 'sym-5',
                            cursor: 'pointer',
                            rect: ['458px', '336px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym-6',
                            symbolName: 'sym-6',
                            cursor: 'pointer',
                            rect: ['518px', '336px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym-7',
                            symbolName: 'sym-7',
                            cursor: 'pointer',
                            rect: ['578px', '336px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym-8',
                            symbolName: 'sym-8',
                            cursor: 'pointer',
                            rect: ['638px', '336px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym-9',
                            symbolName: 'sym-9',
                            cursor: 'pointer',
                            rect: ['698px', '336px', null, null, 'auto', 'auto']
                        },
                        {
                            rect: ['85px', '343px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            id: 'Text12',
                            text: '不是',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['870', '343px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            id: 'Text13',
                            text: '是',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            id: 'sym-page3-button',
                            symbolName: 'sym-page3-button',
                            cursor: 'pointer',
                            rect: ['431', '460', '160', '48', 'auto', 'auto']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/page3.mp3'],
                            id: 'page3',
                            rect: ['302', '328', '320px', '45px', 'auto', 'auto'],
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
                    duration: 67164.25,
                    autoPlay: true,
                    data: [
                        [
                            "eid269",
                            "top",
                            60000,
                            0,
                            "linear",
                            "${sym-7}",
                            '336px',
                            '336px'
                        ],
                        [
                            "eid274",
                            "left",
                            60000,
                            0,
                            "linear",
                            "${sym-6}",
                            '518px',
                            '518px'
                        ],
                        [
                            "eid257",
                            "top",
                            60000,
                            0,
                            "linear",
                            "${sym-10}",
                            '336px',
                            '336px'
                        ],
                        [
                            "eid256",
                            "left",
                            60000,
                            0,
                            "linear",
                            "${sym-10}",
                            '758px',
                            '758px'
                        ],
                        [
                            "eid263",
                            "top",
                            60000,
                            0,
                            "linear",
                            "${sym-1}",
                            '336px',
                            '336px'
                        ],
                        [
                            "eid262",
                            "left",
                            60000,
                            0,
                            "linear",
                            "${sym-1}",
                            '218px',
                            '218px'
                        ],
                        [
                            "eid275",
                            "top",
                            60000,
                            0,
                            "linear",
                            "${sym-6}",
                            '336px',
                            '336px'
                        ],
                        [
                            "eid258",
                            "left",
                            60000,
                            0,
                            "linear",
                            "${sym-4}",
                            '398px',
                            '398px'
                        ],
                        [
                            "eid271",
                            "top",
                            60000,
                            0,
                            "linear",
                            "${sym-5}",
                            '336px',
                            '336px'
                        ],
                        [
                            "eid267",
                            "top",
                            60000,
                            0,
                            "linear",
                            "${sym-2}",
                            '336px',
                            '336px'
                        ],
                        [
                            "eid264",
                            "left",
                            60000,
                            0,
                            "linear",
                            "${sym-3}",
                            '338px',
                            '338px'
                        ],
                        [
                            "eid273",
                            "top",
                            60000,
                            0,
                            "linear",
                            "${sym-8}",
                            '336px',
                            '336px'
                        ],
                        [
                            "eid270",
                            "left",
                            60000,
                            0,
                            "linear",
                            "${sym-5}",
                            '458px',
                            '458px'
                        ],
                        [
                            "eid265",
                            "top",
                            60000,
                            0,
                            "linear",
                            "${sym-3}",
                            '336px',
                            '336px'
                        ],
                        [
                            "eid266",
                            "left",
                            60000,
                            0,
                            "linear",
                            "${sym-2}",
                            '278px',
                            '278px'
                        ],
                        [
                            "eid268",
                            "left",
                            60000,
                            0,
                            "linear",
                            "${sym-7}",
                            '578px',
                            '578px'
                        ],
                        [
                            "eid261",
                            "top",
                            60000,
                            0,
                            "linear",
                            "${sym-9}",
                            '336px',
                            '336px'
                        ],
                        [
                            "eid260",
                            "left",
                            60000,
                            0,
                            "linear",
                            "${sym-9}",
                            '698px',
                            '698px'
                        ],
                        [
                            "eid272",
                            "left",
                            60000,
                            0,
                            "linear",
                            "${sym-8}",
                            '638px',
                            '638px'
                        ],
                        [
                            "eid259",
                            "top",
                            60000,
                            0,
                            "linear",
                            "${sym-4}",
                            '336px',
                            '336px'
                        ],
                            [ "eid276", "trigger", 60000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${page3}', [] ] ]
                    ]
                }
            },
            "sym-1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '48px', '48px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect4',
                            stroke: [1, 'rgb(0, 0, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(191,239,251,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['15px', '7px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text11',
                            text: '1',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '48px', '48px']
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
            "sym-2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '48px', '48px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect4',
                            stroke: [1, 'rgb(0, 0, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(191,239,251,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['15px', '7px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text11',
                            text: '2',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '48px', '48px']
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
            "sym-3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '48px', '48px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect4',
                            stroke: [1, 'rgb(0, 0, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(191,239,251,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['15px', '7px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text11',
                            text: '3',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '48px', '48px']
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
            "sym-4": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '48px', '48px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect4',
                            stroke: [1, 'rgb(0, 0, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(191,239,251,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['15px', '7px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text11',
                            text: '4',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '48px', '48px']
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
            "sym-5": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '48px', '48px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect4',
                            stroke: [1, 'rgb(0, 0, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(191,239,251,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['15px', '7px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text11',
                            text: '5',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '48px', '48px']
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
            "sym-6": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '48px', '48px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect4',
                            stroke: [1, 'rgb(0, 0, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(191,239,251,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['15px', '7px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text11',
                            text: '6',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '48px', '48px']
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
            "sym-7": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '48px', '48px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect4',
                            stroke: [1, 'rgb(0, 0, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(191,239,251,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['15px', '7px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text11',
                            text: '7',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '48px', '48px']
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
            "sym-8": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '48px', '48px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect4',
                            stroke: [1, 'rgb(0, 0, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(191,239,251,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['15px', '7px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text11',
                            text: '8',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '48px', '48px']
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
            "sym-9": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '48px', '48px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect4',
                            stroke: [1, 'rgb(0, 0, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(191,239,251,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['15px', '7px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text11',
                            text: '9',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '48px', '48px']
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
            "sym-10": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '48px', '48px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect4',
                            stroke: [1, 'rgb(0, 0, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(191,239,251,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['7px', '7px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text11',
                            text: '10',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '48px', '48px']
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
            "sym-page3-button": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '160px', '48px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect5',
                            stroke: [1, 'rgb(0, 0, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,34,242,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['46px', '7px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text14',
                            text: '提   交',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(255,255,255,1.00)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '160px', '48px']
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
            "sym-page4": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'page3-bg2',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/page3-bg.png', '0px', '0px']
                        },
                        {
                            id: 'left-kid',
                            type: 'image',
                            rect: ['161px', '402px', '105px', '290px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/left-kid.png', '0px', '0px']
                        },
                        {
                            id: 'right-kid2',
                            type: 'image',
                            rect: ['783px', '65px', '137px', '375px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/right-kid.png', '0px', '0px']
                        },
                        {
                            rect: ['198px', '180px', '628px', '409px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'page4-chart',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/page4-chart.png', '0px', '0px']
                        },
                        {
                            rect: ['357px', '282px', '101px', '246px', 'auto', 'auto'],
                            type: 'image',
                            id: 'page4-chart-block1',
                            display: 'block',
                            clip: 'rect(246px 101px 246px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/page4-chart-block1.png', '0px', '0px']
                        },
                        {
                            rect: ['623px', '282px', '101px', '246px', 'auto', 'auto'],
                            type: 'image',
                            id: 'page4-chart-block2',
                            display: 'block',
                            clip: 'rect(246px 101px 246px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/page4-chart-block2.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', ''],
                            rect: ['198px', '635px', '628px', '38px', 'auto', 'auto'],
                            align: 'left',
                            text: '4. Garcia ML, et al. Montelukast, Compared with Fluticasone, for the Treatment of Persistent Asthma among 6-to 14-Year-Old Patients with Mild Asthma: The MOSAIC Study. Pediatrics. 2005;116:360-369.',
                            id: 'Text15',
                            opacity: '0',
                            display: 'block',
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            rect: ['737px', '599px', null, null, 'auto', 'auto'],
                            display: 'block',
                            symbolName: 'sym-page4-button',
                            cursor: 'pointer',
                            id: 'sym-page4-button'
                        },
                        {
                            type: 'rect',
                            display: 'block',
                            symbolName: 'sym-page4-popup',
                            rect: ['225px', '273px', null, null, 'auto', 'auto'],
                            id: 'sym-page4-popup'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/page4.mp3'],
                            id: 'page4',
                            rect: ['373', '169', '320px', '45px', 'auto', 'auto'],
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
                    duration: 98000,
                    autoPlay: false,
                    labels: {
                        "play-point": 67500
                    },
                    data: [
                        [
                            "eid281",
                            "display",
                            67500,
                            0,
                            "linear",
                            "${page4-chart}",
                            'block',
                            'none'
                        ],
                        [
                            "eid287",
                            "display",
                            70500,
                            0,
                            "linear",
                            "${page4-chart}",
                            'none',
                            'block'
                        ],
                        [
                            "eid284",
                            "display",
                            67500,
                            0,
                            "linear",
                            "${Text15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid305",
                            "display",
                            72000,
                            0,
                            "linear",
                            "${Text15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid309",
                            "opacity",
                            72000,
                            500,
                            "linear",
                            "${sym-page4-button}",
                            '0',
                            '1'
                        ],
                        [
                            "eid304",
                            "clip",
                            71000,
                            1000,
                            "linear",
                            "${page4-chart-block2}",
                            [246,101,246,0],
                            [0,101,246,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid293",
                            "scaleY",
                            70500,
                            500,
                            "linear",
                            "${page4-chart}",
                            '0',
                            '1'
                        ],
                        [
                            "eid286",
                            "display",
                            67500,
                            0,
                            "linear",
                            "${page4-chart-block1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid294",
                            "display",
                            71000,
                            0,
                            "linear",
                            "${page4-chart-block1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid307",
                            "opacity",
                            72000,
                            500,
                            "linear",
                            "${Text15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid279",
                            "top",
                            67500,
                            3000,
                            "linear",
                            "${left-kid}",
                            '402px',
                            '122px'
                        ],
                        [
                            "eid297",
                            "clip",
                            71000,
                            1000,
                            "linear",
                            "${page4-chart-block1}",
                            [246,101,246,0],
                            [0,101,246,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid292",
                            "scaleX",
                            70500,
                            500,
                            "linear",
                            "${page4-chart}",
                            '0',
                            '1'
                        ],
                        [
                            "eid280",
                            "top",
                            67500,
                            3000,
                            "linear",
                            "${right-kid2}",
                            '335px',
                            '65px'
                        ],
                        [
                            "eid282",
                            "display",
                            67500,
                            0,
                            "linear",
                            "${sym-page4-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid285",
                            "display",
                            67500,
                            0,
                            "linear",
                            "${page4-chart-block2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid298",
                            "display",
                            71000,
                            0,
                            "linear",
                            "${page4-chart-block2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid283",
                            "display",
                            67500,
                            0,
                            "linear",
                            "${sym-page4-button}",
                            'block',
                            'none'
                        ],
                        [
                            "eid308",
                            "display",
                            72000,
                            0,
                            "linear",
                            "${sym-page4-button}",
                            'none',
                            'block'
                        ],
                            [ "eid310", "trigger", 71000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${page4}', [] ] ]
                    ]
                }
            },
            "sym-page4-button": {
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
                            type: 'text',
                            rect: ['9px', '4px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text6',
                            text: '研究设计',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(2, 152, 202)', 'normal', 'break-word', 'nowrap']
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
            "sym-page4-popup": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '20px', '563px', '215px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)'],
                            id: 'RoundRect2',
                            stroke: [1, 'rgba(0,0,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['15px', '49px', '541px', '138px', 'auto', 'auto'],
                            id: 'Text7',
                            text: 'MOSAIC研究是一项多中心、随机、双盲、双模拟、平行分组的非劣效研究，旨在比较口服孟鲁司特5mg qd与吸入氟替卡松100μg bid对哮喘无急救天数的改善。研究共纳入994例6-14岁的轻度持续性哮喘患儿，4周单盲、安慰剂导入期后，患者随机接受口服孟鲁司特5mg qd（若患者年龄满15岁，给予10mg qd, n=495）或吸入氟替卡松100μg bid（n=449）治疗12个月。主要研究终点为1年中哮喘无急救天数比例。若95%CI的下线在-7%以上，则认为孟鲁司特非劣效于氟替卡松。',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', '']
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
            "sym-page5": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'page3-bg3',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/page3-bg.png', '0px', '0px']
                        },
                        {
                            id: 'left-kid2',
                            type: 'image',
                            rect: ['161px', '122px', '105px', '290px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/left-kid.png', '0px', '0px']
                        },
                        {
                            id: 'right-kid3',
                            type: 'image',
                            rect: ['783px', '65px', '137px', '375px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/right-kid.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', ''],
                            rect: ['200px', '547px', '521px', '44px', 'auto', 'auto'],
                            align: 'left',
                            text: '4. Garcia ML, et al. Montelukast, Compared with Fluticasone, for the Treatment of Persistent Asthma among 6-to 14-Year-Old Patients with Mild Asthma: The MOSAIC Study. Pediatrics. 2005;116:360-369.',
                            id: 'Text16',
                            opacity: '0',
                            display: 'block',
                            type: 'text'
                        },
                        {
                            rect: ['200px', '119px', '624px', '409px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'page5-chart',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/page5-chart.png', '0px', '0px']
                        },
                        {
                            rect: ['293px', '228px', '485px', '201px', 'auto', 'auto'],
                            type: 'image',
                            id: 'page5-line',
                            display: 'block',
                            clip: 'rect(0px 0px 201px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/page5-line.png', '0px', '0px']
                        },
                        {
                            rect: ['298px', '228', '485px', '201px', 'auto', 'auto'],
                            type: 'image',
                            id: 'page5-desc',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/page5-desc.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            rect: ['733px', '547px', null, null, 'auto', 'auto'],
                            display: 'block',
                            symbolName: 'sym-page5-button',
                            cursor: 'pointer',
                            id: 'sym-page5-button'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'sym-page5-popup',
                            rect: ['225px', '197px', null, null, 'auto', 'auto'],
                            id: 'sym-page5-popup'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/page5.mp3'],
                            id: 'page5',
                            rect: ['266', '196', '320px', '45px', 'auto', 'auto'],
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
                    duration: 131092.5,
                    autoPlay: true,
                    labels: {
                        "page5-playpoint": 98000
                    },
                    data: [
                        [
                            "eid322",
                            "display",
                            99500,
                            0,
                            "linear",
                            "${Text16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid335",
                            "display",
                            101500,
                            0,
                            "linear",
                            "${Text16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid340",
                            "opacity",
                            101500,
                            500,
                            "linear",
                            "${sym-page5-button}",
                            '0',
                            '1'
                        ],
                        [
                            "eid320",
                            "display",
                            99500,
                            0,
                            "linear",
                            "${page5-line}",
                            'block',
                            'none'
                        ],
                        [
                            "eid329",
                            "display",
                            100000,
                            0,
                            "linear",
                            "${page5-line}",
                            'none',
                            'block'
                        ],
                        [
                            "eid313",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sym-page5-popup}",
                            'none',
                            'none'
                        ],
                        [
                            "eid317",
                            "display",
                            99500,
                            0,
                            "linear",
                            "${sym-page5-popup}",
                            'none',
                            'none'
                        ],
                        [
                            "eid321",
                            "display",
                            99500,
                            0,
                            "linear",
                            "${page5-chart}",
                            'none',
                            'block'
                        ],
                        [
                            "eid328",
                            "scaleY",
                            99500,
                            500,
                            "linear",
                            "${page5-chart}",
                            '0',
                            '1'
                        ],
                        [
                            "eid337",
                            "opacity",
                            101500,
                            500,
                            "linear",
                            "${Text16}",
                            '0',
                            '1'
                        ],
                        [
                            "eid318",
                            "display",
                            99500,
                            0,
                            "linear",
                            "${sym-page5-button}",
                            'block',
                            'none'
                        ],
                        [
                            "eid338",
                            "display",
                            101500,
                            0,
                            "linear",
                            "${sym-page5-button}",
                            'none',
                            'block'
                        ],
                        [
                            "eid319",
                            "display",
                            99500,
                            0,
                            "linear",
                            "${page5-desc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid332",
                            "display",
                            101000,
                            0,
                            "linear",
                            "${page5-desc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid334",
                            "opacity",
                            101000,
                            500,
                            "linear",
                            "${page5-desc}",
                            '0',
                            '1'
                        ],
                        [
                            "eid331",
                            "clip",
                            100000,
                            1000,
                            "linear",
                            "${page5-line}",
                            [0,0,201,0],
                            [0,485,201,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid327",
                            "scaleX",
                            99500,
                            500,
                            "linear",
                            "${page5-chart}",
                            '0',
                            '1'
                        ],
                            [ "eid341", "trigger", 100000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${page5}', [] ] ]
                    ]
                }
            },
            "sym-page5-button": {
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
                            type: 'text',
                            rect: ['9px', '4px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text6',
                            text: '研究设计',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(2, 152, 202)', 'normal', 'break-word', 'nowrap']
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
            "sym-page5-popup": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '20px', '563px', '285px', 'auto', 'auto'],
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
                            text: '一项为期52周的多中心、随机、对照的开放性研究，共纳入395例2-8岁的轻度持续性哮喘或反复性哮喘患儿，随机吸入布地奈德0.5mg qd（n=197）或口服孟鲁司特4mg或5mg qd（n=198）治疗52周。轻度哮喘急性发作时，患者每日加用1次布地奈德0.5mg雾化吸入治疗，持续14天，重度发作时，患者接受口服激素治疗，持续3-10天。主要疗效终点为52周内因哮喘急性发作而第一次加用其他哮喘药物的时间。次要终点包括12周和26周时第一次加用其他药物的时间，12周、26周和52周时第一次哮喘发作（轻度和重度）的时间，52周内哮喘发作，日记参数（如呼气峰流速PEF），或者报告的结果和医生、护士的评估。',
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("children_edgeActions.js");
})("EDGE-4782395");
