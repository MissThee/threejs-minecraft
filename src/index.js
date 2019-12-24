import * as THREE from 'three'
import {WEBGL} from "three/examples/jsm/WebGL.js";
// import TWEEN from "@tweenjs/tween.js";//动作库
import CubeFactory from "./utils/objects/cube/CubeFactory.js";
import StatsWindow from "./utils/stats/StatsWindow.js";
import {initAmbientLight, getAmbientLightIntensity, lightHighIntensity, lightLowIntensity, lightCurrentIntensity, lightValueBecomeHigher, initDirectionalLight, getDirectionalLightIntensity, initDirectionalLight1} from "./utils/basic/Light";
import {initBGMPlayer} from "./utils/sound/Bgm";
import {initScene} from "./utils/basic/Scene";
import {initCamera} from "./utils/basic/Camera";
import {initRenderer} from "./utils/basic/Renderer";
import {initControls} from "./utils/controls/ControlBuilder";
import DefaultCube from "./utils/objects/cube/DefaultCube";
import GlobalSetting from "./utils/setting/GlobalSetting";

if (!WEBGL.isWebGLAvailable()) {
    document.body.appendChild(WEBGL.getWebGLErrorMessage());
}
//------------------------------------初始化基本对象-结束------------------------------------------------
let canvasEL = document.getElementById("canvas-frame");
// 舞台*
let scene = initScene();
// 光源*
let lightAmbient = initAmbientLight();
scene.add(lightAmbient);
let lightDirectional;
if (GlobalSetting.enableShadow) {
    lightDirectional = initDirectionalLight();
    scene.add(lightDirectional);
}

// 相机*
let camera = initCamera();
camera.aspect = canvasEL.offsetWidth / canvasEL.offsetHeight;
camera.updateProjectionMatrix();
scene.add(camera);
// 渲染器*
let renderer = initRenderer();
renderer.setSize(canvasEL.offsetWidth, canvasEL.offsetHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.getElementById('canvas-frame').appendChild(renderer.domElement);
// 收集所欲加入到场景的方块对象
let objects = [];
// 相机控制器
let controls = initControls("MCFirstPersonControl", scene, camera, renderer, objects);
//------------------------------------初始化基本对象-结束------------------------------------------------
//-----------以下为物体添加代码---------------------------------------------------------------
// import * as AddXYZLing from './utils/objects/AddXYZLine';

// AddXYZLing.buildXYZLine(scene);

let lightOption = {
    current: lightCurrentIntensity,
    low: lightLowIntensity,
    high: lightHighIntensity,
    becomeHigher: lightValueBecomeHigher
};

function changeLight() {
    lightAmbient.intensity = getAmbientLightIntensity(lightOption.current, lightOption.high, lightOption.low);
    if (GlobalSetting.enableShadow) {
        lightDirectional.intensity = getDirectionalLightIntensity(lightOption.current, lightOption.high, lightOption.low);
    }
    if (lightOption.becomeHigher) {
        let tmp = lightOption.current >= lightOption.low - (lightOption.high - lightOption.low);
        if (tmp) {
            lightOption.current -= 0.002;
        } else {
            lightOption.becomeHigher = false;
        }
    } else {
        if (lightOption.current <= lightOption.high + (lightOption.high - lightOption.low)) {
            lightOption.current += 0.002;
        } else {
            if (lightOption.current > 1.5) {
                lightOption.becomeHigher = true;
            }
        }
    }
}

(function addGrassCubes() {
    let cubeFactory = new CubeFactory(DefaultCube.grass);
    {
        let testBlock = [];
        let width = 10;
        //底板
        for (let x = -width; x < width; x++) {
            for (let z = -width; z < width; z++) {
                testBlock.push([x, -1, z]);
            }
        }
        //阶梯
        for (let x = 0; x < 5; x++) {
            for (let z = 0; z < 5; z++) {
                for (let y = 0; y < 5; y++) {
                    if (y >= x) {
                        testBlock.push([x - 7, y - x, z - 7])
                    }
                }
            }
        }
        //土堆
        {
            let mountainHeight = 4;
            for (let y = 0; y < mountainHeight; y++) {
                for (let x = y; x < 2 * mountainHeight - y; x++) {
                    for (let z = y; z < 2 * mountainHeight - y; z++) {
                        testBlock.push([x - 5, y, z + 1])
                    }
                }
            }
        }
        //碰撞检测用
        {
            for (let x = 0; x < 5; x++) {
                for (let z = 0; z < 5; z++) {
                    if (x !== 2 || z !== 2) {
                        testBlock.push([x, 0, z - 5]);
                    }
                }
            }
            testBlock.push([0, 1, -5]);
            testBlock.push([3, 3, -5]);
            testBlock.push([2, 3, -5]);
            testBlock.push([3, 3, -4]);
            testBlock.push([2, 3, -4]);
            testBlock.push([3, 3, -6]);
            testBlock.push([2, 3, -6]);
            testBlock.push([3, 3, -7]);
            testBlock.push([2, 3, -7]);
            testBlock.push([3, 2, -8]);
            testBlock.push([2, 2, -8]);
            testBlock.push([5, 2, -4]);
            testBlock.push([4, 2, -4]);
            testBlock.push([0, 1, -5]);
        }

        let zValue = -10;
        let xValue = 8;
        let yValue = 1;
        for (let cubeType of Object.values(DefaultCube)) {
            let idHalfCube = cubeType.cubeAttributes && cubeType.cubeAttributes.isHalfCube;
            testBlock.push([xValue, idHalfCube ? yValue - 1 / 4 : yValue, zValue++, cubeType]);
            if (zValue === 10) {
                yValue++;
                zValue = -10;
            }
        }

        testBlock.push([0, 15, 0, DefaultCube.grass]);


        for (let cubeInfo of testBlock) {
            let cube = cubeFactory.buildCube(...cubeInfo);

            scene.add(cube);
            objects.push(cube);
        }
    }
})();

let prevTime = performance.now();

(function animate() {
    requestAnimationFrame(animate);
    let time = performance.now();
    let delta = (time - prevTime) / 1000;
    prevTime = time;
    // TWEEN.update(delta);
    controls.update();
    renderer.render(scene, camera);
    new StatsWindow("canvas-frame").stats.update(delta);
    changeLight();
})();

window.onresize = () => {
    //更新相机视角比例
    camera.aspect = canvasEL.offsetWidth / canvasEL.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvasEL.offsetWidth, canvasEL.offsetHeight);
};

window.onload = () => {
    initBGMPlayer();
};
