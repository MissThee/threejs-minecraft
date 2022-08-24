import * as THREE from "three";
import * as Images from "../../assets/img";
import CommonComponent from "../CommonComponent";

class Exp01PlaneTexture extends CommonComponent {
    constructor(opt?: { name?: string }) {
        super()
        const geometry = new THREE.PlaneGeometry(10, 5, 1, 1);
        const material = new THREE.MeshPhysicalMaterial({
            map: THREE.TextureLoader.prototype.load(Images.wood),
            side: THREE.DoubleSide
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.name = opt?.name || this.getClassName();
        mesh.rotation.x = -0.5 * Math.PI;
        mesh.castShadow = true;
        this.object3Ds.push(mesh)
    }
}

export default Exp01PlaneTexture
