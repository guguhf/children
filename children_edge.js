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
                            id: 'background',
                            display: 'none',
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("children_edgeActions.js");
})("EDGE-4782395");
