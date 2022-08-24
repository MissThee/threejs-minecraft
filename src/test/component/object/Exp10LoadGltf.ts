import * as THREE from "three";
import CommonComponent from "../CommonComponent";
// import * as Modules from '../../assets/module'
import {GLTF, GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

class Exp10LoadGltf extends CommonComponent {
    object3DsPromiseResolve: (value: (GLTF | PromiseLike<GLTF>)) => void
    object3DsPromise: Promise<GLTF> = new Promise(resolve => {
        this.object3DsPromiseResolve = resolve
    });

    constructor(opt?: { name?: string }) {
        super()
        let GLTFLoader1 = new GLTFLoader(); /*实例化加载器*/
        const position = {x: 10, y: 0, z: 15}
        GLTFLoader1.load('/assets/module/letterA.gltf', (obj) => {
            obj.scene.name = opt?.name || this.getClassName();
            obj.scene.position.set(position.x, position.y, position.z);
            obj.scene.rotation.set(Math.PI / 2, 0, 0);
            obj.scene.scale.set(15, 15, 15);
            obj.scene.children.forEach(e=>{
                e.castShadow = true
            })
            this.object3DsPromiseResolve(obj)
        });

        // 灯光
        const light = new THREE.SpotLight(0xffffff, 1, 100, Math.PI / 6);//聚光灯。
        light.name = opt?.name || this.getClassName()
        light.position.set(position.x, position.y + 15, position.z+5);
        const targetMesh = new THREE.Mesh()
        targetMesh.position.set(position.x, 0, position.z)
        this.object3Ds.push(targetMesh);
        light.target = targetMesh; // 照射目标需要实际添加到场景中才会生效
        light.shadow.camera.near = 1;
        light.shadow.camera.far = 200;
        //设置阴影分辨率
        light.shadow.mapSize.width = 1024;
        light.shadow.mapSize.height = 1024;
        light.castShadow = true;
        this.object3Ds.push(light);

        const mesh = new THREE.Mesh(
            new THREE.SphereGeometry(1),
            new THREE.MeshBasicMaterial({color: light.color})
        )
        mesh.position.set(light.position.x, light.position.y, light.position.z)
        this.object3Ds.push(mesh);
    }

    async add(scene: THREE.Scene) {
        super.add(scene)
        const obj = await this.object3DsPromise
        scene.add(obj.scene)
    }
}

export default Exp10LoadGltf
