import {Scene,FogExp2,CubeTextureLoader,Color,ShaderLib,ShaderMaterial,BackSide,CubeGeometry,AmbientLight,PerspectiveCamera,WebGLRenderer,PCFSoftShadowMap} from 'three';
import {WEBGL} from "three/examples/jsm/WebGL.js";
// import TWEEN from "@tweenjs/tween.js";//动作库
import CubeFactory from "./utils/objects/CubeFactory.js";
import StatsWindow from "./utils/stats/StatsWindow.js";
import ShowOrbitControl from "./utils/controls/ShowOrbitControl.js";
import MCFirstPersonControl from "./utils/controls/MCFirstPersonControl.js";

const THREE={Scene,FogExp2,CubeTextureLoader,Color,ShaderLib,ShaderMaterial,BackSide,CubeGeometry,AmbientLight,PerspectiveCamera,WebGLRenderer,PCFSoftShadowMap};

let enableShadow = false;

if (WEBGL.isWebGLAvailable() === false) {
    document.body.appendChild(WEBGL.getWebGLErrorMessage());
}

let canvasEL = document.getElementById("canvas-frame");
let width = canvasEL.offsetWidth;
let height = canvasEL.offsetHeight;

// 舞台*
let sceneOption = {
    backgroundColor: 0x87CEEB
};
let scene = (function initScene() {
    let scene = new THREE.Scene();
    scene.name = 'SCENE';
    scene.fog = new THREE.FogExp2(sceneOption.backgroundColor, 0.001);//雾效果
    //增加天空盒
    (function skyBox(backgroundType) {
        backgroundType = backgroundType || 1;
        let textureCube = new THREE.CubeTextureLoader().load([
            './assets/img/1.png',
            './assets/img/2.png',
            './assets/img/3.png',
            './assets/img/4.png',
            './assets/img/5.png',
            './assets/img/6.png'
        ]);
        if (backgroundType === 1) {//使用场景背景添加
            scene.background = new THREE.Color(sceneOption.backgroundColor);
        } else if (backgroundType === 2) {
            scene.background = textureCube
        } else {//使用盒子添加
            //着色器
            let cubeShader = THREE.ShaderLib["cube"];
            cubeShader.uniforms["tCube"].value = textureCube;
            let material = new THREE.ShaderMaterial({
                fragmentShader: cubeShader.fragmentShader,  //定义自己的片元着色器
                vertexShader: cubeShader.vertexShader,  //定义自己的顶点着色器
                uniforms: cubeShader.uniforms,  //给着色器传入uniform变量的值
                depthWrite: false,  //决定这个材质是否影响WebGL的深度缓存
                side: THREE.BackSide,  //侧面：反面
            });
            //创建方盒子
            let cubeWithPic = new THREE.Mesh(new THREE.CubeGeometry(1000000, 1000000, 1000000), material);
            scene.add(cubeWithPic);
        }
    })(1);
    return scene;
})();

let lightCurrentIntensity = 1;
let lightValueChangeDirection = true;
let lightHighIntensity = 1;
let lightLowIntensity = 0.4;

function getAmbientLightIntensity() {
    return Math.min(Math.max(lightLowIntensity, lightCurrentIntensity), lightHighIntensity);
}

// 光源*
let lightAmbient;
(function initDirectionalLight() {
    lightAmbient = new THREE.AmbientLight(0xffffff, getAmbientLightIntensity());//平行光。制造明暗面，并不使方块变色严重
    scene.add(lightAmbient);
})();

// 相机*
let camera;
(function initCamera() {
    camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 100000);//最远1e10
    camera.name = "CAMERA";
    camera.position.x = 0;
    camera.position.y = 10;
    camera.position.z = 0;
})();

// 渲染器*
let renderer;
(function initRenderer() {
    renderer = new THREE.WebGLRenderer({
        antialias: true//是否开启反锯齿
    });
    renderer.name = 'RENDERER';
    renderer.shadowMap.enabled = enableShadow;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;//更柔和的影子，需要的性能更高
    renderer.setSize(width, height);
    document.getElementById('canvas-frame').appendChild(renderer.domElement);
    renderer.setClearColor(0xFFFFFF, 1.0);//背景颜色
})();

