import * as THREE from 'three'
import TWEEN from '@tweenjs/tween.js'
import {OrbitControls} from './controls/OrbitControls'
import * as Images from './assets/img'

import Exp01PlaneTexture from "./component/object/Exp01PlaneTexture";
import Exp02Sphere from "./component/object/Exp02Sphere";
import Exp03CubeBasic from "./component/object/Exp03CubeBasic";
import Exp04CubeLambert from "./component/object/Exp04CubeLambert";
import Exp05CubePhong from "./component/object/Exp05CubePhong";
import Exp06CubeDynamicTexture from "./component/object/Exp06CubeDynamicTexture";
import Exp07CubeOnePic from "./component/object/Exp07CubeOnePic";
import Exp08CubeDiffPic from "./component/object/Exp08CubeDiffPic";
import Exp09Misc from "./component/object/Exp09Misc";
import Exp10LoadGltf from "./component/object/Exp10LoadGltf";

import FlatPlane from "./component/object/FlatPlane";
import GridLines from "./component/object/GridLines";
import CoordinateLine from "./component/object/CoordinateLine";

import LightAmbient from "./component/light/LightAmbient";
import LightPoint from "./component/light/LightPoint";
import LightDirectional from "./component/light/LightDirectional";
import LightSpot from "./component/light/LightSpot";

import setExpPosition from "./utils/setExpPosition";
import addDragFunc from "./utils/addDragFunc";
import ClickObjectCatcher from "./utils/ClickObjectCatcher";
import StatsSingle from "./utils/StatsSingle";
import GlobalProgress from "./utils/GlobalProgress";
import './style/style.css'

import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass.js';
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';


const divEl = document.createElement('div')
divEl.style.width = '100%'
divEl.style.height = '100%'
divEl.classList.add('canvas-frame')
const canvasEl = document.createElement('canvas')
divEl.append(canvasEl)
document.body.append(divEl)

// 渲染器*
let renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
    canvas: canvasEl,
    antialias: true,
    // alpha:true
});


renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(divEl.clientWidth, divEl.clientHeight);
renderer.setClearColor(0xffffff, 1.0);//背景颜色

// 并不是所有灯光都能引起阴影
// 这4种可以：DirectionalLight、PointLight、RectAreaLight、SpotLight
// 并不是所有材质都可以接收引起阴影
// 我也没全部试过，试过可以的有：MeshLambertMaterial
// 对于平行光，还需要设置 light.shadow.camera 下的这6个属性：near、far、left、right、top、bottom。使阴影在这6个面描述的范围内才能显示，否则可能只显示一部分或者不显示阴影

// 相机*
let camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(45, canvasEl.clientWidth / canvasEl.clientHeight, 0.01, 1e10);
//使用TrackballControls不能设置相机位置
camera.position.x = -10;
camera.position.y = 20;
camera.position.z = 20;
//会使坐标系中此向量在屏幕中，显示为竖直向上
// camera.up.x = 0;
// camera.up.y = 1;
// camera.up.z = 0;
camera.lookAt(0, 0, 0);

let controls: OrbitControls = new OrbitControls(camera, canvasEl);

// 场景*
let scene: THREE.Scene = new THREE.Scene();
scene.background = new THREE.Color(0xeeeeee);//0x87CEEB
scene.background = new THREE.CubeTextureLoader().load([
    Images.image1,
    Images.image2,
    Images.image3,
    Images.image4,
    Images.image5,
    Images.image6,
]);

//-----------以下为物体添加代码---------------------------------------------------------------
const lightArr = [
    new LightAmbient(),
    new LightPoint(),
    new LightDirectional(),
    new LightSpot(),
]

const expObjArr1 = [
    new Exp01PlaneTexture(),
    new Exp02Sphere(),
    new Exp03CubeBasic(),
    new Exp04CubeLambert(),
    new Exp05CubePhong(),
    new Exp06CubeDynamicTexture(),
    new Exp07CubeOnePic(),
    new Exp08CubeDiffPic(),
    new Exp09Misc(),
]

expObjArr1.forEach(e => {
    setExpPosition(e.object3Ds)
    addDragFunc(e.object3Ds, camera, renderer, controls);
})

const expObjArr2 = [
    new Exp10LoadGltf()
]

const componentAll: Component[] = [
    ...lightArr,
    ...expObjArr1,
    ...expObjArr2,
    new Exp10LoadGltf(),
    new CoordinateLine(),
    new GridLines(),
    new FlatPlane(),
]

componentAll.forEach(e => {
    e.init?.()
    e.add?.(scene)
})

// 泛光效果
const composer = new EffectComposer(renderer);
{
    renderer.toneMappingExposure = 1; // 整体曝光度
    renderer.toneMapping = THREE.ReinhardToneMapping; // 色调映射
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(new UnrealBloomPass(
            new THREE.Vector2(divEl.clientWidth, divEl.clientHeight),
            0.8, // 泛光强度
            0.6, // 泛光范围
            0.6 // 泛光生效亮度门槛
        )
    );
}
// 渲染
const render = () => {
    GlobalProgress.update()
    componentAll.forEach(e => {
        e.update?.()
    })
    TWEEN.update();
    // renderer.render(scene, camera);
    composer.render()
    StatsSingle.update();
    requestAnimationFrame(render);

}
window.addEventListener('load', render)  //循环渲染动作

const resize = () => {
    //更新相机视角比例
    renderer.setSize(divEl.clientWidth, divEl.clientHeight);
    composer.setSize(divEl.clientWidth, divEl.clientHeight);
    camera.aspect = canvasEl.clientWidth / canvasEl.clientHeight;
    camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize)

//--------------------------------------点击事件--------------------------------------
new ClickObjectCatcher(canvasEl, scene, camera)
    .onClick((catchInfo) => {
        console.log("点击的对象：", catchInfo[0])
    })
