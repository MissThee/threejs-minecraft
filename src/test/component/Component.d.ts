declare interface Component {
    object3Ds: THREE.Object3D[]

    init?();

    update?();

    add?(scene: THREE.Scene);

}

