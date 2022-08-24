import * as THREE from "three";
import CommonComponent from "../CommonComponent";

class LightAmbient extends CommonComponent {
    constructor(opt?: { name?: string }) {
        super()
        const light = new THREE.SpotLight(0xff00ff, 0.5, 100, Math.PI / 4);//聚光灯。
        light.name = opt?.name || this.getClassName()
        const position = {x: 50, y: 20, z: -20}
        light.position.set(position.x, position.y, position.z);
        const targetMesh = new THREE.Mesh()
        targetMesh.position.x = light.position.x
        targetMesh.position.y = 0
        targetMesh.position.z = -15
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
        mesh.position.x = light.position.x
        mesh.position.y = light.position.y
        mesh.position.z = light.position.z
        this.object3Ds.push(mesh);
    }
}

export default LightAmbient
