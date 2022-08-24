import * as THREE from "three";
import CommonComponent from "../CommonComponent";
import * as Color from "../../utils/Color";
import CanvasTexture from "../../utils/CanvasTexture";
import {actionRotateXYZ} from "../../utils/rotateObject";

class Exp05CubePhong extends CommonComponent {
    constructor(opt?: { name?: string }) {
        super();
        let cubeGeometry = new THREE.BoxGeometry(5, 5, 5);
        // 有光照效果，金属光泽表面
        let material = new THREE.MeshPhongMaterial({
            color: 0xdd0000,
            emissive: 0x0000cc,  //材质本身发出的颜色，不受其它光照影响，默认为黑色。光照下与color颜色混合
            shininess: 100,  //光滑度，指定高光部分的亮度，默认值为30
            specular: 0xffffff //材料高光部分的颜色，默认值为0x111111深灰色，如果把它的颜色设置为跟color颜色一样的话，会得到类似金属一样的材质，设置成灰色，则看起来更像塑料
        });
        let box = new THREE.Mesh(cubeGeometry, material);
        box.name = opt?.name || this.getClassName();
        box.castShadow = true;
        this.object3Ds.push(box);
    }

    update() {
        this.object3Ds.forEach(e => {
            actionRotateXYZ(e, 0.005)
        })
    }
}

export default Exp05CubePhong