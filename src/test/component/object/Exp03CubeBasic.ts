import * as THREE from "three";
import CommonComponent from "../CommonComponent";
import * as Color from "../../utils/Color";
import CanvasTexture from "../../utils/CanvasTexture";
import {actionRotateXYZ} from "../../utils/rotateObject";

class Exp03CubeBasic extends CommonComponent {
    constructor(opt?: { name?: string }) {
        super();
        let cubeGeometry = new THREE.BoxGeometry(3, 3, 3);

        let materials: THREE.Material[] = []
        const color = [Color.Goldenrod, Color.Firebrick, Color.DeepSkyBlue, Color.LimeGreen, Color.White, Color.Yellow];
        for (let i = 0; i < 6; i++) {
            let texture = new THREE.Texture(new CanvasTexture(color[i]).canvas);
            texture.needsUpdate = true;
            //无光照效果，有颜色
            materials.push(new THREE.MeshBasicMaterial({
                map: texture,
                color: 0xffffff,
            }));
        }
        let box = new THREE.Mesh(cubeGeometry, materials);
        box.name = opt?.name || this.getClassName();
        box.castShadow = true;
        this.object3Ds.push(box);
    }

    update() {
        this.object3Ds.forEach(e => {
            actionRotateXYZ(e)
        })
    }
}


export default Exp03CubeBasic