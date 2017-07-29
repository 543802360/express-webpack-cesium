# express-webpack-cesium
---

# Introduction
This is a demo of using express and webpack to build Cesium application,you can use es6 to write your code，jquery and echarts also integrated as an example to show how to import the third-party library.

## How to use 
- install the depencies
> 
```
npm install
```
- build 
```
npm run build
```
- start
```
npm start
```

enter the http://127.0.0.1:3000 in the browser

## Issues
when use the Cesium 1.35,I encounter the same issue with this：https://github.com/AnalyticalGraphicsInc/cesium/issues/5417 ,but Cesium1.31 does not.


---
将之前ES5写的两个类改写成了ES6的，确实ES6的class只是语法糖，其实现机制与ES5仍然是一致的，只不过写法上更接近于面向对象编程。其中Panel勉强可以算做一个简单的组件，不过CSS和JS混在了一起，非常丑陋。这也正是web组件化的必然，学习Angular，正好阿里就快发布他们的Angular组件库了，需要好好学一学了