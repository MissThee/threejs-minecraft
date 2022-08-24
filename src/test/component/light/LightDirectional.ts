import * as THREE from "three";
import CommonComponent from "../CommonComponent";

class LightAmbient extends CommonComponent {
    constructor(opt?: { name?: string }) {
        super()
        const light = new THREE.DirectionalLight(0xffffff, 0.5);//平行光。与面法线角度越大，面亮度越低
        light.name = opt?.name || this.getClassName()
        light.position.set(0, 100, 0);
        light.castShadow = true
        // 物体在camera范围内，才可生成阴影
        const viewSize = 100
        light.shadow.camera.left = -viewSize;
        light.shadow.camera.right = viewSize;
        light.shadow.camera.top = viewSize;
        light.shadow.camera.bottom = -viewSize;
        light.shadow.camera.near = 1;
        light.shadow.camera.far = 200;
        light.shadow.mapSize.x = 1024 // 定义阴影贴图的宽度和高度,必须为2的整数此幂
        light.shadow.mapSize.y = 1024 // 较高的值会以计算时间为代价提供更好的阴影质量
        this.object3Ds.push(light);
    }
}

export default LightAmbient