// 相机控制器
let controls;
let controlsType = "MCFirstPersonControl";
let objects = [];
(function initControls() {
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
})();


//-----------以下为物体添加代码---------------------------------------------------------------
// import * as AddXYZLing from './utils/objects/AddXYZLine';
// AddXYZLing.buildXYZLine(scene);

function changeLight() {
    lightAmbient.intensity = getAmbientLightIntensity();
    // lightDirectional.intensity = getDirectionalLightIntensity();
    if (lightValueChangeDirection) {
        if (lightCurrentIntensity >= lightLowIntensity - (lightHighIntensity - lightLowIntensity)) {
            lightCurrentIntensity -= 0.002;
        } else {
            lightValueChangeDirection = false;
        }
    } else {
        if (lightCurrentIntensity <= lightHighIntensity + (lightHighIntensity - lightLowIntensity)) {
            lightCurrentIntensity += 0.002;
        } else {
            if (lightCurrentIntensity > 1.5) {
                lightValueChangeDirection = true;
            }
        }
    }
}
(function addGrassCubes() {
    let cubeFactory = new CubeFactory("GrassDirt");
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
        let mountainHeight = 4;
        for (let y = 0; y < mountainHeight; y++) {
            for (let x = y; x < 2 * mountainHeight - y; x++) {
                for (let z = y; z < 2 * mountainHeight - y; z++) {
                    testBlock.push([x - 5, y, z + 1])
                }
            }
        }
        //碰撞检测用
        for (let x = 0; x < 5; x++) {
            for (let z = 0; z < 5; z++) {
                if (x !== 2 || z !== 2) {
                    testBlock.push([x, 0, z-5]);
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

        for (let cubePosition of testBlock) {
            let cube = cubeFactory.create(cubePosition[0], cubePosition[1], cubePosition[2]);
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
    controls.update(delta);
    renderer.render(scene, camera);
    new StatsWindow("canvas-frame").stats.update(delta);
    changeLight();
})();

//使渲染器与相机随窗口大小改变适应。自适应窗口大小
window.onresize = function () {
    width = canvasEL.offsetWidth;
    height = canvasEL.offsetHeight;
    //更新相机视角比例
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
};
window.onload = () => {
    playBGM();
};
let audioBGM;

function playBGM() {
    let currentIndex = 0;
    let arr = [//把需要播放的歌曲从后往前排，这里已添加两首音乐，可继续添加多个音乐
        "./assets/sound/calm1.ogg",
        "./assets/sound/calm2.ogg",
        "./assets/sound/calm3.ogg",
        "./assets/sound/hal1.ogg",
        "./assets/sound/hal2.ogg",
        "./assets/sound/hal3.ogg",
        "./assets/sound/hal4.ogg",
    ];
    audioBGM = new Audio();
    audioBGM.preload = "true";
    audioBGM.controls = true;
    audioBGM.autoplay = true;
    // audioBGM.muted = true;
    audioBGM.hidden = true;
    audioBGM.style.display = "none";
    audioBGM.style.position = "fixed";
    audioBGM.style.top = "0";
    audioBGM.style.right = "0";
    audioBGM.style.zIndex = "101";
    audioBGM.loop = false;//禁止循环，否则无法触发ended事件
    audioBGM.src = arr[currentIndex];         //每次读数组最后一个元素
    audioBGM.addEventListener('ended', playEndedHandler, false);
    document.addEventListener('click', playHandler, false);
    // audioBGM.play();
    document.body.appendChild(audioBGM);

    function playEndedHandler() {
        currentIndex++;
        if (currentIndex >= arr.length) {
            currentIndex = 0;
        }
        audioBGM.src = arr[currentIndex];
        audioBGM.play();
        // myAudio.removeEventListener('ended', playEndedHandler, false);
    }

    function playHandler() {
        audioBGM.play();
        document.removeEventListener('click', playHandler, false);
    }
}