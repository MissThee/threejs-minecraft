import * as THREE from "three";


//监听事件
class ClickObjectCatcher {
    canvasEl: HTMLCanvasElement;
    scene: THREE.Scene;
    camera: THREE.Camera;

    raycaster = new THREE.Raycaster();
    mouseXY = new THREE.Vector2();

    clickCallBack: (obj: THREE.Intersection<THREE.Object3D<Event>>[]) => void

    constructor(canvasEl: HTMLCanvasElement, scene: THREE.Scene, camera: THREE.Camera) {
        this.canvasEl = canvasEl
        this.scene = scene
        this.camera = camera
        window.addEventListener('mousedown', (e) => {
            this.clickHandler(e)
        }, false);
    }

    clickHandler(event: MouseEvent) {
        //通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.
        this.mouseXY.x = (event.clientX / this.canvasEl.clientWidth) * 2 - 1;
        this.mouseXY.y = -(event.clientY / this.canvasEl.clientHeight) * 2 + 1;
        // 通过鼠标点的位置和当前相机的矩阵计算出raycaster
        this.raycaster.setFromCamera(this.mouseXY, this.camera);
        // 获取raycaster直线和所有模型相交的数组集合
        this.clickCallBack(this.raycaster.intersectObjects(this.scene.children, false))
    }

    onClick(clickCallBack: (obj: THREE.Intersection<THREE.Object3D<Event>>[]) => void) {
        this.clickCallBack = clickCallBack
    }
}

export default ClickObjectCatcher