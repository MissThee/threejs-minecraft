import * as THREE from "three";
import CommonComponent from "../CommonComponent";


class CoordinateLine extends CommonComponent {
    constructor(opt?: { name?: string }) {
        super()
        const buildLine = (x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, color: number=0x000000) => {
            x1 = x1 || 0;
            y1 = y1 || 0;
            z1 = z1 || 0;
            x2 = x2 || 0;
            y2 = y2 || 0;
            z2 = z2 || 0;
            let geometry = new THREE.BufferGeometry();
            geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([x1, y1, z1, x2, y2, z2]), 3, false))
            let material = new THREE.MeshBasicMaterial({color});
            const line = new THREE.Line(geometry, material);
            line.name = opt?.name || this.getClassName()
            return line
        }
        this.object3Ds.push(
            buildLine(0, 0, 0, 10, 0, 0, 0xff0000),//中心坐标线，X轴，红
            buildLine(0, 0, 0, 0, 10, 0, 0x00ff00),//中心坐标线，Y轴，绿
            buildLine(0, 0, 0, 0, 0, 10, 0x0000ff),//中心坐标线，Z轴，蓝
        )
    }
}

export default CoordinateLine
