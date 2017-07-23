 //require('../../stylesheets/style.css');
 //
 import Person from './person';
 import echarts from 'echarts';
 import $ from 'jquery';

 const path = __dirname;
 window.CESIUM_BASE_URL = path;

 require('../lib/cesium/Build/Cesium/Cesium');
 require('../lib/cesium/Build/Cesium/Widgets/widgets.css');

 const Cesium = window.Cesium;
 const App = {};

 var test = function() {

     //  let $ = require('jquery');
     //  let echarts = require('echarts');
     console.log($);
     console.log('echarts版本：', echarts.version);
     console.log(new Person({ name: 'bluce', age: 32 }).sayHello());
     console.log('当前Cesium版本：', Cesium.version);

 }
 test();
 let viewer = new Cesium.Viewer('CesiumContainer');