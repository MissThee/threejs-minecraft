import ShowOrbitControl from "./ShowOrbitControl";
import MCFirstPersonControl from "./MCFirstPersonControl";
import type * as THREE from "three";
import type {OrbitControls} from "./expControl/OrbitControls";

export enum ControlsType {
    ShowOrbitControl = 'ShowOrbitControl',
    MCFirstPersonControl = 'MCFirstPersonControl',
}

type InitControls = (
    controlsType: ControlsType,
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer,
    objects:THREE.Mesh<any, any[]>[]
) => OrbitControls | MCFirstPersonControl | undefined

export const initControls: InitControls = (controlsType, scene, camera, renderer, objects) => {
    let controls;
    switch (controlsType) {
        case ControlsType.ShowOrbitControl:
            let showOrbitControl = new ShowOrbitControl(camera, renderer.domElement);
            showOrbitControl.initClickFunction(scene.children);
            controls = showOrbitControl.controls;
            break;
        case ControlsType.MCFirstPersonControl:
            let mcFirstPersonControl = new MCFirstPersonControl(camera, renderer.domElement, objects, scene);
            controls = mcFirstPersonControl;
            break;
        default:
            break
    }
    return controls;
}
