 //require('../../stylesheets/style.css');
 //
 import Person from './person';

 window.CESIUM_BASE_URL = "./javascripts/dist/cesium";
 require("cesium/Build/Cesium/Widgets/widgets.css");
 require("cesium/Build/CesiumUnminified/Cesium.js");
 require('../../stylesheets/style.css');
 var Cesium = window.Cesium;
 const viewer = new Cesium.Viewer("CesiumContainer");

 console.log(new Person({ name: 'bluce', age: 32 }).sayHello());
 console.log(new Person({ name: '琳达', age: 33 }.sayHello()));