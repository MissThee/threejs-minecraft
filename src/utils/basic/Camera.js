import * as THREE from "three";

export function initCamera() {
    let camera = new THREE.PerspectiveCamera();
    camera.name = "CAMERA";
    camera.fov = 45; //fov表示摄像机视锥体垂直视野角度，最小值为0，最大值为180，默认值为50，实际项目中一般都定义45，因为45最接近人正常睁眼角度
    // camera.aspect = width / height; //aspect表示摄像机视锥体长宽比，默认长宽比为1，即表示看到的是正方形，实际项目中使用的是屏幕的宽高比
    camera.near = 0.1; //near表示摄像机视锥体近端面，这个值默认为0.1，实际项目中都会设置为1
    camera.far = 1000; //far表示摄像机视锥体远端面，默认为2000，这个值可以是无限的，说的简单点就是我们视觉所能看到的最远距离
    camera.position.x = 0;
    camera.position.y = 10;
    camera.position.z = 0;
    return camera;
}