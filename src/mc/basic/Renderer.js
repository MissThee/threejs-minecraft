import * as THREE from "three";
import GlobalSetting from "../setting/GlobalSetting";

export function initRenderer() {
    let renderer = new THREE.WebGLRenderer();
    renderer.name = 'RENDERER';
    // renderer.antialias = true;//是否开启反锯齿
    renderer.shadowMap.enabled =  GlobalSetting.enableShadow;
    // renderer.shadowMap.type = THREE.PCFSoftShadowMap;//更柔和的影子，需要的性能更高
    // renderer.setSize(width, height);
    renderer.setClearColor(0xFFFFFF, 1.0);//背景颜色
    return renderer
}