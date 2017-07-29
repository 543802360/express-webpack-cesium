/**
 * Cesium上层封装类，可自行扩展
 */

window.CESIUM_BASE_URL = "./javascripts/dist/cesium";
require("cesium/Build/Cesium/Widgets/widgets.css");
require("cesium/Build/CesiumUnminified/Cesium.js");
require('../../stylesheets/style.css');

const Cesium = window.Cesium;

//setting the  cesium default view to China
Cesium.Camera.DEFAULT_VIEW_RECTANGLE = new Cesium
    .Rectangle
    .fromDegrees(75.0, -30.0, 130.0, 90.0);
Cesium.Camera.DEFAULT_VIEW_FACTOR = 0;

/**
  *
  * Define a custom Engine
  * @class QThreeEngine
  */
class QThreeEngine {
    constructor(container, option) {
        this.viewer = new Cesium.Viewer(container, option);
    }

    setDefaultView() {}
    zoomTo(rectangle) {
        //缩放飞行时间为2s
        let scene = this.viewer.scene;
        let duration = 2;

        let destination = scene
            .camera
            .getRectangleCameraCoordinates(rectangle);
        let mag = Cesium
            .Cartesian3
            .magnitude(destination);
        mag += mag * Cesium.Camera.DEFAULT_VIEW_FACTOR;
        Cesium
            .Cartesian3
            .normalize(destination, destination);
        Cesium
            .Cartesian3
            .multiplyByScalar(destination, mag, destination);

        scene
            .camera
            .flyTo({destination: destination, duration: duration, endTransform: Cesium.Matrix4.IDENTITY});
    }
    get imageryLayers() {
        return this.viewer.imageryLayers;
    }

}

export {Cesium, QThreeEngine};