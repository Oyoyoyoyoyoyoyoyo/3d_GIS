/*
 * @Author: your name
 * @Date: 2020-08-31 16:06:28
 * @LastEditTime: 2020-08-31 18:08:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \3d_GIS\project\src\index.js
 */

import { Cesium3DTileset, createWorldTerrain, IonResource, Viewer, Ion, GeoJsonDataSource } from 'cesium';
import "../node_modulesbak/cesium/Build/Cesium/Widgets/widgets.css";
import "./css/main.css";

// 全局函数
let viewer;
initCesium();
addAllPrivnceLayer();
/**
 * 
 * 初始化Cesium
 */
function initCesium() {
    Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxMzgxMTNhZS1mNTI3LTQ5MzQtOGU3Ni01ZTNiYjQyMzBiZTYiLCJpZCI6MjU4NTcsImlhdCI6MTU5ODUyMzYzMX0.qiwWAtBYE8ofh4tXGC185ALDTEK0sQggiyeh1EfQY5c';
    // 默认设置
    viewer = new Viewer('cesiumContainer', {
        animation: false,
        baseLayerPicker: false,
        fullscreenButton: false,
        timeline: false,
        sceneModePicker: false,
        navigationHelpButton: false,
        // terrainProvider: createWorldTerrain()
    });
    viewer._cesiumWidget._creditContainer.style.display = "none";//关闭版权
    viewer.scene.globe.enableLighting = true;//根据时间光照变化

}
/**
 * 添加全省地图数据
 */
function addAllPrivnceLayer() {
    const json = require('./510000.json');
    console.log('json: ', json);
    // console.log("GeoJsonDataSource", GeoJsonDataSource, require("./data/510000.json"));
    // console.log("GeoJsonDataSource.load('./data/510000.geojson')",GeoJsonDataSource.load('./data/510000.geojson'));
    // viewer.dataSources.add(GeoJsonDataSource.load('./data/510000.geojson'));
    const geojsonOptions = {
        clampToGround: true
    };
    // const geoJsonDataSource = new GeoJsonDataSource();
    const scPromise = GeoJsonDataSource.load('/510000.json');
    scPromise.then(function (data) {
        console.log('data: ', data);
        viewer.dataSources.add(data)
    });
}