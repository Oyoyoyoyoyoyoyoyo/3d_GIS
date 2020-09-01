
import { Cesium3DTileset, createWorldTerrain, IonResource, Viewer } from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";
import "./css/main.css";


var viewer = new Viewer('cesiumContainer', {
    animation: false,
    baseLayerPicker: false,
    fullscreenButton: false,
    timeline: false,
    sceneModePicker: false,
    navigationHelpButton: false,
    terrainProvider: createWorldTerrain()
});
viewer.scene.globe.enableLighting = true;//根据时间光照变化
viewer._cesiumWidget._creditContainer.style.display = "none";//关闭版权
var tileset = new Cesium3DTileset({
    url: IonResource.fromAssetId(40866)
});

viewer.scene.primitives.add(tileset);
viewer.zoomTo(tileset);
