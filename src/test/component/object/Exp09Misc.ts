import * as THREE from "three";
import * as Images from "../../assets/img";
import CommonComponent from "../CommonComponent";

class Exp09Misc extends CommonComponent {
    constructor(opt?: { name?: string }) {
        super()
        const geometry = new THREE.PlaneGeometry(15, 15);
        const material = new THREE.MeshStandardMaterial({
            map: THREE.TextureLoader.prototype.load(Images.WoodMisc.woodTilesBaseColor),
            displacementMap: THREE.TextureLoader.prototype.load(Images.WoodMisc.woodTilesHeight),
            normalMap: THREE.TextureLoader.prototype.load(Images.WoodMisc.woodTilesNormal),
            roughnessMap: THREE.TextureLoader.prototype.load(Images.WoodMisc.woodTilesRoughness),
            aoMap: THREE.TextureLoader.prototype.load(Images.WoodMisc.woodTilesAmbientOcclusion),
            roughness: 0,
            metalness: 0,
            displacementScale: 0,
            side: THREE.DoubleSide,
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.name = opt?.name || this.getClassName();
        mesh.rotation.x = -0.5 * Math.PI;
        mesh.castShadow = true;
        this.object3Ds.push(mesh)
    }
}

export default Exp09Misc
