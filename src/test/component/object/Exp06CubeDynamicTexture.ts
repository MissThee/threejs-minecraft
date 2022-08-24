import * as THREE from "three";
import CommonComponent from "../CommonComponent";
import * as Color from "../../utils/Color";
import CanvasTexture from "../../utils/CanvasTexture";
import Clock from "../../utils/Clock";

// canvas绘制钟表材质方块。动态材质
class Exp06CubeDynamicTexture extends CommonComponent {
    declare object3Ds: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>[]

    constructor(opt?: { name?: string }) {
        super();
        let cubeGeometry = new THREE.BoxGeometry(5, 5, 5);
        let texture = new THREE.Texture(Clock());//材质
        let material = new THREE.MeshBasicMaterial({map: texture});

        let box = new THREE.Mesh(cubeGeometry, material);
        box.name = opt?.name || this.getClassName();
        box.castShadow = true;
        this.object3Ds.push(box);
    }

    update() {
        this.object3Ds.forEach(e => {
            e.material.map!.needsUpdate = true;
        }) //材质刷新
    }
}

export default Exp06CubeDynamicTexture