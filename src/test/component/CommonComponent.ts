import * as THREE from "three";

abstract class CommonComponent implements Component {

    readonly object3Ds: THREE.Object3D[] = []

    async add(scene: THREE.Scene) {
        scene.add(...this.object3Ds);
    }

    protected getClassName() {
        return this?.constructor?.toString?.()?.match?.(/\w+/g)?.[1] || ''
    }

}

export default CommonComponent
