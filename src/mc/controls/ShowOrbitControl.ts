import {OrbitControls} from './expControl/OrbitControls'
import * as THREE from 'three';
import {Object3D} from "three";

export default class ShowOrbitControl extends OrbitControls {

    constructor(camera: THREE.Camera, domElement: HTMLElement | undefined) {
        super(camera, domElement)

        camera.lookAt(10, 40, 10)

        this.enableZoom = false
        // orbitControls.minPolarAngle = 10
        // orbitControls.maxPolarAngle = 10
        this.enableRotate = false
        //动态阻尼系数 就是鼠标拖拽旋转灵敏度
        this.dampingFactor = 1;
        //是否允许平移
        this.enablePan = false;
        this.autoRotate = true
        this.autoRotateSpeed = 2
    }

    initClickFunction(objects: Object3D[]) {
        window.addEventListener('mousedown', (event) => {
            let clickedObjects = getClickedObject(event, objects, this.object);
            if (clickedObjects.length > 0) {
                let obj = clickedObjects[0].object;
                console.log("点击的对象：" + obj.name);
            }
        }, false);
    }
}

//获取点击的对象
function getClickedObject(event: MouseEvent, objects: THREE.Object3D[], camera: THREE.Camera) {
    let raycaster = new THREE.Raycaster();
    let mouse = new THREE.Vector2();
    //通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    // 通过鼠标点的位置和当前相机的矩阵计算出raycaster
    raycaster.setFromCamera(mouse, camera);
    // 获取raycaster直线和所有模型相交的数组集合
    return raycaster.intersectObjects(objects, false);
}


