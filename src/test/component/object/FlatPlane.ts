import * as THREE from "three";
import CommonComponent from "../CommonComponent";

class FlatPlane extends CommonComponent {
    constructor(opt?: { name?: string }) {
        super()
        const geometry = new THREE.PlaneGeometry(200, 200, 1, 1);
        // 无光黑色，有光照效果
        const material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            shadowSide: THREE.DoubleSide,
            side:THREE.DoubleSide
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.name = opt?.name || this.getClassName();
        mesh.rotation.x = -0.5 * Math.PI;
        mesh.receiveShadow = true;
        mesh.position.y = -3
        this.object3Ds.push(mesh)
    }
}

export default FlatPlane
