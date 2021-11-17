import * as THREE from "three";
import GlobalSetting from "../setting/GlobalSetting";


export function initAmbientLight() {
    let light = new THREE.AmbientLight();//环境光
    light.castShadow = false;
    light.color = new THREE.Color().setHex(0xffffff);
    light.intensity = getAmbientLightIntensity();
    return light;
}

export function getAmbientLightIntensity(lightCurrentIntensity?: number, lightHighIntensity?: number, lightLowIntensity?: number) {
    return Math.min(Math.max(lightLowIntensity || 0, lightCurrentIntensity || 0), lightHighIntensity || 0);
}

export function initDirectionalLight() {
    let light = new THREE.DirectionalLight();//环境光
    light.castShadow = GlobalSetting.enableShadow;
    light.color = new THREE.Color().setHex(0xffffff);
    light.intensity = getDirectionalLightIntensity();
    light.shadow.radius = 512;
    light.position.x = 100;
    light.position.y = 100;
    light.position.z = 100;
    return light;
}

export function getDirectionalLightIntensity(lightCurrentIntensity?: number, lightHighIntensity?: number, lightLowIntensity?: number) {
    return Math.min(Math.max(lightLowIntensity || 0, lightCurrentIntensity || 0), lightHighIntensity || 0) / 4;
}
