import * as THREE from "three";
import CommonComponent from "../CommonComponent";

class LightAmbient extends CommonComponent {
    constructor(opt?: { name?: string }) {
        super()
        const light = new THREE.AmbientLight(0xffffff, 0.3)
        light.name = opt?.name || this.getClassName()
        this.object3Ds.push(light);//环境光。让物体变亮
    }
}

export default LightAmbient
