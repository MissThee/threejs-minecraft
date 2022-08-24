import * as THREE from "three";

let x = -40;
export default (obj: THREE.Object3D | THREE.Object3D[]) =>{
    if (!Array.isArray(obj)) {
        obj = [obj]
    }
    obj.forEach(e => {
        if (e) {
            x += 10;
            e.position.x = x;
            e.position.y = 3;
            e.position.z = -10;
        }
    })
}