import * as THREE from "three";
import CommonComponent from "../CommonComponent";

class LightAmbient extends CommonComponent {
    constructor(opt?: { name?: string }) {
        super()
        const light = new THREE.PointLight(0x00ffff, 0.5, 50);//点光。
        light.name = opt?.name || this.getClassName()
        light.position.set(0, 20, -20);
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
