import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three';
export default class ShowOrbitControl {

    constructor(camera, domElement) {
        // ShowOrbitControl._instance;
        // this.controls;
        this.camera = camera;
        if (ShowOrbitControl._instance) {
            return ShowOrbitControl._instance;
        }
        this.controls = new OrbitControls(camera, domElement);
        //动态阻尼系数 就是鼠标拖拽旋转灵敏度
        this.controls.dampingFactor = 1;
        //是否允许平移
        this.controls.enablePan = false;
        ShowOrbitControl._instance = this;
        return ShowOrbitControl._instance;
    }

    initClickFunction(objects, camera) {
        window.addEventListener('mousedown', (event) => {
            let clickedObjects = getClickedObject(event, objects, this.camera);
            if (clickedObjects.length > 0) {
                let obj = clickedObjects[0].object;
                console.log("点击的对象：" + obj.name);
            }
        }, false);
    }
}

//获取点击的对象
function getClickedObject(event, objects, camera) {
    let raycaster = new THREE.Raycaster();
    let mouse = new THREE.Vector2();
    //通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    // 通过鼠标点的位置和当前相机的矩阵计算出raycaster
    raycaster.setFromCamera(mouse, camera);
    // 获取raycaster直线和所有模型相交的数组集合
    return raycaster.intersectObjects(objects);
}


