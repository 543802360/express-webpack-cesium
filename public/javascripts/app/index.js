import Person from './person';
import $ from 'jquery';
import echarts from 'echarts';
import {Cesium, QThreeEngine} from './QThreeEngine.js';
import Panel from './Panel.js';

/**
 * 初始化Engine
 */
const engine = new QThreeEngine('CesiumContainer', {
    animation: false,
    baseLayerPicker: false,
    fullscreenButton: true,
    vrButton: true,
    geocoder: true,
    homeButton: true,
    infoBox: true,
    sceneModePicker: false,
    selectionIndicator: true,
    timeline: false,
    navigationHelpButton: true,
    scene3DOnly: true,
    mapProjection: new Cesium.GeographicProjection(),
    imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
        url: 'http://{s}.tianditu.com/img_w/wmts?service=WMTS&version=1.0.0&request=GetTile&ti' +
                'lematrix={TileMatrix}&layer=img&style={style}&tilerow={TileRow}&tilecol={TileCol' +
                '}&tilematrixset={TileMatrixSet}&format=tiles',
        layer: 'img',
        style: 'default',
        format: 'tiles',
        tileMatrixSetID: 'w',
        credit: new Cesium.Credit('天地图影像'),
        subdomains: [
            't0',
            't1',
            't2',
            't3',
            't4',
            't5',
            't6',
            't7'
        ],
        minimumLevel: 0,
        maximumLevel: 19
    })
});

/**
 * 测试面板类
 */
new Panel('tip-panel')
    .setContent('Express+Webpack+ES6+Cesium示例')
    .setTitle('提示')
    .show();
// test vendors
(() => {

    console.log('jquery', $);
    console.log('echarts version is :', echarts.version);
    console.log('Cesium version is :', Cesium.VERSION);
    console.log('Engine：', engine);
    console.log('Cesium:', Cesium);
    console.log(new Person({name: 'bluce', age: 32}).sayHello());
    console.log(new Person({name: 'linda', age: 33}).sayHello());

})();