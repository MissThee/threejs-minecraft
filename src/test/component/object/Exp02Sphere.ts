import * as THREE from "three";
import CommonComponent from "../CommonComponent";

class Exp02Sphere extends CommonComponent {
    constructor(opt?: { name?: string }) {
        super();
        //设置球体的值
        // radius	        可选。此属性定义球体的半径。
        // widthSegments	可选。此属性定义球体竖直（维度）方向上的分段数。默认值是 8，最小值是 3
        // heightSegments	可选。此属性定义球体水平（经度）方向上的分段数。默认值是 6，最小值是 2
        // phiStart	        可选。此属性定义从 x 轴的什么地方开始绘制。取值范围是 0 到 2*π
        // phiLength	    可选。此属性定义从 phiStart 开始绘制多少。取值范围是 0 到 2*π
        // thetaStart	    可选。此属性定义从 y 轴的什么地方开始绘制。取值范围是 0 到 π
        // thetaLength	    可选。此属性定义从 thetaStart 开始绘制多少。取值范围是 0 到 π。一个 π 是整球，0.5*π只绘制上半球
        let sphere = new THREE.Mesh(
            new THREE.SphereGeometry(2, 30, 30),
            new THREE.MeshLambertMaterial({color: 0x9944aa})
        );
        sphere.geometry.computeVertexNormals();
        sphere.name = opt?.name || this.getClassName();
        sphere.castShadow = true;
        this.object3Ds.push(sphere)

    }
}


export default Exp02Sphere