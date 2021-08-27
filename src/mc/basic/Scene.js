import * as THREE from 'three';
import CubeImage from "../image/CubeImage";
export function initScene() {
    let scene = new THREE.Scene();
    let backgroundColor= 0x87CEEB;
    scene.name = 'SCENE';
    scene.fog = new THREE.FogExp2(backgroundColor, 0.003);//雾效果
    //增加天空盒
    (function skyBox(backgroundType) {
        backgroundType = backgroundType || 1;
        let textureCube = new THREE.CubeTextureLoader().load([
            CubeImage.test1,
            CubeImage.test2,
            CubeImage.test3,
            CubeImage.test4,
            CubeImage.test5,
            CubeImage.test6
        ]);
        if (backgroundType === 1) {//使用场景背景添加
            scene.background = new THREE.Color(backgroundColor);
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
}
