 import Person from './person';
 import $ from 'jquery';
 import echarts from 'echarts';

 const App = {};

 //require and config cesium
 window.CESIUM_BASE_URL = "./javascripts/dist/cesium";
 require("cesium/Build/Cesium/Widgets/widgets.css");
 require("cesium/Build/CesiumUnminified/Cesium.js");
 require('../../stylesheets/style.css');
 const Cesium = window.Cesium;

 //setting the  cesium default view to China
 Cesium.Camera.DEFAULT_VIEW_RECTANGLE = new Cesium.Rectangle.fromDegrees(75.0, -30.0, 130.0, 90.0);
 Cesium.Camera.DEFAULT_VIEW_FACTOR = 0;

 //init cesium viewer
 const viewer = new Cesium.Viewer("CesiumContainer", {
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
     mapProjection: new Cesium.GeographicProjection(),
     scene3DOnly: true,
     terrainProvider: new Cesium.CesiumTerrainProvider({
         url: 'https://assets.agi.com/stk-terrain/world/',
         requestVertexNormals: true,
         requestWaterMask: true
     }),
     imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
         url: 'http://{s}.tianditu.com/img_w/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=img&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles',
         layer: 'img',
         style: 'default',
         format: 'tiles',
         tileMatrixSetID: 'w',
         credit: new Cesium.Credit('天地图影像'),
         subdomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
         minimumLevel: 0,
         maximumLevel: 19
     })
 });

 // test vendors
 (function() {

     console.log('jquery', $);
     console.log('echarts version is :', echarts.version);
     console.log('Cesium version is :', Cesium.VERSION);
     console.log(new Person({ name: 'bluce', age: 32 }).sayHello());
     console.log(new Person({ name: 'linda', age: 33 }).sayHello());
 })();