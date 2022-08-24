import * as THREE from "three";
import CommonComponent from "../CommonComponent";
import CanvasTexture from "../../utils/CanvasTexture";
import * as Images from "../../assets/img";
// 图片贴图，一个图片
class Exp07CubeOnePic extends CommonComponent {
    constructor(opt?: { name?: string }) {
        super();
        let geometry = new THREE.BoxGeometry(5, 5, 5);
        //二选一
        //1、使用TextureLoader加载图片作为素材------------start
        let texture = new THREE.TextureLoader().load(Images.wood);
        //-----------------------------------------------end
        //2、使用canvas作为素材---------------------------start
        //let canvas = canvasTexture(null, Images.wood);
        //let texture = new THREE.Texture(canvas);
        //texture.needsUpdate = true;
        //-----------------------------------------------end
        let material = new THREE.MeshBasicMaterial({map: texture});
        let box = new THREE.Mesh(geometry, material);
        box.name = opt?.name || this.getClassName();
        box.castShadow = true;
        this.object3Ds.push(box);
    }
}

export default Exp07CubeOnePic
