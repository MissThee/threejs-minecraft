//旋转
import * as THREE from "three";

export const actionRotate = (obj: THREE.Object3D | THREE.Object3D[] | undefined, x: number, y: number, z: number) => {
    if (!obj) {
        return
    }
    if (Array.isArray(obj)) {
        for (let e of obj) {
            e.rotation.x += x || 0;
            e.rotation.y += y || 0;
            e.rotation.z += z || 0;
        }
    } else {
        // obj.matrixAutoUpdate = true
        obj.rotation.x += x || 0;
        obj.rotation.y += y || 0;
        obj.rotation.z += z || 0;
    }
}

//旋转(三方向同速)
export const actionRotateXYZ = (obj: THREE.Object3D | THREE.Object3D[] | undefined, xyz?: number) => {
    actionRotate(obj, xyz || 0.01, xyz || 0.01, xyz || 0.01)
}
