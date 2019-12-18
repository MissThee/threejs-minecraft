import ShowOrbitControl from "./ShowOrbitControl";
import MCFirstPersonControl from "./MCFirstPersonControl";

export function initControls(controlsType,scene,camera,renderer,objects) {
    let controls;
    switch (controlsType) {
        case "ShowOrbitControl":
            let showOrbitControl = new ShowOrbitControl(camera, renderer.domElement);
            showOrbitControl.initClickFunction(scene.children);
            controls = showOrbitControl.controls;
            break;
        case "MCFirstPersonControl":
            let mcFirstPersonControl = new MCFirstPersonControl(camera, renderer.domElement, objects, scene);
            controls = mcFirstPersonControl;
            break;
    }
    return controls;
}