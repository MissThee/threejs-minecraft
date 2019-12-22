import * as THREE from "three";
import GlobalSetting from "../setting/GlobalSetting";

export const lightHighIntensity = 1;
export const lightLowIntensity = 0.3;
export const lightCurrentIntensity = 1;
export const lightValueBecomeHigher = true;

export function initAmbientLight() {
    let light = new THREE.AmbientLight();//环境光
    light.castShadow = false;
    light.color = new THREE.Color().setHex(0xffffff);
    light.intensity = getAmbientLightIntensity();
    return light;
}

export function getAmbientLightIntensity(lightCurrentIntensity, lightHighIntensity, lightLowIntensity) {
    return Math.min(Math.max(lightLowIntensity, lightCurrentIntensity), lightHighIntensity);
}

export function initDirectionalLight() {
    let light = new THREE.DirectionalLight();//环境光
    light.castShadow = GlobalSetting.enableShadow;
    light.color = new THREE.Color().setHex(0xffffff);
    light.intensity = getDirectionalLightIntensity();
    light.shadow.radius = 512;
    light.position.x = 10;
    light.position.y = -10;
    light.position.z = 10;
    return light;
}

export function getDirectionalLightIntensity(lightCurrentIntensity, lightHighIntensity, lightLowIntensity) {
    return Math.min(Math.max(lightLowIntensity, lightCurrentIntensity), lightHighIntensity) / 4;
}
