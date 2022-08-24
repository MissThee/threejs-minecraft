//给对象设置拖动事件
import * as THREE from "three";
import {OrbitControls} from "../controls/OrbitControls";
import {DragControls} from "../controls/DragControls";

export default (obj: THREE.Object3D | THREE.Object3D[] | undefined, camera: THREE.Camera, renderer: THREE.Renderer, controls: OrbitControls) => {
    if (!obj) {
        return
    }
    if (!Array.isArray(obj)) {
        obj = [obj]
    }
    let dragControls = new DragControls(obj, camera, renderer.domElement);
    dragControls.addEventListener('dragstart', (event) => {
        controls.enabled = false;
    });
    dragControls.addEventListener('dragend', (event) => {
        controls.enabled = true;
    });
}
