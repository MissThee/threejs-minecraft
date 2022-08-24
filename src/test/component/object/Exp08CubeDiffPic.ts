import * as THREE from "three";
import CommonComponent from "../CommonComponent";
import * as Color from "../../utils/Color";
import CanvasTexture from "../../utils/CanvasTexture";
import Clock from "../../utils/Clock";
import * as Images from "../../assets/img";

// 图片贴图，6个图片
class Exp08CubeDiffPic extends CommonComponent {
    constructor(opt?: { name?: string }) {
        super();
        const images = [
            Images.image1,
            Images.image2,
            Images.image3,
            Images.image4,
            Images.image5,
            Images.image6,
        ];
        let materials: THREE.Material[] = [];
        let textureLoader = new THREE.TextureLoader();
        images.forEach((image) => {
            let texture = textureLoader.load(image);
            texture.generateMipmaps = false;
            texture.magFilter = THREE.NearestFilter;
            texture.minFilter = THREE.NearestFilter;
            materials.push(new THREE.MeshLambertMaterial({
                color: 0xeebbbb,
                // emissive:0x00cc00,
                map: texture,
                fog: false,
            }));
        })
        let box = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5), materials);
        box.name  = opt?.name || this.getClassName();
        box.castShadow = true;
        this.object3Ds.push(box);
    }
}

export default Exp08CubeDiffPic
